import { useSelector } from 'react-redux';
import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { PersonaState } from '../../../persona/store/types/general';
import { BuilderState } from '../../store/types';
import { useSavePersonaAsTemplateButton } from './useSavePersonaAsTemplateButton';
import { getTemplates } from '../../../template/store/selectors/getTemplates';

const ENTITY_ID = 'entityId';
const PERSONA_ID = 'personaId';
const TEMPLATE_NAME = 'templateName';

const MOCK_PAGE_SETTINGS = [{ i: ENTITY_ID, h: 1, w: 1, x: 1, y: 1 }];
const MOCK_ITEMS = getBlockItemSettings('text').gridItemSettings;

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [ENTITY_ID],
  byId: {
    [ENTITY_ID]: MOCK_ITEMS,
  },
  pageSettings: MOCK_PAGE_SETTINGS,
  entityId: PERSONA_ID,
  entityType: 'persona',
  title: 'anyTitle',
  globalStyle: {
    backgroundColor: '',
    columnGap: 0,
    rowGap: 0,
  },
};

const MOCK_PERSONA_STATE: PersonaState = {
  data: {
    allIds: [PERSONA_ID],
    byId: {
      [PERSONA_ID]: {
        id: PERSONA_ID,
        src: 'anySrc',
        builderData: {
          pageSettings: MOCK_PAGE_SETTINGS,
          gridItems: {
            [ENTITY_ID]: MOCK_ITEMS,
          },
          globalStyle: MOCK_BUILDER_STATE.globalStyle,
        },
        title: 'anyTitle',
        createdAt: 0,
        updatedAt: 0,
      },
    },
  },
};

function useCustomHook() {
  const { savePersonaAsTemplate } = useSavePersonaAsTemplateButton();
  const createdTemplate = useSelector(getTemplates).find(
    template => template.name === TEMPLATE_NAME,
  );

  return { savePersonaAsTemplate, createdTemplate };
}

describe('useSavePersonaAsTemplateButton hook', () => {
  test('should create a Template with the passed name and the starting Persona builderData', () => {
    const { result } = renderHook(() => useCustomHook(), {
      mocks: { builder: MOCK_BUILDER_STATE, persona: MOCK_PERSONA_STATE },
    });
    act(() => result.current.savePersonaAsTemplate(TEMPLATE_NAME));

    expect(result.current.createdTemplate).toBeDefined();
    expect(result.current.createdTemplate?.builderData.pageSettings).toEqual(
      MOCK_PAGE_SETTINGS,
    );
    expect(result.current.createdTemplate?.builderData.gridItems).toEqual({
      [ENTITY_ID]: MOCK_ITEMS,
    });
  });
});
