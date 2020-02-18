import React from 'react';

/* import JsxTest from './components/JsxTest';
import ContextTest from './components/ContextTest';
import HocTest from './components/HocTest';
import Composition from './components/Composition';

import HooksTest from './components/HooksTest';   // useState useEffect 
import HooksTest2 from './components/HooksTest2'; // useReducer useContext  createContext 状态从组件中抽离，类似redux  */

/* import FormTest from './components/FormTest';        // AntD表单
import KFormTest from './commonComponent/KFormTest'; // 自己封装表单
import Dialog from './commonComponent/Dialog';       // 对话框组件
import Tree from './commonComponent/Tree';           // 树组件 */

import ReduxTest from './components/ReduxTest';      // redux
import MyReduxTest from './components/MyReduxTest';  // 用自己实现的redux测试
import RouterTest from './components/RouterTest';
import MyRouterTest from './components/MyRouterTest';

export default function App() {
  return (
    <div>
      {/* <JsxTest/><hr/>
      <ContextTest/><hr/>
      <HocTest/><hr/>
      <Composition/><hr/>
      <HooksTest/><hr/>  
      <HooksTest2/>  */}

      {/* <FormTest/>
      <KFormTest/>
      <Dialog>这是弹窗的内容</Dialog>
      <Tree/> */}

      <ReduxTest/>
      <MyReduxTest/>
      <RouterTest/>
      <MyRouterTest/>


    </div>
  )
}


