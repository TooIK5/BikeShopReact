import React from "react";
import {  Typography,
     Button,
      Upload,
    Form,
    TreeSelect,
    Radio,
    Input
 } from 'antd';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { TextArea } = Input;

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  
  const normFile = ( any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
const treeData = [
    {
      title: 'Node1',
      value: '0-0',
      children: [
        {
          title: 'Child Node1',
          value: '0-0-1',
        },
        {
          title: 'Child Node2',
          value: '0-0-2',
        },
      ],
    },
    {
      title: 'Node2',
      value: '0-1',
    },
  ];

let Ad = () => {
   let state = {
        value: undefined,
      };
    
     let onChange = value => {
        console.log(value);
        this.setState({ value });
      };
        return   <div className="ad-wrapp">
            <Title level={2} >Параметры объявления</Title> 
            
             <Form
      name="validate_other"
      
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      }}
    >
        <Form.Item
        name="input"
        label="Название"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}
      >
        <Input placeholder="Выберите вид детали"/>
      </Form.Item>  
      
      
      <Form.Item
        name="description"
        label="Описание"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите описание!' }]}
      >
        <TextArea placeholder="Описание"/>
      </Form.Item>


      <Form.Item
        name="radio-button"
        label="Состояние"
        rules={[{ required: true, message: '' }]}
      >
        <Radio.Group 
         defaultValue="any"
         buttonStyle="solid"
         >
          <Radio.Button value="used">Б/У</Radio.Button>
          <Radio.Button value="new">Новое</Radio.Button>
          <Radio.Button value="any">Любое</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="cost"
        label="Цена"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите цену!' }]}
      >
        <Input placeholder="цена в BYN"/>
      </Form.Item>  

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Не более 10"
      >
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item label="Dragger">
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger name="files" action="/upload.do">
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to upload</p>
            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
          </Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
        </div>
}

export default Ad;