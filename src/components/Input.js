import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteInput } from '../actions/inputAction';
import randomColor from 'randomcolor';

const Input = ({ type, id, label }) => {
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        if (type === 'color') {
            setInputValue(randomColor);
        }
        if (type === 'range') {
            setInputValue('50');
        }
    }, [setInputValue, type]);

    useEffect(() => {
        if (!inputValue || (type === 'email' &&
            !inputValue.match(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/)
        )) { setIsDisabled(true); } else { setIsDisabled(false) }
    }, [inputValue, type]);

    const deleteInputHandler = () => {
        dispatch(deleteInput(id));
    };

    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(inputValue);
        if (['text', 'number', 'email'].includes(type)) setInputValue('');
    };

    return (
        <form className='input' onSubmit={(e) => formSubmitHandler(e)}>
            <header className='input__header'>
                <h4>
                    {label} <span className='input__span'>({type})</span>
                </h4>
                <button
                    aria-label='delete'
                    type='button'
                    className='button button_trash'
                    onClick={() => deleteInputHandler()}
                ></button>
            </header>
            <div className='input__body'>
                <input
                    type={type}
                    value={inputValue}
                    onChange={(e) => inputValueHandler(e)}
                />
                <button
                    className='button button_small input__submit'
                    type='submit'
                    disabled={isDisabled}
                >
                    Console.log it!
                </button>
            </div>
        </form>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Input;
