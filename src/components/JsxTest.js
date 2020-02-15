import React, { Component } from 'react'
import ttt from './../index.module.css'; // 测试css module

export default class JsxTest extends Component {
  render() {
    let msg = 'test componet!!!'
    return (
      <div className={ttt.test2}>{msg}</div>
    )
  }
}
