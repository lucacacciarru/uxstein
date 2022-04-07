import { useSelector } from 'react-redux';
import { getPersonaById } from '../../../persona/store/selectors/getPersonaById';
import { PersonaState } from '../../../persona/store/types/general';
import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { getBlockItemSettings } from '../../config/blockItemSettings';
import { BuilderState } from '../../store/types';
import { useSavePersonaButton } from './useSavePersonaButton';

const EXISTING_ID = 'existingId';
const ANY_ID = 'anyId';

const MOCK_PAGE_SETTINGS = [{ i: EXISTING_ID, h: 1, w: 1, x: 1, y: 1 }];
const MOCK_ITEMS = getBlockItemSettings('text').gridItemSettings;

const MOCK_BUILDER_STATE: BuilderState = {
  allIds: ['existingId'],
  byId: {
    [EXISTING_ID]: MOCK_ITEMS,
  },
  pageSettings: MOCK_PAGE_SETTINGS,
  personaId: ANY_ID,
  title: 'any title',
};

const MOCK_PERSONA_STATE: PersonaState = {
  data: {
    allIds: [ANY_ID],
    byId: {
      anyId: {
        builderData: { gridItems: {}, pageSettings: [] },
        createdAt: 0,
        id: ANY_ID,
        src: 'anySrc',
        title: 'anyTitle',
        updatedAt: 0,
      },
    },
  },
};

function useCustomHook() {
  const { savePersona } = useSavePersonaButton();
  const selectedPersona = useSelector(getPersonaById(ANY_ID));
  return { savePersona, selectedPersona };
}

describe('useSaveButton hook', () => {
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
