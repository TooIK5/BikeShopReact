import React from "react";
import {
  Typography,
  Button,
  InputNumber,
  Upload,
  Form,
  Radio,
  Input, Cascader, Breadcrumb
} from 'antd';
import { NavLink } from "react-router-dom";
import { UploadOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

const { Title, Text } = Typography;
const { TextArea } = Input;
let fileList = null;

const onFinish = (values) => {
  values.upload = fileList;
  console.log('Received values of form: ', values);
};

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const normFile = (e) => {
  fileList = e.fileList;
  console.log('Upload event:', fileList);
};

let Ad = () => {
  const location = useSelector(state => state.app.locations);
  return <div className="ad-wrapp">
    <Breadcrumb >
      <Breadcrumb.Item>
        <NavLink to="/">Главная</NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Добавить объявление</Breadcrumb.Item>
    </Breadcrumb>
    <Title level={2} >Параметры объявления</Title>

    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}>
      <Form.Item
        name="input"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}>
        <Input placeholder="Название" />
      </Form.Item>
      <Form.Item name="locationCas"
        rules={[{ required: true, message: 'Пожалуйста, введите локацию!' }]}>
        <Cascader
          placeholder="Локация"
          options={location} />
      </Form.Item>
      <Form.Item name="Category"
        rules={[{ required: true, message: 'Пожалуйста, введите категорию!' }]}>
        <Cascader
          placeholder="Категория"
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
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите описание!' }]}>
        <TextArea style={{ height: "150px" }} placeholder="Описание"  maxLength={250}/>
      </Form.Item>
      <Form.Item
        name="radio-button"
        initialValue="used">
        <Radio.Group
          buttonStyle="solid">
          <Radio.Button value="used">Б/У</Radio.Button>
          <Radio.Button value="new">Новое</Radio.Button>

        </Radio.Group>
      </Form.Item>
      <Form.Item

        name="price"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите цену!' }]}>
        <InputNumber placeholder="Стоимость" min={0} max={100000} style={{ width: 100 }} />

      </Form.Item>
      <Form.Item
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Фото. Не более 5">
        <Upload maxCount={5}
          multiple={true}
          beforeUpload={() => false}
          listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item  >
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default Ad;