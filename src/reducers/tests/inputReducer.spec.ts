import inputReducer from "../inputReducer";
import { ADD_INPUT, DELETE_ALL, DELETE_INPUT } from "../../actions/actionTypes";

jest.mock('uuid', () => ({ v4: () => 'my-super-unique-uuid' }));
jest.mock('random-happy-emoji', () => ({
    __esModule: true,
    default: () => ':)'
}));
jest.mock('random-words', () => ({
    __esModule: true,
    default: () => ['Hello']
}));

describe('input reducer', () => {
    it('adds new input to the store', () => {
        const initState = {
            inputs: [],
        }

        const action = {
            type: ADD_INPUT,
            payload: {
                type: 'text'
            }
        }

        expect(inputReducer(initState, action)).toEqual({
            ...initState,
            inputs: [
                {
                    type: 'text',
                    id: 'my-super-unique-uuid',
                    label: `:) Hello`
                }
            ]
        })
    })

    it('deletes input based on id', () => {
        const initState = {
            inputs: [
                {
                    id: 'hello-hello-hello-hello',
                    type: 'color',
                    label: ':) Hello'
                },
                {
                    id: 'good-good-good-good',
                    type: 'range',
                    label: ':) Goodbye'
                },
            ]
        };

        const action = {
            type: DELETE_INPUT,
            payload: {
                id: 'hello-hello-hello-hello'
            }
        }

        expect(inputReducer(initState, action)).toEqual({
            inputs: [
                {
                    id: 'good-good-good-good',
                    type: 'range',
                    label: ':) Goodbye'
                }
            ]
        })
    });

    it('deletes all inputs', () => {
        const initState = {
            inputs: [
                {
                    id: 'hello-hello-hello-hello',
                    type: 'color',
                    label: ':) Hello'
                },
                {
                    id: 'good-good-good-good',
                    type: 'range',
                    label: ':) Goodbye'
                },
            ]
        };

        const action = {
            type: DELETE_ALL
        }

        expect(inputReducer(initState, action)).toEqual({
            inputs: []
        })
    })
})
