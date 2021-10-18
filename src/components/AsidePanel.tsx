import * as React from 'react';
import { useAppDispatch } from '../helpers/hooks';
import { addInput } from '../actions/inputAction';
import AddButton from './AddButton';

const AsidePanel: React.FC = () => {
    const dispatch = useAppDispatch();

    const inputHandler = (type: string): void => {
        dispatch(addInput(type));
    };

    return (
        <div>
            <div className='container'>
                <AddButton
                    text="Add text field"
                    onClick={() => inputHandler('text')}
                    delay={0}
                />
                <AddButton
                    text="Add number field"
                    onClick={() => inputHandler('number')}
                    delay={0.2}
                />
                <AddButton
                    text="Add color field"
                    onClick={() => inputHandler('color')}
                    delay={0.4}
                />
                <AddButton
                    text="Add date field"
                    onClick={() => inputHandler('date')}
                    delay={0.6}
                />
                <AddButton
                    text="Add range field"
                    onClick={() => inputHandler('range')}
                    delay={0.8}
                />
                <AddButton
                    text="Add email field"
                    onClick={() => inputHandler('email')}
                    delay={1}
                />
            </div>
        </div>
    );
};

export default AsidePanel;
