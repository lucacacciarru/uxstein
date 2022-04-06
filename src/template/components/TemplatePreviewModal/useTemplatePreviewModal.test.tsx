import { useSelector } from 'react-redux';
import { BuilderState } from '../../../builder/store/types';
import {
  renderHook,
  act,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { TemplateState } from '../../store/types/general';
import { useTemplatePreviewModal } from './useTemplatePreviewModal';
const EXAMPLE_ID = 'exampleId';
const TEMPLATE_MOCK: TemplateState = {
  data: {
    allIds: [EXAMPLE_ID],
    byId: {
      [EXAMPLE_ID]: {
        id: EXAMPLE_ID,
        builderData: {
          gridItems: {},
          pageSettings: [{ i: 'anyItemId', h: 1, w: 1, x: 0, y: 0 }],
        },
        isDefault: false,
        name: 'any string',
        src: 'any url',
      },
    },
  },
};

const EXPECTED_BUILDER_STATE: BuilderState = {
  allIds: [],
  byId: {},
  pageSettings: [{ i: 'anyItemId', h: 1, w: 1, x: 0, y: 0 }],
  personaId: '',
  title: '',
};

const useTestHook = () => {
  const builderState = useSelector(state => state.builder);
  const { imageActionModalProps } = useTemplatePreviewModal(EXAMPLE_ID);

  return {
    builderState,
    createPersona: imageActionModalProps.primaryAction,
  };
};

describe('useTemplatePreviewModal', () => {
  test('should populate builder when call handleCreatePersona', async () => {
    const { result } = renderHook(() => useTestHook(), {
      mocks: { template: TEMPLATE_MOCK },
    });

    act(() => {
      result.current.createPersona();
    });

    await waitFor(() => {
      expect(result.current.builderState).toEqual(EXPECTED_BUILDER_STATE);
    });
  });
});
