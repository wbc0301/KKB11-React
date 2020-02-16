import React from 'react';

import JsxTest from './components/JsxTest';
import ContextTest from './components/ContextTest';
import HocTest from './components/HocTest';
import Composition from './components/Composition';
import HooksTest from './components/HooksTest';
import HooksTest2 from './components/HooksTest2';

export default function App() {
  return (
    <div>
      <JsxTest/><hr/>
      <ContextTest/><hr/>
      <HocTest/><hr/>
      <Composition/><hr/>
      <HooksTest/><hr/>  {/* useState useEffect */}
      <HooksTest2/>  {/* useReducer useContext  createContext 状态从组件中抽离，类似redux*/}
    </div>
  )
}


