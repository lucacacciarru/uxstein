import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../../types';
import { UpdateAttributeValueAction } from '../../types/update';

export const updateAttributeValueCase: CaseReducer<
  BuilderState,
  UpdateAttributeValueAction
> = (state, action) => {
  const id = action.payload.blockId;
  const attribute = action.payload.attributeToUpdate;
  return {
    ...state,
    byId: {
      ...state.byId,
      [id]: {
        ...state.byId[id],
        attributes: {
          ...state.byId[id].attributes,
          [attribute]: {
            ...state.byId[id].attributes[attribute],
            items: action.payload.items,
          },
        },
      },
    },
  };
};
