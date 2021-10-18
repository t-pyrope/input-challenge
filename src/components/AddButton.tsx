import React from 'react';
import { motion } from 'framer-motion';

interface AddButtonInterface {
    text: string,
    delay: number,
    onClick: (value: string) => void
}

const AddButton: React.FC<AddButtonInterface> = ({
    text, delay, onClick
}) => (
    <motion.button
        initial={{ y: 20, opacity: 0 }}
        animate={{y: 0, opacity: 1}}
        transition={{ duration: 0.01, delay }}
        className='button button_add'
        onClick={() => onClick('text')}
    >
        {text}
    </motion.button>
)
export default AddButton;
