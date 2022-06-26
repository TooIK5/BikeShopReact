import  React, {useState, useEffect} from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../../redux/API/API";
import { Typography } from 'antd';

const { Text } = Typography;
import {
    Form,
    Select,
    Button,
    Input
  } from 'antd';

 const { Option } = Select;
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
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

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

  const [autoCompleteResult, setAutoCompleteResult] = useState ([]);

    return  <Form
    {...formItemLayout}
    form={form}
    name="register"
    onFinish={onFinish}
    initialValues={{
      residence: ['zhejiang', 'hangzhou', 'xihu'],
      prefix: '+375',
    }}
    scrollToFirstError
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
      name="username"
      label="Nickname"
      tooltip="Ваше имя"
      rules={[
        {
          required: true,
          message: 'Введите ваше имя',
          whitespace: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name="password"
      label="Пароль"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
      hasFeedback
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="confirm"
      label="Подтвердите пароль"
      dependencies={['password']}
      hasFeedback
      rules={[
        {
          required: true,
          message: 'Пожалуйста, введите пароль!',
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error('Пароли не совпадают'));
          },
        }),
      ]}
    >
      <Input.Password />
    </Form.Item>

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
    
    <Text type="danger">{account.error}<br/></Text>
  
    <Form.Item {...tailFormItemLayout}>
      <Button type="primary" htmlType="submit">
        Зарегистрироваться
      </Button>
    </Form.Item>
  </Form>
}

export default Registration;