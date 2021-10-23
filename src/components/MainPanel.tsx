import React from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';

import Input from './Input';
import { InputInterface, RootState } from '../reducers/types';

const MainPanel: React.FC = () => {
    const { inputs } = useSelector((store: RootState) => store.input);

    return (
        <div>
            <AnimatePresence>
                {inputs.length ? inputs
                    .slice()
                    .reverse()
                    .map((input: InputInterface) => (
                        <Input
                            key={input.id}
                            id={input.id}
                            type={input.type}
                            label={input.label}
                        />
                    )) : (
                        ''
                    )}
            </AnimatePresence>
        </div>
    );
};

export default MainPanel;
