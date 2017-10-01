import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import tasks from './reducers';
import App from './components/App';
import initialData from '../data/data';
import {reducer} from 'react-redux-toastr'
//import 'react-redux-toastr/src/styles/index';

const store = createStore(
    tasks, // reducers
    initialData // optional, just sample tasks
    //reducer
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);