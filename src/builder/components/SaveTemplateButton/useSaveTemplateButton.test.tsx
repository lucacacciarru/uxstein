import { useSelector } from 'react-redux';
import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { TemplateState } from '../../../template/store/types/general';
import { getTemplateById } from '../../../template/store/selectors/getTemplateById';
import { BuilderState } from '../../store/types';
import { useSaveTemplateButton } from './useSaveTemplateButton';

const EXISTING_ID = 'existingId';
const ENTITY_ID = 'anyEntityId';

const MOCK_PAGE_SETTINGS = [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }];
const MOCK_ITEMS = getBlockItemSettings('text').gridItemSettings;

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [EXISTING_ID],
  byId: {
    [EXISTING_ID]: MOCK_ITEMS,
  },
  pageSettings: MOCK_PAGE_SETTINGS,
  entityId: ENTITY_ID,
  entityType: 'template',
  title: 'any title',
  globalStyle: {
    backgroundColor: '',
    columnGap: 0,
    rowGap: 0,
    containerPaddingX: 0,
    containerPaddingY: 0,
  },
};

const MOCK_TEMPLATE_STATE: TemplateState = {
  data: {
    allIds: [ENTITY_ID],
    byId: {
      [ENTITY_ID]: {
        id: ENTITY_ID,
        src: 'anySrc',
        builderData: {
          gridItems: {},
          pageSettings: [],
          globalStyle: {
            backgroundColor: '#000000',
            columnGap: 0,
            rowGap: 0,
            containerPaddingX: 0,
            containerPaddingY: 0,
          },
        },
        name: 'anyName',
        isDefault: false,
      },
    },
  },
};

function useCustomHook() {
  const { saveTemplate } = useSaveTemplateButton();
  const selectedTemplate = useSelector(getTemplateById(ENTITY_ID));
  return { saveTemplate, selectedTemplate };
}

describe('useSaveTemplateButton hook', () => {
  test('should change pageSettings inside the template if saveTemplate() is called', () => {
    const { result } = renderHook(() => useCustomHook(), {
      mocks: { builder: MOCK_BUILDER_STATE, template: MOCK_TEMPLATE_STATE },
    });
    act(() => result.current.saveTemplate());

    expect(result.current.selectedTemplate).toBeDefined();
    expect(result.current.selectedTemplate?.builderData.pageSettings).toEqual(
      MOCK_PAGE_SETTINGS,
    );
    expect(result.current.selectedTemplate?.builderData.gridItems).toEqual({
      [EXISTING_ID]: MOCK_ITEMS,
    });
  });
});
