import React, { useState } from "react";
import { Upload, Input, Button, Form, Breadcrumb } from "antd";
import { withRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ConsoleSqlOutlined, LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

const Settins = () => {
  //const dispatch = useDispatch();
  //const setAds = (type) => dispatch(setCurrentAds(type));

  const [imageUrl, setImageUrl] = useState("https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg");

  const onFinish = (values) => {
    console.log("ChangeSettings: ", values)
  };

  const handleChange = (info) => {
    console.log(info)
    setImageUrl(info.file)
  };
  
  //const ads = useSelector(state => state.account.currentAds)
  
  return <div className="settings">
    <div className="itemDetails-breadCramb">
      <Breadcrumb >
        <Breadcrumb.Item>
          <NavLink to="/">Главная</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Настройки</Breadcrumb.Item>
      </Breadcrumb>
    </div>
    <Upload
      name="avatar"
      listType="picture-card"
      className="avatar-uploader"
      onChange={handleChange}
      showUploadList={false}
      maxCount={1}
      beforeUpload={beforeUpload}>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{
            width: '100%',
          }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
    <Form.Item
        initialValue="default"
        name="Description"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите описание!',
          },
        ]}
      >
        <TextArea placeholder="Описание"  style={{marginBottom: "12px"}} showCount maxLength={250} />

      </Form.Item>
    <Form
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item >
        <Input placeholder="Username" defaultValue="Яйки"  />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Применить
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default Settins;