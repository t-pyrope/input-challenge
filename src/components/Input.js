import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteInput } from '../actions/inputAction';
import randomColor from 'randomcolor';
import randomWords from 'random-words';
import emoji from 'random-happy-emoji';

const Input = ({ type, id }) => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();
    const [inputLabel, setInputLabel] = useState('');

    useEffect(() => {
        setInputLabel(
            `${emoji()} ${
                randomWords({
                    exactly: 1,
                    wordsPerString: 2,
                })[0]
            }`,
        );
    }, [setInputLabel]);

    useEffect(() => {
        if (type === 'color') {
            setInputValue(randomColor);
        }
        if (type === 'range') {
            setInputValue('50');
        }
    }, [setInputValue, type]);

    const deleteInputHandler = () => {
        dispatch(deleteInput(id));
    };

    const inputValueHandler = (e) => {
        setInputValue(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(inputValue);
        if (type === 'text' || type === 'number') setInputValue('');
    };

    return (
        <form className='input' onSubmit={(e) => formSubmitHandler(e)}>
            <header className='input__header'>
                <h4>
                    {inputLabel} <span className='input__span'>({type})</span>
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
                    disabled={
                        !inputValue ||
                        !(
                            type === 'email' &&
                            inputValue.match(
                                /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/,
                            )
                        )
                    }
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
