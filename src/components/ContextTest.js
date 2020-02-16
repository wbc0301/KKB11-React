import React, { Component, createContext } from 'react';
// import {Provider, Consumer} from './ContextObj';

// 1 创建上下文
const Context = createContext();

// 2 获取Provider Consumer组件
const Provider = Context.Provider;
const Consumer = Context.Consumer;

function Child(props) { // 子组件
  return (
    <div onClick={($event) => props.handle($event, 10)}>  {/* 同时传递事件对象 */}
      {props.counter}
    </div>
  )
}

// withConsumer高阶组件，它根据配置返回一个高阶组件
function withConsumer(Consumer) {
  return Comp => props => {
    return <Consumer>{value => <Comp {...value} />}</Consumer>;
  };
}

// 经过withConsumer(Consumer)返回的高阶组件包装，WithConsumerAndChild获得了上下文中的值
const WithConsumerAndChild = withConsumer(Consumer)(Child);

export default class ContextTest extends Component {
  state = { // 状态
    counter: 0
  }
  handle = (e, n = 1) => { // 参数默认值
    this.setState({ counter: this.state.counter + n })
  }
  render() {
    return (
      <div>
        <Provider value={{ counter: this.state.counter, handle: this.handle }}>
          {/* 不用高阶组件 */}
          {/* 
          <Consumer>{value => <Child {...value} />}</Consumer>
          <Consumer>{value => <Child {...value} />}</Consumer>
          <Consumer>{value => <Child {...value} />}</Consumer> */}

          {/* 使用高阶组件 */}
          <WithConsumerAndChild/>
          <WithConsumerAndChild/>
          <WithConsumerAndChild/>
        </Provider>
      </div>
    )
  }
}
