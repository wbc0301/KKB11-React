import React, { useState, useEffect } from "react";

function FruitList({ fruits, onSetFruit }) { // 仅展示水果列表
  return (
    <ul>
      {fruits.map(f => (
        <li key={f} onClick={() => onSetFruit(f)}>{f}</li>
      ))}
    </ul>
  );
}
// 声明输入组件
function FruitAdd(props) {
  const [inputval, setInputval] = useState('');
  const onAddFruit = e => {
    if (e.key === "Enter") { // 用户回车
      props.onAddFruit(inputval);
      setInputval("");
    }
  };
  return (
    <div>
      <input type="text" value={inputval} onChange={e => setInputval(e.target.value)} onKeyDown={onAddFruit} />
    </div>);
}

export default function HooksTest() {
  const [fruit, setFruit] = useState(""); // useState(initialState)，接收初始状态，返回一个由状态和其更新函数组成的数组
  const [fruits, setFruits] = useState([]);

  // 异步获取水果列表
  useEffect(() => {
    // console.log("useEffect");
    setTimeout(() => {
      setFruits(["香蕉", "西瓜"]);
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
    <div>
      <FruitAdd onAddFruit={inputval => setFruits([...fruits, inputval])} />
      <p>{fruit === "" ? "请选择喜爱的水果：" : `您的选择是：${fruit}`}</p>
      <FruitList fruits={fruits} onSetFruit={setFruit} />  {/* 列表 */}
    </div>
  );
}
