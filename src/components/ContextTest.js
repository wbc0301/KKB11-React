import React, { Component } from 'react';
import {Provider, Consumer} from './ContextObj';

function Child(props) { // 子组件
  return (
    <div onClick={($event) => props.handle($event, 10)}>  {/* 同时传递事件对象 */}
      {props.counter}
    </div>
  )
}
export default class ContextTest extends Component {
  state = { // 状态
    counter: 0
  }
  handle = (e, n = 1) => { // 参数默认值
    this.setState({ counter: this.state.counter + n })
    console.log(e) // 事件对象
  }
  render() {
    return (
      <div>
        <Provider value={{ counter: this.state.counter, handle: this.handle }}>
          <Consumer>{value => <Child {...value} />}</Consumer>
          <Consumer>{value => <Child {...value} />}</Consumer>
          <Consumer>{value => <Child {...value} />}</Consumer>
        </Provider>
      </div>
    )
  }
}
