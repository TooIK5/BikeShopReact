import React from "react";
import {  Typography,
     Button,
      Upload,
     Select,
    Form,
    Switch,
    Radio,
    Checkbox,
    Row,
    Col,
    Input
 } from 'antd';

import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 12 },
};

const normFile = (e) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const Demo = () => {
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
let Ad = () => {
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
        <Title level={4} >Название объявления</Title>
        <Input placeholder="Basic usage" />
       <Title level={4} >Выберите вид детали</Title>
       <Form.Item
        name="select"
        label="Вид:"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, выберите вид!' }]}
      >
        <Select placeholder="Выберите вид детали">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>
      <Title level={4} >Выберите тип детали</Title>
      
      <Form.Item
        name="select"
        label="Тип:"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, выберите тип!' }]}
      >
        <Select placeholder="Выберите тип детали">
          <Option value="china">China</Option>
          <Option value="usa">U.S.A</Option>
        </Select>
      </Form.Item>

      

      <Form.Item name="switch" label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>

      <Form.Item name="radio-group" label="Radio.Group">
        <Radio.Group>
          <Radio value="a">item 1</Radio>
          <Radio value="b">item 2</Radio>
          <Radio value="c">item 3</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="radio-button"
        label="Radio.Button"
        rules={[{ required: true, message: 'Please pick an item!' }]}
      >
        <Radio.Group>
          <Radio.Button value="a">item 1</Radio.Button>
          <Radio.Button value="b">item 2</Radio.Button>
          <Radio.Button value="c">item 3</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="checkbox-group" label="Checkbox.Group">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="A" style={{ lineHeight: '32px' }}>
                A
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="B" style={{ lineHeight: '32px' }} >
                B
              </Checkbox>
           
            </Col>
          </Row>
        </Checkbox.Group>
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