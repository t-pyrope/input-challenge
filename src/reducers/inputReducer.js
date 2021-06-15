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
        default:
            return { ...state };
    }
};

export default inputReducer;
