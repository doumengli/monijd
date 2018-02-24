import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux'; // 顶层组件 需要放到最外层
import store from './store'; // 属性
import mock from './mock';
import 'antd-mobile/dist/antd-mobile.css';
//console.log(process.env.NODE_ENV) //
if(process.env.NODE_ENV === 'development'){ // 判断环境变量
mock()
}
ReactDOM.render(
<Provider store={store}>
      <Router>
        <App/>
        </Router>
</Provider>,
    document.getElementById('root')
);


