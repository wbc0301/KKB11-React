import React, { Component } from "react";

class TreeNode extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  get isFolder() {   // 判断是否有子元素
    return this.props.model.children && this.props.model.children.length;
  }
  toggle = () => {   // 切换打开状态
    if (this.isFolder) {
      this.setState({ open: !this.state.open });
    }
  };
  render() {
    return (
      <ul>
        <li>
          <div onClick={this.toggle}> {/* 内容显示 */}
            {this.props.model.title} {/* 标题 */}
            {this.isFolder ? <span>{this.state.open ? "-" : "+"}</span> : null} {/* 有可能显示＋-号 */}
          </div>
          {/* 可能存在子树 */}
          {this.isFolder ? (
            <div style={{ display: this.state.open ? "block" : "none" }}>
              {this.props.model.children.map(model => (
                <TreeNode model={model} key={model.title} />
              ))}
            </div>
          ) : null}
        </li>
      </ul>
    );
  }
}

export default class Tree extends Component {
  treeData = {
    title: "Web全栈架构师",
    children: [
      {
        title: "Java架构师"
      },
      {
        title: "JS高级",
        children: [
          {
            title: "ES6"
          },
          {
            title: "动效"
          }
        ]
      },
      {
        title: "Web全栈",
        children: [
          {
            title: "Vue训练营",
            expand: true,
            children: [
              {
                title: "组件化"
              },
              {
                title: "源码"
              },
              {
                title: "docker部署"
              }
            ]
          },
          {
            title: "React",
            children: [
              {
                title: "JSX"
              },
              {
                title: "虚拟DOM"
              }
            ]
          },
          {
            title: "Node"
          }
        ]
      }
    ]
  };
  render() {
    return (
      <div>
        <TreeNode model={this.treeData} />
      </div>
    );
  }
}
