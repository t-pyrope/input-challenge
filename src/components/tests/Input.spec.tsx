import * as React from 'react';
import * as Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Input from '../Input';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string): string => key })
}));

jest.mock('react-redux', () => ({
    useDispatch: () => {}
}));

Enzyme.configure({ adapter: new Adapter() });

describe('Input', () => {
    const type = "text";
    const id = "1234-5678-9012";
    const label = ":) Hello";

    describe('New Input', () => {
        const input = mount(
            <Input
                type={type}
                id={id}
                label={label}
            />
        )

        it('renders properly', () => {
            expect(input).toMatchSnapshot();
        })

        it('returns Input Component', () => {
            expect(input.find('form')).toHaveLength(1);
            expect(input.find('header')).toHaveLength(1);
            expect(input.find('input')).toHaveLength(1);
            expect(input.find('button')).toHaveLength(2);
            expect(input.find('h4')).toHaveLength(1);
            expect(input.find('h4').text()).toEqual(':) Hello (text)');
        })
    })
})
