import { useSelector } from 'react-redux';
import { renderHook, act } from '../../../_shared/testConfig/customRenderHook';
import { getPersonaById } from '../../store/selectors/getPersonaById';
import { PersonaState } from '../../store/types/general';
import { useOptionPersonaCard } from './useOptionPersonaCard';

const EXISTING_ID = 'existingId';
const NEW_NAME = 'Test';

const MOCK_PERSONA_STATE: PersonaState = {
  data: {
    allIds: [EXISTING_ID],
    byId: {
      anyId: {
        builderData: { gridItems: {}, pageSettings: [] },
        createdAt: 0,
        id: EXISTING_ID,
        src: 'anySrc',
        title: 'anyTitle',
        updatedAt: 0,
      },
    },
  },
};

function useCustomHook() {
  const { deleteSelectedPersona, renamePersonaTitle } =
    useOptionPersonaCard(EXISTING_ID);
  const selectedPersona = useSelector(getPersonaById(EXISTING_ID));
  return { deleteSelectedPersona, renamePersonaTitle, selectedPersona };
}

describe('useOptionPersonaCard hook', () => {
  test('if renamePersonaTitle is called the title of selected persona should be change', () => {
    const { result } = renderHook(() => useCustomHook(), {
      mocks: { persona: MOCK_PERSONA_STATE },
    });
    act(() => result.current.renamePersonaTitle(NEW_NAME));
    expect(result.current.selectedPersona.title).toBe(NEW_NAME);
  });
  test('if deleteSelectedPersona is called the selected persona should be undefined', () => {
    const { result } = renderHook(() => useCustomHook(), {
      mocks: { persona: MOCK_PERSONA_STATE },
    });
    act(() => result.current.deleteSelectedPersona());
    expect(result.current.selectedPersona).toBeUndefined();
  });
});
