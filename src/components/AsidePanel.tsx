import * as React from 'react';
import { useDispatch } from 'react-redux';
import { addInput } from '../actions/inputAction';

const AsidePanel: React.FC = () => {
    const dispatch = useDispatch();

    const inputHandler = (type: string): void => {
        dispatch(addInput(type));
    };

    return (
        <div>
            <div className='container' >
                <button
                    className='button button_add'
                    onClick={() => inputHandler('text')
                    }
                >
                    Add text field
                </button>
                <button
                    className='button button_add'
                    onClick={() => inputHandler('number')}
                >
                    Add number field
                </button>
                <button
                    className='button button_add'
                    onClick={() => inputHandler('color')}
                >
                    Add color field
                </button>
                <button
                    className='button button_add'
                    onClick={() => inputHandler('date')}
                >
                    Add date field
                </button>
                <button
                    className='button button_add'
                    onClick={() => inputHandler('range')}
                >
                    Add range field
                </button>
                <button
                    className='button button_add'
                    onClick={() => inputHandler('email')}
                >
                    Add email field
                </button>
            </div>
        </div>
    );
};

export default AsidePanel;
