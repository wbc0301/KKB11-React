import React, { Component } from "react";
// import store from '../store';
import { connect } from "react-redux";
import { add, minus, asyncAdd } from "../store/actionCreater";

// 参数1：mapStateToProps = (state) => {return {num: state}}
// 参数2：mapDispatchToProps = dispatch => {return {add:()=>dispatch({type:'add'})}}
// connect两个任务：
// 1.自动渲染
// 2.映射到组件属性
// connect 是一个装饰器工厂（调用后返回一个装饰器）
@connect(
  state => ({ num: state.counter }), //任何时候，只要 Redux store 发生改变，mapStateToProps 函数就会被调用。该回调函数必须返回一个纯对象，这个对象会与组件的 props 合并。
  { add, minus, asyncAdd } // 理解为vuex中的action
)
class ReduxTest extends Component {
  // componentDidMount() {
  //     // 订阅状态变更
  //     store.subscribe(() => {
  //         this.forceUpdate();
  //     })
  // }
  render() {
    return (
      <div>
        {/* {store.getState()} */}
        {this.props.num}
        <div>
          <button onClick={() => this.props.add(2)}>+</button>
          <button onClick={this.props.minus}>-</button>
          <button onClick={this.props.asyncAdd}>+</button>
        </div>
      </div>
    );
  }
}
export default ReduxTest;


// export default class ReduxTest2 extends Component {
//   componentDidMount() {
//     store.subscribe(() => { // 3：订阅状态更改
//       this.forceUpdate();   // 订阅到状态更改后使用各种方式触发：render()
//     })
//   }
//   render() {
//     return (
//       <div>
//         {store.getState()} {/* 1：获取状态 */}
//         <div>
//           <button onClick={() => store.dispatch({ type: 'add' })}>+</button> {/* 2：dispatch action */}
//           <button onClick={() => store.dispatch({ type: 'minus' })}>-</button>
//         </div>
//       </div>
//     )
//   }
// }
