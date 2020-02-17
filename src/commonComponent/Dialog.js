import React, { Component } from "react";
import { createPortal, unmountComponentAtNode, unstable_renderSubtreeIntoContainer } from "react-dom";

// 16.0之前的做法
export class Dialog2 extends React.Component {
  render() { // render一个null，目的什么内容都不渲染
    return null;
  }

  componentDidMount() {
    const doc = window.document; // 首次挂载时候创建宿主div
    this.node = doc.createElement("div");
    doc.body.appendChild(this.node);
    this.createPortal(this.props);
  }

  componentDidUpdate() {
    this.createPortal(this.props);
  }

  componentWillUnmount() {
    unmountComponentAtNode(this.node); // 清理节点
    window.document.body.removeChild(this.node); //   清理宿主div
  }

  createPortal(props) {
    unstable_renderSubtreeIntoContainer(
      this, //当前组件
      <div className="dialog">{props.children}</div>, // 塞进传送门的JSX
      this.node // 传送门另一端的DOM node
    );
  }
}

// 16.0之后的做法
export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.node = document.createElement("div");
    document.body.appendChild(this.node);
  }

  render() { // 将createPortal参数1声明的jsx挂载到node上
    return createPortal(<div>{this.props.children}</div>, this.node);
  }

  componentWillUnmount() {
    document.body.removeChild(this.node); // 清理div
  }
}
