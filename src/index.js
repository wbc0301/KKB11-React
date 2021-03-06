/* import React from 'react';
import ReactDOM from 'react-dom';
import * as redux from 'redux';
import * as ReactRedux from 'react-redux';
import * as ReactRouterDom from "react-router-dom";
import App from './App';
import store from './store';

console.log('React:',React);
console.log('ReactDOM:',ReactDOM);
console.log('redux:',redux);
console.log('ReactRedux:',ReactRedux);
console.log('ReactRouterDom:',ReactRouterDom);

ReactDOM.render(<ReactRedux.Provider store={store}><App/></ReactRedux.Provider>, document.getElementById('root'));
 */
/* 
只使用 redux:       如：store/ReduxTest2.js
    store.getState(), store.dispatch(), store.subscribe 
    每一个组件都要引入 store，和组件耦合，
    组件中不具备响应式(需要自己触发rander())，比较繁琐；

使用 react-redux: 
    提供两个核心API：
      1：<Provider></Provider> // 为后代组件提供store
      2: connect()             // 为组件提供数据和变更方法: this.props.num  this.props.add()  this.props.dispatch()
                               // connect是高阶组件的工厂函数，返回一个高阶组件对原组件进行包装。

    原理：创建一个contest.Provider 从而只一次导入store
*/



// import React from 'react';
// import ReactDOM from 'react-dom';
import React, {Component} from './yuanLi/react';
import ReactDOM from './yuanLi/react-dom';
// import React from './yuanLi/kkreact'
// import {render} from './yuanLi/kkreact/ReactDOM';

class Comp2 extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     msg: 'something'
  //   }
  // }
  // componentDidMount() {
  //   this.setState({msg:'dong~~~'})
  // }
  // onClick = ()=>{
  //   this.setState({msg:'mua~~~'})
  // }
  render() {
    return (
      // <h2 onClick={this.onClick}>hi, class comp! {this.state.msg}</h2>
      <h2>ssssss</h2>
    )
  }
}

function Comp(props) {
  return (
    <h2>hi, {props.name}</h2>
  )
}
const jsx = (
  <div id="demo">
    <span>hi</span>
    <div className="name">
      <button>aa</button>
    </div>
    <Comp name="kaikeba"></Comp>
    <Comp2></Comp2>
  </div>
)
console.log(jsx);

ReactDOM.render(jsx, document.getElementById('root'));

