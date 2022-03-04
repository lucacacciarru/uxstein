import { BuilderState } from '../types'

type State = { builder: BuilderState }

export const baseSelector = (state: State) => state.builder;