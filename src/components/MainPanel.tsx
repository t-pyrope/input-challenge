import React from 'react';
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
        <>
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
        </>
    );
};

export default MainPanel;
