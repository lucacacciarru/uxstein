import { useSelector } from 'react-redux';
import { PersonaState } from '../../../persona/store/types/general';
import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { BuilderState } from '../../store/types';
import { useSavePersonaAsTemplateButton } from './useSavePersonaAsTemplateButton';
import { getTemplates } from '../../../template/store/selectors/getTemplates';

const BUILDER_ITEM_ID = 'builderItemId';
const PERSONA_ID = 'personaId';
const TEMPLATE_NAME = 'templateName';

const MOCK_PAGE_SETTINGS = [{ i: BUILDER_ITEM_ID, h: 1, w: 1, x: 1, y: 1 }];
const MOCK_ITEMS = getBlockItemSettings('text').gridItemSettings;

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: [BUILDER_ITEM_ID],
  byId: {
    [BUILDER_ITEM_ID]: MOCK_ITEMS,
  },
  pageSettings: MOCK_PAGE_SETTINGS,
  personaId: PERSONA_ID,
  title: 'anyTitle',
};

const MOCK_PERSONA_STATE: PersonaState = {
  data: {
    allIds: [PERSONA_ID],
    byId: {
      [PERSONA_ID]: {
        createdAt: 0,
        id: PERSONA_ID,
        src: 'anySrc',
        title: 'anyTitle',
        updatedAt: 0,
        builderData: {
          pageSettings: MOCK_PAGE_SETTINGS,
          gridItems: {},
        },
      },
    },
  },
};

function useCustomHook() {
  const { savePersonaAsTemplate } = useSavePersonaAsTemplateButton();
  const createdTemplate = useSelector(getTemplates);
  console.log('CREATED TEMPLATE', createdTemplate);
  return { savePersonaAsTemplate, createdTemplate };
}

describe('useSavePersonaAsTemplateButton hook', () => {
  test('ddd', () => {
    const { result } = renderHook(() => useCustomHook(), {
      mocks: { builder: MOCK_BUILDER_STATE, persona: MOCK_PERSONA_STATE },
    });
    act(() => result.current.savePersonaAsTemplate(TEMPLATE_NAME));
console.log(result.current)
    expect(result).toBeDefined();

  });
});
