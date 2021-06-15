import { v4 as uuid_v4 } from 'uuid';

export const addInput = (type) => {
    return {
        type: 'ADD_INPUT',
        payload: {
            type: type,
            id: uuid_v4(),
        },
    };
};

export const deleteInput = (id) => {
    return {
        type: 'DELETE_INPUT',
        payload: {
            id: id,
        },
    };
};
