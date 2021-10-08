import {
    ADD_INPUT, DELETE_INPUT, DELETE_ALL,
} from './actionTypes';

import {
    AddInputAction, DeleteInputAction,
    DeleteAllAction,
} from './types';

export const addInput = (type: string): AddInputAction => {
    return {
        type: ADD_INPUT,
        payload: {
            type: type
        },
    };
};

export const deleteInput = (id: string): DeleteInputAction => {
    return {
        type: DELETE_INPUT,
        payload: {
            id: id,
        },
    };
};

export const deleteAll = (): DeleteAllAction => {
    return {
        type: DELETE_ALL,
    };
};
