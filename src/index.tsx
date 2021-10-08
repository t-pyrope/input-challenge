import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import './assets/styles/main.scss';

const store = createStore(rootReducer);

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
