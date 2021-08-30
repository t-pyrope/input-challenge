import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from './Input';
import { deleteAll } from '../actions/inputAction';

const MainPanel = () => {
    const { inputs } = useSelector((store) => store.input);
    const dispatch = useDispatch();

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
                        .map((input) => (
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
