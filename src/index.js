import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import ttt from './index.module.css'; // 测试css module

console.log(React);

// 测试css module     可以像vue的scope一样
const jsx = <div className={ttt.test2}><h1>123</h1></div>
ReactDOM.render(jsx, document.getElementById('root'));

// ReactDOM.render(<App/>, document.getElementById('root'));
