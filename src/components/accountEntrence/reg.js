import React, { useState, useEffect } from "react";
import React, { useState, useEffect } from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/API/API";
import { useDispatch, useSelector } from "react-redux";
import { registration } from "../../redux/API/API";
import { Typography } from 'antd';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import  {confPass, pass, mail, name, phone} from "../validators/validators";

const { Text } = Typography;


import {
  Form,
  Select,
  Button,
  Input
} from 'antd';
  Form,
  Select,
  Button,
  Input
} from 'antd';

//const { Option } = Select;
//const { Option } = Select;
// const residences = [
//   {
//     value: 'zhejiang',
//     label: 'Zhejiang',
//     children: [
//       {
//         value: 'hangzhou',
//         label: 'Hangzhou',
//         children: [
//           {
//             value: 'xihu',
//             label: 'West Lake',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     value: 'jiangsu',
//     label: 'Jiangsu',
//     children: [
//       {
//         value: 'nanjing',
//         label: 'Nanjing',
//         children: [
//           {
//             value: 'zhonghuamen',
//             label: 'Zhong Hua Men',
//           },
//         ],
//       },
//     ],
//   },
// ];



let Registration = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    dispatch(registration(values));
  };

  const account = useSelector(state => state.account);
  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select style={{ width: 100 }}>
  //       <Option value="+375">+375</Option>
  //     </Select>
  //   </Form.Item>
  // );

  // const [autoCompleteResult, setAutoCompleteResult] = useState ([]);

  return <Form
    
  // const [autoCompleteResult, setAutoCompleteResult] = useState ([]);

  return <Form
    
    form={form}
    name="register"
    onFinish={onFinish}
  >
    {/* <Form.Item
      name="email"
      label="E-mail"
      rules={[
        {
          type: 'email',
          message: 'The input is not valid E-mail!',
        },
        {
          required: true,
          message: 'Please input your E-mail!',
        },
      ]}
    >
      <Input />
    </Form.Item> */}

    <Form.Item
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: '',
          whitespace: true,
        },
        () => ({
          validator(_, value) {
           return name(value)
          },
        })
      ]}
    >
    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: '',
          whitespace: true,
        },
        () => ({
          validator(_, value) {
           return name(value)
          },
        })
      ]}
    >
    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
    </Form.Item>
    <Form.Item
      name="email"
      rules={[
        {
          required: true,
          message: '',
          message: '',
          whitespace: true,
        },
        () => ({
          validator(_, value) {
           return mail(value)
          },
        })
      ]}
    >
    <Input prefix={<MailOutlined  className="site-form-item-icon" />} placeholder="E-mail" />
    </Form.Item>
    <Form.Item
      name="phone"
      rules={[
        {
          required: true,
          message: 'Введите ваш номер',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
           return phone(value, getFieldValue('phone'))
          },
        })
      ]}
    >
      <Input
        addonBefore="+375"
        style={{
          width: '100%',
        }}
      />
    </Form.Item>
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: '',
          message: '',
        },
        () => ({
          validator(_, value) {
           return pass(value)
          },
        })
        () => ({
          validator(_, value) {
           return pass(value)
          },
        })
      ]}
      hasFeedback
    >
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Password"
      />
    </Form.Item>
    
    <Form.Item
      name="confirm"
      dependencies={['password']}
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Пожалуйста, введите пароль!',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
           return confPass(value, getFieldValue('password'))
           return confPass(value, getFieldValue('password'))
          },
        }),
      ]}
    >
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Confirm password"
      />
      <Input.Password
        prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Confirm password"
      />
    </Form.Item>

    {/* 
    {/* 
    <Form.Item
      name="residence"
      label="Местоположение"
      rules={[
        {
          type: 'array',
          required: true,
          message: 'Введите ваше местоположение',
        },
      ]}
    >
      <Cascader options={residences} />
    </Form.Item> */}
    {/* 
    {/* 
    <Form.Item
      name="phone"
      label="Номер телефона"
      rules={[
        {
          required: true,
          message: 'Введите ваш номер',
        },
      ]}
    >
      <Input
        addonBefore={prefixSelector}
        style={{
          width: '100%',
        }}
      />
    </Form.Item>
    <Form.Item
      name="gender"
      label="Гендер"
      rules={[
        {
          required: true,
          message: 'Выберете гендер',
        },
      ]}
    >
      <Select placeholder="Выберите ваш гендер">
        <Option value="male">Мужской</Option>
        <Option value="female">Женский</Option>
        <Option value="other">Другой</Option>
      </Select>
    </Form.Item> */}

    <Text type="danger">{account.error}<br /></Text>

    <Form.Item >
      <Button style={{width: "100%"}} type="primary" htmlType="submit">

    <Text type="danger">{account.error}<br /></Text>

    <Form.Item >
      <Button style={{width: "100%"}} type="primary" htmlType="submit">
        Зарегистрироваться
      </Button>
    </Form.Item>
  </Form>
}

export default Registration;