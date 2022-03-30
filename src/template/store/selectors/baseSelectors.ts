import { TemplateState } from '../types/general';

type State = { persona: TemplateState };

export const baseSelector = (state: State) => state.persona;
