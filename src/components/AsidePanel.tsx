import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addInput } from '../actions/inputAction';
import AddButton from './AddButton';

const AsidePanel: React.FC = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const inputHandler = (type: string): void => {
        dispatch(addInput(type));
    };

    return (
        <div>
            <div className='container'>
                <AddButton
                    text={t('addTextField')}
                    onClick={inputHandler}
                    delay={0}
                    type="text"
                />
                <AddButton
                    text={t('addNumberField')}
                    onClick={inputHandler}
                    delay={0.2}
                    type="number"
                />
                <AddButton
                    text={t('addColorField')}
                    onClick={inputHandler}
                    delay={0.4}
                    type="color"
                />
                <AddButton
                    text={t('addDateField')}
                    onClick={inputHandler}
                    delay={0.6}
                    type="date"
                />
                <AddButton
                    text={t('addRangeField')}
                    onClick={inputHandler}
                    delay={0.8}
                    type="range"
                />
                <AddButton
                    text={t('addEmailField')}
                    onClick={inputHandler}
                    delay={1}
                    type="email"
                />
            </div>
        </div>
    );
};

export default AsidePanel;
