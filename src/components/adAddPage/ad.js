import React from "react";
import {
  Typography,
  Button,
  InputNumber,
  Upload,
  Form,
  Radio,
  Spin,
  Input, Cascader, Breadcrumb
} from 'antd';
import { NavLink } from "react-router-dom";
import { UploadOutlined, LoadingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/API/API";
import { getFormData } from "../COMMON/convertFormData";
const { Title, Text } = Typography;
const { TextArea } = Input;
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

let fileList = null;

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

let Ad = () => {
  const dispatch = useDispatch();
  let user = useSelector(state => state.account.user);
  let error = useSelector(state => state.items.error);
  let status = useSelector(state => state.items.status);
  let types = useSelector(state => state.types.types);
  let locations = useSelector(state => state.locations.locations);

  const normFile = (e) => {
    fileList = e.fileList;
  };

  const onFinish = (values) => {
    if (user) {
      values.userid = user.id;
      values.username = user.username;
      values.typeid = values.typeid.slice(-1)[0];
      values.locationid = values.locationid.slice(-1)[0];
      values.phone = user.phone;

      let formData = getFormData(values);
      if (fileList) {
        fileList.forEach(file => {
          formData.append('img', file.originFileObj);
        });
      }
      dispatch(addItem(formData));
    }
  };

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
        name="title"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите название!' }]}>
        <Input placeholder="Название" />
      </Form.Item>
      <Form.Item name="locationid"
        rules={[{ required: true, message: 'Пожалуйста, введите локацию!' }]}>
        <Cascader
          placeholder="Локация"
          options={locations} />
      </Form.Item>
      <Form.Item name="typeid"
        rules={[{ required: true, message: 'Пожалуйста, введите категорию!' }]}>
        <Cascader
          placeholder="Категория"
          options={types}
        />
      </Form.Item>
      <Form.Item
        name="description"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите описание!' }]}>
        <TextArea style={{ height: "150px" }} placeholder="Описание" maxLength={250} />
      </Form.Item>
      <Form.Item
        name="state"
        initialValue={2}>
        <Radio.Group
          buttonStyle="solid">
          <Radio.Button value={2}>Б/У</Radio.Button>
          <Radio.Button value={3}>Новое</Radio.Button>
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
      {status === "pending" ? <Spin indicator={antIcon} /> : null}
      <Text type="danger">{error || null}</Text>
      <Text type="success">{status === "resolved" && error === null ? "Отправлено" : null}</Text>
      <Form.Item  >
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default Ad;