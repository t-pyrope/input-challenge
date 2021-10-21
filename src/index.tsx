import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './reducers';
import './assets/styles/main.scss';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose || compose;

const store = createStore(rootReducer, composeEnhancers());

// "Whatever is being returned from store.getState, I want the types stored ad the RootState variable" 
// https://stackoverflow.com/a/67656911/13891817
export type RootState = ReturnType<typeof store.getState>

// "Get the dispatch object from the store, break it down into it's types, and store it in the AppDispatch variable"
// https://stackoverflow.com/a/67656911/13891817
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
);
