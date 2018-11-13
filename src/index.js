import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import './scss/microsoft-oem-doc-styles.scss';




import { getStore } from './getStore';


import { RootAppComponent as App } from './Root';


const store = getStore();


ReactDOM.render((
    <Provider store={store}>
            <App />
    </Provider>
), document.getElementById('root'));


