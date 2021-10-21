import { ADD_INPUT, DELETE_ALL, DELETE_INPUT } from '../actionTypes';
import { addInput, deleteAll, deleteInput } from '../inputAction';

describe('inputAction', () => {
    it('addInput passes correct data', () => {
        const expectedAction = {
            type: ADD_INPUT,
            payload: {
                type: "text",
            }
        }

        expect(addInput("text")).toEqual(expectedAction);
    })
    it('deleteInput involves correctly', () => {
        const expectedAction = {
            type: DELETE_INPUT,
            payload: {
                id: "12345"
            }
        }

        expect(deleteInput("12345")).toEqual(expectedAction);
    })

    it('deleteAll involves correctly', () => {
        const expectedAction = {
            type: DELETE_ALL
        }

        expect(deleteAll()).toEqual(expectedAction)
    })
})
