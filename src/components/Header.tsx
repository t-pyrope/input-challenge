import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import { useAppDispatch, useAppSelector } from '../helpers/hooks';
import { deleteAll } from '../actions/inputAction';

const Header: React.FC = () => {
    const [lang, setLang] = useState('en');
    const { inputs } = useAppSelector((store) => store.input);
    const dispatch = useAppDispatch();
    const { t } = useTranslation();

    const changeLanguage = (lng: string): void => {
      i18n.changeLanguage(lng);
    };

    const deleteAllHandler = () => {
        dispatch(deleteAll());
    };

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const { value } = e.target;
        changeLanguage(value);
        setLang(value);
        
    }

    return (
        <div className='header'>
            <div className="container container_start">
                <h1>{t('inputChallenge')}</h1>
                {' '}
                {inputs.length ? (
                    <button
                        className='button'
                        onClick={() => deleteAllHandler()}
                    >
                        <b>({t('deleteAll')})</b>
                    </button>
                ) : (
                    ''
                )}
            </div>
            <select value={lang} onChange={onChange}>
                <option value="en">en</option>
                <option value="ru">ru</option>
                <option value="cs">cs</option>
            </select>
        </div>
    );
};

export default Header;
