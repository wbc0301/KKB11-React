export function createStore(reducer, enhancer) {
  if (enhancer) { return enhancer(createStore)(reducer); } // 如果存在enhancer

  let state = undefined;
  
  const onStateChangeCallbacks = []; // 回调函数数组

  function getState() {
    return state;
  }
  function dispatch(action) {  // 更新状态
    state = reducer(state, action); // 修改    
    onStateChangeCallbacks.forEach(v => v()); // 变更通知
    return action;
  }
  function subscribe(cb) {
    onStateChangeCallbacks.push(cb);
  }

  dispatch({ type: "@IMOOC/KKB-REDUX" });   // 初始化状态
  return { getState, dispatch, subscribe }; // 暴露接口
}

export function applyMiddleware(...middlewares) {
  return createStore => (...args) => {

    const store = createStore(...args); // 完成之前createStore工作
    let dispatch = store.dispatch; // 原先dispatch    
    const midApi = { // 传递给中间件函数的参数
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    };
    // 将来中间件函数签名如下：funtion ({}) {}     [fn1(dispatch),fn2(dispatch)] => fn(diaptch)
    const funcs = middlewares.map(mw => mw(midApi));
    dispatch = compose(...funcs)(store.dispatch); // 强化dispatch,让他可以按顺序执行中间件函数
    return { // 返回全新store，仅更新强化过的dispatch函数
      ...store,
      dispatch
    };
  };
}

export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  // 聚合函数数组为一个函数 [fn1,fn2,fn3,fn4] => fn4(fn3(fn2(fn1(...args))))
  return funcs.reduce((left, right) => (...args) => right(left(...args)));
}
