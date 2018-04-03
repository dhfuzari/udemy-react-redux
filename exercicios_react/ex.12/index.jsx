import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import counterReducers from './counterReducers';
import Counter from './counter';

const reducers = combineReducers({
    counter: counterReducers
});

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <Counter />
    </Provider>,
    document.getElementById('app')
)