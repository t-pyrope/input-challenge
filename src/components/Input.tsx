import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import randomColor from 'randomcolor';
import { motion } from 'framer-motion';

import { deleteInput } from '../actions/inputAction';

import formatDate from '../helpers/functions';

interface InputProps {
    type: string,
    id: string,
    label: string
}

const Input = ({ type, id, label }: InputProps): React.ReactElement => {
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);

    const { t } = useTranslation();

    const dispatch = useDispatch();

    useEffect(() => {
        if (type === 'color') {
            setInputValue(randomColor());
        }
        if (type === 'range') {
            setInputValue('50');
        }
        if (type === 'date') {
            const now = new Date();
            setInputValue(formatDate(now));
        }
    }, [setInputValue, type]);

    useEffect(() => {
        if (!inputValue || (type === 'email'
            && !inputValue.match(/^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/)
        )) { setIsDisabled(true); } else { setIsDisabled(false); }
    }, [inputValue, type]);

    const getType = (value: string): string => t(value)

    const deleteInputHandler = () => {
        dispatch(deleteInput(id));
    };

    const inputValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const formSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        // eslint-disable-next-line no-console
        console.log(inputValue);
        if (['text', 'number', 'email'].includes(type)) setInputValue('');
    };

    return (
        <motion.form
            initial={{ x: -50, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20
            }}
            exit={{ opacity: 0, x: 50, transition: {duration: 0.4} }}
            className="input"
            onSubmit={(e) => formSubmitHandler(e)}
        >
            <header className="input__header">
                <h4>
                    {label}
                    {' '}
                    <span className="input__span">
                        (
                        {getType(type)}
                        )
                    </span>
                </h4>
                <button
                    aria-label="delete"
                    type="button"
                    className="button button_trash"
                    onClick={() => deleteInputHandler()}
                />
            </header>
            <div className="input__body">
                <input
                    type={type}
                    value={inputValue}
                    onChange={(e) => inputValueHandler(e)}
                />
                <button
                    className="button button_small input__submit"
                    type="submit"
                    disabled={isDisabled}
                >
                    Console.log it!
                </button>
            </div>
        </motion.form>
    );
};

export default Input;
