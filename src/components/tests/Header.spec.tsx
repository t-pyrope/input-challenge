import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Header from '../Header';


jest.mock('react-i18next', () => ({
    initReactI18next: { type: "3rdParty", init: jest.fn() },
    useTranslation: () => ({ t: (key: string) => key })
}));

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-redux', () => ({
    useDispatch: () => {},
    useSelector: () => ({
      inputs: [1],
    }),
}));

describe('Header', () => {

    it('renders properly', () => {
        const header = shallow(<Header />);
        expect(header).toMatchSnapshot();
    })

    it('returns Header Component', () => {
        const header = shallow(<Header />);
        expect(header.find('div.header')).toHaveLength(1);
        expect(header.find('div.container')).toHaveLength(1);
        expect(header.find('select')).toHaveLength(1);
        expect(header.find('option')).toHaveLength(3);
        expect(header.find('button')).toHaveLength(1);
    })
})
