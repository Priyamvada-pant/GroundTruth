import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/Welcome';
import { Provider } from "react-redux";
import store from './store';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Welcome />
    </Provider>,
    rootElement
);
