import React from "react";

// Dialog定义组件外观和行为
function Dialog(props) {
  // 这里props.children代表了组件在使用时标签内部内容   children是什么？是合法js表达式
  // console.log(props.children);
  // 备选消息
  const messages = {
    foo: { title: "foo", content: "foo~" },
    bar: { title: "bar", content: "bar~" }
  };
  // 执行函数获得要显示的内容
  const { def, footer } = props.children(messages[props.msg]);

  return (
    <div style={{ border: "1px solid blue" }}>
      {def} <div>{footer}</div>
    </div>
  );
}

function Radio({ children, ...abc }) {
  return (
    <label>
      <input type="radio" {...abc} /> {children}
    </label>
  )
}

function RadioGroup(props) {
  // const radios = []; // 也可以用这种方式   props.children 是数组
  // props.children.forEach((radio, index) => {
  //   radios.push(React.cloneElement(radio, { name: props.name, key: index})) 
  // })
  return (
    <div>
      {React.Children.map(props.children, radio => {
        // 要修改虚拟dom 只能克隆它  参数1是要克隆对象  参数2是设置的属性
        return React.cloneElement(radio, { name: props.name })
      })}
      {/* {radios} */}
    </div>
  )
}

export default function Composition() {
  return (
    <div>
      <Dialog msg="foo">
        {({ title, content }) => ({
          def: (
            <>
              <h1>{title}</h1>
              <p>{content}</p>
            </>
          ),
          footer: <button onClick={() => alert("react真好")}>确定</button>
        })}
      </Dialog>

      <RadioGroup name="mvvm">
        <Radio value="vue">vue</Radio>
        <Radio value="react">react</Radio>
        <Radio value="ng">angular</Radio>
      </RadioGroup>

      {/* <div>
          <input type="radio" name="mvvm"/>vue
          <input type="radio" name="mvvm"/>react
          <input type="radio" name="mvvm"/>angular
      </div> */}
    </div>
  );
}
