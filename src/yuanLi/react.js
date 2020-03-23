function createElement(type, props, ...children) {
  props.children = children;

  let vtype;  // 区分3种组件：1-html元素，2-class组件，3-函数组件
  if (typeof type === 'function') {
    if (type.isClassComponent) {
      vtype = 2; // class组件
    } else {
      vtype = 3; // 函数组件
    }
  } else if (typeof type === 'string') {
    vtype = 1;   // 原生html标签
  }
  return { vtype, type, props }
}

export class Component {
  static isClassComponent = true;  // 标识符：区分class和函数组件
  constructor(props) {
    this.props = props;
    this.state = {};
  }
  setState() {}
}

export default { createElement };
