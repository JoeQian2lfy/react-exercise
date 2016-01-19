import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/app.jsx';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import todoApp from './reducer';

let store = createStore(todoApp);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);
