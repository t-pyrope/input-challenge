import React from 'react';
import { useAppDispatch, useAppSelector } from '../helpers/hooks';
import { deleteAll } from '../actions/inputAction';

const Header: React.FC = () => {
    const { inputs } = useAppSelector((store) => store.input);
    const dispatch = useAppDispatch();

    const deleteAllHandler = () => {
        dispatch(deleteAll());
    };

    return (
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
    );
};

export default Header;
