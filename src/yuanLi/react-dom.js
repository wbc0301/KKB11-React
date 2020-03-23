import initVNode from './vdom'

function render(vnode, container) {
  container.appendChild(initVNode(vnode))
}
export default { render };
