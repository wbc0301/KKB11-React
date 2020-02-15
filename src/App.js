import React from 'react';

import JsxTest from './components/JsxTest';
import ContextTest from './components/ContextTest';
import HocTest from './components/HocTest';
import Composition from './components/Composition';

export default function App() {
  return (
    <div>
      {/* <JsxTest/> */}
      {/* <ContextTest/> */}
      {/* {<HocTest/>} */}
      {<Composition/>}
    </div>
  )
}


