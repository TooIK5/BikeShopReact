import React from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import {  Button,  Form, Input, Checkbox } from 'antd';


let Auth = () => {
    return  <div className="header-entrenceForm">
        <Form
  name="basic"
  labelCol={{
    span: 8,
  }}
  wrapperCol={{
    span: 16,
  }}
  initialValues={{
    remember: true,
  }}
  onFinish={onFinish}
  onFinishFailed={onFinishFailed}
  autoComplete="off"
>
  <Form.Item
    label="Username"
    name="username"
    rules={[
      {
        required: true,
        message: 'Please input your username!',
      },
    ]}
  >
    <Input />
  </Form.Item>

  <Form.Item
    label="Password"
    name="password"
    rules={[
      {
        required: true,
        message: 'Please input your password!',
      },
    ]}
  >
    <Input.Password />
  </Form.Item>

  <Form.Item
    name="remember"
    valuePropName="checked"
    wrapperCol={{
      offset: 8,
      span: 16,
    }}
  >
    <Checkbox>Remember me</Checkbox>
  </Form.Item>

  <Form.Item
    wrapperCol={{
      offset: 8,
      span: 16,
    }}
  >
    <Button type="primary" htmlType="submit">
      Войти
    </Button>
  </Form.Item>
</Form>
        </div>
    
}

export default Auth;