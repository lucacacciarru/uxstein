import {
  renderHook,
  act,
  waitFor,
} from '../../_shared/testConfig/customRenderHook';
import { TemplateState } from '../store/types/general';
import { useTemplate } from './useTemplate';

const MOCK_SINGLE_TEMPLATE = {
  '1': {
    id: '1',
    src: 'anySrc',
    name: 'Test',
    isDefault: true,
    builderData: {
      pageSettings: [],
      gridItems: {},
    },
  },
};

const MOCK_TEMPLATE_STATE: TemplateState = {
  data: {
    allIds: ['1'],
    byId: {
      ...MOCK_SINGLE_TEMPLATE,
    },
  },
};

describe('usePersona', () => {
  test('template should be empty array by default', () => {
    const { result } = renderHook(() => useTemplate());
    expect(result.current.templates).toEqual([]);
  });

  test('templateList should be full if the user has created template before', () => {
    const { result } = renderHook(() => useTemplate(), {
      mocks: {
        template: MOCK_TEMPLATE_STATE,
      },
    });
    expect(result.current.templates).toContain(MOCK_SINGLE_TEMPLATE['1']);
  });

  test('if updateTemplate was called for change selected template name, it should be change', async () => {
    const { result } = renderHook(() => useTemplate(), {
      mocks: {
        template: MOCK_TEMPLATE_STATE,
      },
    });
    const newName = 'test';

    act(() => result.current.updateTemplate('1', { name: newName }));

    waitFor(() => {
      expect(result.current.templates['1'].name).toBe(newName);
    });
  });

  test('if fetchTemplateList is called, template state should be populated', () => {
    const { result } = renderHook(() => useTemplate(), {
      mocks: {
        template: MOCK_TEMPLATE_STATE,
      },
    });
    act(() => result.current.fetchTemplateList());
    waitFor(() => {
      expect(result.current.templates).toContain(MOCK_SINGLE_TEMPLATE);
    });
  });
  test('if delete a Template, it should not be on allIds and ById ', async () => {
    const { result } = renderHook(() => useTemplate(), {
      mocks: {
        template: {
          data: {
            allIds: ['1'],
            byId: {
              ...MOCK_SINGLE_TEMPLATE,
            },
          },
        },
      },
    });

    act(() => result.current.deleteTemplate('1'));

    waitFor(() => {
      expect(result.current.templates).not.toContain(MOCK_SINGLE_TEMPLATE);
    });
  });
});
