export default function initVNode(vnode) {
  let { vtype } = vnode;
  if (!vtype) { // 是文本节点
    return document.createTextNode(vnode);
  }
  if (vtype === 1) {  // 原生元素
    return createElement(vnode);
  } else if (vtype === 2) { // 类组件
    return createClassComp(vnode);
  } else if (vtype === 3) { // 函数组件
    return createFuncComp(vnode);
  }
}

function createElement(vnode) {
  const { type, props } = vnode;
  // 'div'  {id:'demo",children:[],key,ref}
  const node = document.createElement(type);
  const { key, children, ...rest } = props;
  Object.keys(rest).forEach(k => {
    if (k === 'className') { // 给原生标签添加属性
      node.setAttribute('class', rest[k])
    } else {
      node.setAttribute(k, rest[k])
    }
  })
  children.forEach(c => {
    node.appendChild(initVNode(c)) // 递归子元素
  })
  return node;
}

function createClassComp(vnode) {
  const { type, props } = vnode;
  const comp = new type(props); // clas xxx  {...}
  const newVNode = comp.render(); // vdom
  return initVNode(newVNode);
}

function createFuncComp(vnode) {
  const { type, props } = vnode;
  // function xxx  {...}
  const newVNode = type(props);
  return initVNode(newVNode);
}