import { AnyAction } from 'redux';

import randomWords from 'random-words';
import emoji from 'random-happy-emoji';
import { v4 as uuid_v4 } from 'uuid';

import { ADD_INPUT, DELETE_INPUT, DELETE_ALL } from '../actions/actionTypes';
import { InputState } from './types';

const initState: InputState = {
    inputs: [],
};

const inputReducer = (state: InputState = initState, action: AnyAction): InputState => {
    switch (action.type) {
        case ADD_INPUT:
            return {
                ...state,
                inputs: [
                    ...state.inputs,
                    {
                        type: action.payload.type,
                        id: uuid_v4(),
                        label: `${emoji()} ${randomWords({ exactly: 1, wordsPerString: 2 })[0]}`
                    },
                ],
            };
        case DELETE_INPUT:
            return {
                ...state,
                inputs: state.inputs.filter(
                    (input) => input.id !== action.payload.id,
                ),
            };
        case DELETE_ALL:
            return {
                ...state,
                inputs: [],
            };
        default:
            return { ...state };
    }
};

export default inputReducer;
