import React from "react";
import { Button, Form, Input, Checkbox } from 'antd';
import { logIn } from "../../redux/API/API";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Typography } from 'antd';

const { Text } = Typography;

let Auth = () => {
  const dispatch = useDispatch();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    localStorage.setItem('rememberMe', values.remember);
    dispatch(logIn(values));
  };

  const error = useSelector(state => state.account.error);

  return <div className="header-entrenceForm">
    <Form
      name="basic"
      initialValues={{
      remember: false,
      }}
      onFinish={onFinish}
      autoComplete="off">

      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}>
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Text type="danger">{error}<br /></Text>
      <Form.Item
        name="remember"
        valuePropName="checked"
        >
        <Checkbox
        defaultChecked={true} 
        >Remember me</Checkbox>
        
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" style={{ width: "100%" }} htmlType="submit">
          Войти
        </Button>
      </Form.Item>
      <a preventDefault style={{ float: "right" }} >Забыл пароль</a>
    </Form>
  </div>
}

export default Auth;