import randomWords from 'random-words';
import emoji from 'random-happy-emoji';

const initState = {
    inputs: [],
};

const inputReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_INPUT':
            return {
                ...state,
                inputs: [
                    ...state.inputs,
                    {
                        type: action.payload.type,
                        id: action.payload.id,
                        label: `${ emoji() } ${ randomWords({ exactly: 1, wordsPerString: 2 })[0] }`
                    },
                ],
            };
        case 'DELETE_INPUT':
            return {
                ...state,
                inputs: state.inputs.filter(
                    (input) => input.id !== action.payload.id,
                ),
            };
        case 'DELETE_ALL':
            return {
                ...state,
                inputs: [],
            };
        default:
            return { ...state };
    }
};

export default inputReducer;
