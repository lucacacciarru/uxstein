import { TemplateState } from '../types/general';

type State = { template: TemplateState };

export const baseSelector = (state: State) => state.template;
