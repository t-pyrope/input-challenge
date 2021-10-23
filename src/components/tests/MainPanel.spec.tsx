import  * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import MainPanel from '../MainPanel';

jest.mock('react-redux', () => ({
    useSelector: () => ({
        inputs: [ {
            type: 'text',
            id: '1234-5678-9012',
            label: ':) Hello'
        }]
    }),
    useDispatch: () => {}
}));

Enzyme.configure({ adapter: new Adapter() });

describe('Main Panel', () => {
    const mainPanel = shallow(<MainPanel />);
    it('renders properly', () => {
        expect(mainPanel).toMatchSnapshot();
    })

    it('returns MainPanel Component', () => {
        expect(mainPanel.find('Input')).toHaveLength(1)
    })
})