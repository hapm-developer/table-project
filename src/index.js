import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './app';
import { Provider } from 'react-redux';
import { addRecord, removeRecord, editRecord } from './actions/crudTable'

const  store = configureStore();

store.dispatch(addRecord({value: 500}));
store.dispatch(removeRecord({id: '36bb3481-425e-469e-9f28-8bb51190f7cd'}));
store.dispatch(editRecord({id: '844934f4-b1f3-47a1-a11e-117a4c145fa7', value: 5100}));

console.log(store.getState());
const jsx = (
    <Provider store={ store }>
        <App />
    </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));


