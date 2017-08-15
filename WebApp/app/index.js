import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import App from './containers/index'
import './assets/index.less'
import {Provider} from 'react-redux'
import {configureStore} from './store'//导入store
//可以在configureStore中传入初始状态
let store=configureStore();
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root'));