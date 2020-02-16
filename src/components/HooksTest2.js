import React, { useState, useEffect, useReducer, useContext } from "react";

const Context = React.createContext();// 创建上下文

function fruitReducer(state, action) { // 添加fruit状态维护fruitReducer    理解为vuex里面mutations
  switch (action.type) {
    case "init":
      return action.payload;
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
}

function FruitAdd(props) { // 输入组件
  const { dispatch, tt } = useContext(Context); // context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
  console.log(tt)
  const [inputval, setInputval] = useState(""); // 输入内容状态及设置内容状态的方法
  const onAddFruit = e => { 
    if (e.key === "Enter") { // 用户回车
      //   props.onAddFruit(inputval);
      dispatch({ type: "add", payload: inputval });
      setInputval("");
    }
  };
  return (
    <div>
      <input type="text" value={inputval} onChange={e => setInputval(e.target.value)} onKeyDown={onAddFruit} />
    </div>);
}

function FruitList({ fruits, onSetFruit }) { // 仅展示水果列表
  return (
    <ul>
      {fruits.map(f => (
        <li key={f} onClick={() => onSetFruit(f)}>{f}</li>
      ))}
    </ul>
  );
}

export default function HooksTest() {
  const [fruit, setFruit] = useState(""); // useState(initialState)，接收初始状态，返回一个由状态和其更新函数组成的数组
  //   const [fruits, setFruits] = useState([]);
  const [fruits, dispatch] = useReducer(fruitReducer, [99, 88]); // 参数1是reducer  参数2是初始值

  // 异步获取水果列表
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "init", payload: ["香蕉", "西瓜"] });
      //   setFruits(["香蕉", "西瓜"]);
    }, 1000);
  }, []); // 依赖为空表示只在组件渲染到屏幕后执行一次

  useEffect(() => {
    document.title = fruit;
    // ajax
  }, [fruit]); // 依赖改变 effect 重新执行  类似vue中的watch

  useEffect(() => {
    const timer = setInterval(() => {
      // console.log("msg");
    }, 1000);
    return function () { // 这个函数会在组件卸载时执行
      clearInterval(timer);
    };
  }, []);

  return (
    <Context.Provider value={{ dispatch, tt:'wbc' }}> {/* 提供上下文的值 */}
      <div>
        {/* <FruitAdd onAddFruit={inputval => setFruits([...fruits, inputval])} /> */}
        <FruitAdd />
        <p>{fruit === "" ? "请选择喜爱的水果：" : `您的选择是：${fruit}`}</p>
        <FruitList fruits={fruits} onSetFruit={setFruit} />  {/* 列表 */}
      </div>
    </Context.Provider>
  );
}
