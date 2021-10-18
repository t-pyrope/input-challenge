import React from 'react';
import { AnimatePresence } from 'framer-motion';

import { useAppSelector } from '../helpers/hooks';
import Input from './Input';

interface InputInterface {
    type: string,
    id: string,
    label: string,
}

const MainPanel: React.FC = () => {
    const { inputs } = useAppSelector((store) => store.input);

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
