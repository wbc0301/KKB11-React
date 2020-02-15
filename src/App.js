import React from 'react'
import JsxTest from './components/JsxTest'
import ContextTest from './components/ContextTest'

import ttt from './index.module.css'; // 测试css module

// 测试css module     可以像vue的scope一样
function Jsx(props) {
  return (
    <div className={ttt.test2}><h1>123</h1></div>
  )
}

export default function App() {
  return (
    <div>
      {/* <Jsx/> */}
      {/* <JsxTest/> */}
      <ContextTest/>
    </div>
  )
}


