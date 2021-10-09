import {
    ADD_INPUT, DELETE_INPUT, DELETE_ALL,
} from './actionTypes';

import {
    AddInputAction, DeleteInputAction,
    DeleteAllAction,
} from './types';

export const addInput = (type: string): AddInputAction => ({
    type: ADD_INPUT,
    payload: {
        type
    },
});

export const deleteInput = (id: string): DeleteInputAction => ({
    type: DELETE_INPUT,
    payload: {
        id,
    },
});

export const deleteAll = (): DeleteAllAction => ({
    type: DELETE_ALL,
});
