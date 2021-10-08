import React from 'react';
import { useAppDispatch, useAppSelector } from '../helpers/hooks';
import Input from './Input';
import { deleteAll } from '../actions/inputAction';

interface InputInterface {
    type: string,
    id: string,
    label: string,
}

const MainPanel: React.FC = () => {
    const { inputs } = useAppSelector((store) => store.input);
    const dispatch = useAppDispatch();

    const deleteAllHandler = () => {
        dispatch(deleteAll());
    };

    return (
        <div>
            <div className='header'>
                <h1>Input challenge</h1>
                {inputs.length ? (
                    <button
                        className='button'
                        onClick={() => deleteAllHandler()}
                    >
                        <b>(delete all)</b>
                    </button>
                ) : (
                    ''
                )}
            </div>
            {inputs.length ? (
                <div>
                    {inputs
                        .slice()
                        .reverse()
                        .map((input: InputInterface) => (
                            <Input
                                key={input.id}
                                id={input.id}
                                type={input.type}
                                label={input.label}
                            />
                        ))}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default MainPanel;
