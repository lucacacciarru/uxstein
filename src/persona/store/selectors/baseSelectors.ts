import { PersonaState } from '../types/general';

type State = { persona: PersonaState };

export const baseSelector = (state: State) => state.persona;
