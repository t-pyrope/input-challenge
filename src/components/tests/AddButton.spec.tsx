import * as React from 'react';
import * as Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import AddButton from '../AddButton';

Enzyme.configure({ adapter: new Adapter() });


describe('Add Button', () => {

    const text = 'Add text button';
    const delay = 0;
    const type = 'text';
    const onClick = jest.fn();

    describe('New AddButton', () => {
        const addButton = mount(<AddButton text={text} delay={delay} type={type} onClick={onClick} />)
        it('renders properly', () => {
            expect(addButton).toMatchSnapshot();
        })
        
        it('returns AddButton Component', () => {
            expect(addButton.find('button')).toHaveLength(1);
        })

        it('adds passed text to button', () => {
            expect(addButton.find('button').text()).toEqual('Add text button');
        })

        it('calls action when clicked', () => {
            addButton.simulate('click');
            expect(onClick).toHaveBeenCalledTimes(1);
        })
    })
})
