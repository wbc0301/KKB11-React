import { createContext } from 'react'
// 1 创建上下文
const Context = createContext();

// 2 获取Provider Consumer组件
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;
