import React from "react";
//import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import { Button, Form, Input, Checkbox } from 'antd';
import { logIn } from "../../redux/API/API";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Typography } from 'antd';

const { Text } = Typography;

let Auth = () => {
  const dispatch = useDispatch();

  const onFinish = (values) => {
    localStorage.setItem('rememberMe', values.remember);
    localStorage.setItem('user', values.remember ? values.username : '');
    console.log("logIn: ", values)
   // dispatch(logIn(values));
  };

  const account = useSelector(state => state.account);

  return <div className="header-entrenceForm">
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />

      </Form.Item>
      <Text type="danger">{account.error}<br /></Text>
      <Form.Item
        name="remember"
        valuePropName="checked"
     
      >
        <Checkbox>Remember me</Checkbox>
        <a preventDefault style={{float: "right"}} >Забыл пароль</a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" style={{width: "100%"}} htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  </div>

}

export default Auth;