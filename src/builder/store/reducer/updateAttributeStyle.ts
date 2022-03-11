import { CaseReducer } from '@reduxjs/toolkit';
import { BuilderState } from '../types';
import { UpdateAttributeStyleAction } from '../types/updateAttributeStyle';

export const updateAttributeStyleCase: CaseReducer<
    BuilderState,
    UpdateAttributeStyleAction
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
                        style: {
                            ...state.byId[id].attributes[attribute]?.style,
                            ...action.payload.style
                        }
                    },
                },
            },
        },
    };
};