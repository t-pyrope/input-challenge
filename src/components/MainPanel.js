import React from 'react';
import { useSelector } from 'react-redux';
import Input from './Input';

const MainPanel = () => {
    const { inputs } = useSelector((store) => store.input);

    return (
        <div>
            {inputs.length ? (
                <h1>Your inputs:</h1>
            ) : (
                <h1>Add some input fields</h1>
            )}
            {inputs && (
                <div>
                    {inputs
                        .slice()
                        .reverse()
                        .map((input) => (
                            <Input
                                key={input.id}
                                id={input.id}
                                type={input.type}
                                inputName={input.inputName}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};

export default MainPanel;
