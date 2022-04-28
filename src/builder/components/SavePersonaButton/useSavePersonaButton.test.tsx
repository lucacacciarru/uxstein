import { useSelector } from 'react-redux';
import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { PersonaState } from '../../../persona/store/types/general';
import { getPersonaById } from '../../../persona/store/selectors/getPersonaById';
import { BuilderState } from '../../store/types';
import { useSavePersonaButton } from './useSavePersonaButton';

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
  entityType: 'persona',
  title: 'any title',
  globalStyle: {
    backgroundColor: '',
    columnGap: 0,
    rowGap: 0,
  },
};

const MOCK_PERSONA_STATE: PersonaState = {
  data: {
    allIds: [ENTITY_ID],
    byId: {
      [ENTITY_ID]: {
        id: ENTITY_ID,
        src: 'anySrc',
        builderData: { gridItems: {}, pageSettings: [] },
        title: 'anyTitle',
        createdAt: 0,
        updatedAt: 0,
      },
    },
  },
};

function useCustomHook() {
  const { savePersona } = useSavePersonaButton();
  const selectedPersona = useSelector(getPersonaById(ENTITY_ID));
  return { savePersona, selectedPersona };
}

describe('useSavePersonaButton hook', () => {
  test('pageSettings inside single Persona should change if savePersona function is called', () => {
    const { result } = renderHook(() => useCustomHook(), {
      mocks: { builder: MOCK_BUILDER_STATE, persona: MOCK_PERSONA_STATE },
    });
    act(() => result.current.savePersona());
    expect(result.current.selectedPersona?.builderData.pageSettings).toEqual(
      MOCK_PAGE_SETTINGS,
    );
    expect(result.current.selectedPersona?.builderData.gridItems).toEqual({
      existingId: MOCK_ITEMS,
    });
  });
});
