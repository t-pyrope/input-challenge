import * as React from 'react';
import * as Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import AsidePanel from '../AsidePanel';

const mountWithStore = (
    component: React.ReactElement,
    mockState = {},
    mockDispatch = jest.fn()
) => {
    const mockStore = configureStore([])

    const store = mockStore(mockState);
    store.dispatch = mockDispatch;

    return mount(
        <Provider store={store}>
            {component}
        </Provider>
    )
}

jest.mock('react-i18next', () => ({
    useTranslation: () => ({t: (key: string) => key})
}));

Enzyme.configure({ adapter: new Adapter() });

describe('Aside Panel', () => {
    const asidePanel = mountWithStore(<AsidePanel />);
    it('renders properly', () => {
        expect(asidePanel).toMatchSnapshot();
    })

    it('returns AsidePanelComponent', () => {
        expect(asidePanel.find('div.container')).toHaveLength(1);
    })

    it('has exactly 6 buttons', () => {
        expect(asidePanel.find('button')).toHaveLength(6);
    })
})
