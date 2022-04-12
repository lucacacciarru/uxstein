import { useSelector } from 'react-redux';
import { BuilderState } from '../../../builder/store/types';
import {
  renderHook,
  act,
  waitFor,
} from '../../../_shared/testConfig/customRenderHook';
import { TemplateState } from '../../store/types/general';
import { useTemplatePreviewModal } from './useTemplatePreviewModal';

const TEMPLATE_ID = 'templateId';
const TEMPLATE_NAME = 'any name'

const TEMPLATE_MOCK: TemplateState = {
  data: {
    allIds: [TEMPLATE_ID],
    byId: {
      [TEMPLATE_ID]: {
        id: TEMPLATE_ID,
        src: 'any url',
        builderData: {
          gridItems: {},
          pageSettings: [{ i: 'anyItemId', h: 1, w: 1, x: 0, y: 0 }],
        },
        name: TEMPLATE_NAME,
        isDefault: false,
      },
    },
  },
};

const CREATE_PERSONA_EXPECTED_BUILDER_STATE: BuilderState = {
  allIds: [],
  byId: {},
  pageSettings: [{ i: 'anyItemId', h: 1, w: 1, x: 0, y: 0 }],
  entityId: '',
  entityType: 'persona',
  title: '',
};

const EDIT_TEMPLATE_EXPECTED_BUILDER_STATE: BuilderState = {
  allIds: [],
  byId: {},
  pageSettings: [{ i: 'anyItemId', h: 1, w: 1, x: 0, y: 0 }],
  entityId: TEMPLATE_ID,
  entityType: 'template',
  title: TEMPLATE_NAME,
}

const useTestHook = () => {
  const builderState = useSelector(state => state.builder);
  const { imageActionModalProps } = useTemplatePreviewModal(TEMPLATE_ID);

  return {
    builderState,
    createPersona: imageActionModalProps.primaryAction,
    editTemplate: imageActionModalProps.secondaryAction,
  };
};

describe('useTemplatePreviewModal', () => {
  test('should populate builder with a persona when createPersona is called', async () => {
    const { result } = renderHook(() => useTestHook(), {
      mocks: { template: TEMPLATE_MOCK },
    });

    act(() => {
      result.current.createPersona();
    });

    await waitFor(() => {
      expect(result.current.builderState).toEqual(
        CREATE_PERSONA_EXPECTED_BUILDER_STATE,
      );
    });
  });

  test('should populate builder when editTemplate is called', async () => {
    const { result } = renderHook(() => useTestHook(), {
      mocks: { template: TEMPLATE_MOCK },
    });

    act(() => {
      result.current.editTemplate();
    });

    await waitFor(() => {
      expect(result.current.builderState).toEqual(
        EDIT_TEMPLATE_EXPECTED_BUILDER_STATE,
      );
    });
  });
});
