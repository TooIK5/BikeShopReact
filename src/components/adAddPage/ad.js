import React from "react";
import {
    Typography,
    Button,
    InputNumber,
    Upload,
    Form,
    Radio,
    Input, Cascader
} from 'antd';

import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

const { Title, Text } = Typography;
const { TextArea } = Input;

    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };


  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  
  const normFile = (e) => {
    console.log('Upload event:', e.fileList);
  };

let Ad = () => {
        const location = useSelector(state => state.app.locations);
        return   <div className="ad-wrapp">
            <Title level={2} >Параметры объявления</Title> 
             
            <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
     >
        <Form.Item
        name="input"
        label="Название"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}
      >
        <Input placeholder="Выберите вид детали"/>
      </Form.Item>
                 <Form.Item name="locationCas"
                            label="Локация"
                            rules={[{ required: true, message: 'Пожалуйста, введите локацию!' }]}>
                     <Cascader
                         options={location}
                     />
                 </Form.Item>
                 <Form.Item name="Category"
                            label="Категория"
                            rules={[{ required: true, message: 'Пожалуйста, введите категорию!' }]}>
                     <Cascader
                         options={[
                             {
                                 value: 'Вилки',
                                 label: 'Forks',
                                 children: [
                                     {
                                         value: 'Rigid',
                                         label: 'Ригидные',
                                     },
                                 ],
                             },
                         ]}
                     />
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
        initialValue="used"
      >
        <Radio.Group 
         buttonStyle="solid"
         >
          <Radio.Button value="used">Б/У</Radio.Button>
          <Radio.Button value="new">Новое</Radio.Button>
          
        </Radio.Group>
      </Form.Item>
      <Form.Item
       
        name="price"
        label="Цена"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите цену!' }]}
      >
        <InputNumber  placeholder="цена в BYN" min={0} max={100000} style={{width: 100}}  />
 
      </Form.Item>
      <Form.Item
        name="upload"
        label="Загрузить"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Не более 10"
      >
        <Upload   maxCount={10}
                  multiple={true} 
                  beforeUpload={() => false}
                  listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
        </div>
}

export default Ad;