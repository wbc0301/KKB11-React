import React, { Component } from "react";
import { Input, Button } from "antd";
/* 
  表单组件设计思路：
  1：表单实现数据收集、校验、提交功能，通过高阶组件扩展
  2：高阶组件给表单组件传递一个input组件 包装函数 接管其输入事件并统一管理表单数据
  3：高阶组件给表单组件传递一个 校验函数 使其具备数据校验功能
*/
// 创建高阶组件
let KForm = {
  create: function (Comp) {
    return class extends Component {
      constructor(props) {
        super(props);
        this.options = {}; // 表单配置项
        this.state = {};   // 表单值
      }
      handleChange = e => {// 变更处理
        const { name, value } = e.target;
        this.setState({ [name]: value }, () => this.validateField(name));
      };
      validateFields = cb => { // 全局校验
        //   console.log(this.state);
        const rets = Object.keys(this.options).map(field => {
          return this.validateField(field);
        });
        const ret = rets.every(v => v);
        cb(ret, this.state); // 将校验结果传出去，并传递数据
      };
      validateField = field => { // 单项校验
        const { rules } = this.options[field]; // 校验规则
        const ret = !rules.some(rule => { // 校验: ret如果是false校验失败
          if (rule.required) {
            if (!this.state[field]) { // 获取校验项的值
              this.setState({ [field + "Message"]: rule.message }); // 必填项失败  设置错误信息
              return true;
            }
          }
          return false;
        });
        if (ret) this.setState({ [field + "Message"]: "" }); // 若校验成功,清理错误信息
        return ret;
      };
      getFieldDecorator = (field, option) => {
        this.options[field] = option;
        return InputComp => { // 返回一个装饰器(高阶组件)
          return (
            <div>
              {React.cloneElement(InputComp, {
                name: field, // 控件name
                value: this.state[field] || "",
                onChange: this.handleChange // 输入值变化监听回调
              })}
              {/* 校验错误信息 */}
              {this.state[field + "Message"] && (
                <p style={{ color: "red" }}>{this.state[field + "Message"]}</p>
              )}
            </div>
          );
        };
      };
      render() {
        return <Comp {...this.props} form={{ getFieldDecorator: this.getFieldDecorator, validateFields: this.validateFields }} />;
      }
    };
  }
};

class KFormTest extends Component {
  onLogin = () => {// 校验
    this.props.form.validateFields((isValid, data) => {
      if (isValid) { console.log("登录！！！！"); } else { alert("校验失败"); }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {/* 接收两个参数返回一个装饰器 */}
        {getFieldDecorator("username", { rules: [{ required: true, message: "请输入用户名" }] })(<Input type="text" />)}
        {getFieldDecorator("password", { rules: [{ required: true, message: "请输入密码" }] })(<Input type="password" />)}
        <Button onClick={this.onLogin}>登录</Button>
      </div>
    );
  }
}
export default KForm.create(KFormTest);
