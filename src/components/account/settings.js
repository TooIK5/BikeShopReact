import React, { useState } from "react";
import { Upload, Input, Button, Cascader, Spin, Typography, Form, Breadcrumb } from "antd";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { getFormData } from "../COMMON/convertFormData";
import { phone, name } from "../validators/validators";
import { update } from "../../redux/API/API";
import { findMyFamily } from "../COMMON/findMyFamily";

const { TextArea } = Input;
const { Title, Text } = Typography;

const Settins = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  let user = useSelector(state => state.account.user);
  let reqerror = useSelector(state => state.account.updateError)
  let avatar = user ? "http://localhost:5000/" + user.avatar : null;
  const [imageUrl, setImageUrl] = useState(avatar);
  const [error, setError] = useState(null);
  let locations = useSelector(state => state.locations.locations)
  let locationParent = null;

  if (user && locations) {
   locationParent = findMyFamily(user.locationid, locations);
  }

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      setError('Вы можете использоавть только PNG/JPG!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      setError('Картинка должна быть меньше 2MB!');
    }

    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    info.file.status = "done"
    if (info.file.status === 'done') {
     
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const onFinish = (values) => {
    if (values.avatar) {
      values.avatar = values.avatar.file.originFileObj;
    } else {
      values.avatar = undefined;
    }
    values.id = user.id;
    values.phone = "+375" + values.phone;
    values.locationid = values.locationid[values.locationid.length - 1]
    values = getFormData(values);
    dispatch(update(values));
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}>
        Upload
      </div>
    </div>
  );

  if (user && locations) {return <div className="settings">
  <div className="itemDetails-breadCramb">
    <Breadcrumb >
      <Breadcrumb.Item>
        <NavLink to="/">Главная</NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Настройки</Breadcrumb.Item>
    </Breadcrumb>
  </div>
  <Title level={3}>Настройки аккаунта</Title>
  <Form onFinish={onFinish}>

    <Form.Item
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
      initialValue={user.username}
      name="username">
      <Input placeholder="Username" defaultValue={user.username} />
    </Form.Item>
    <Form.Item
      name="avatar">
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        onChange={handleChange}
        beforeUpload={beforeUpload}
        showUploadList={false}>
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
    </Form.Item>
    <Text type="warning">{error}</Text>
    <Form.Item
      name="locationid"
      initialValue={locationParent ? [locationParent, user.locationid] : [user.locationid]}
      rules={[{ required: true, message: 'Пожалуйста, введите локацию!' }]}>
      <Cascader
        placeholder="Локация"
        options={locations} />
    </Form.Item>
    <Form.Item
      name="description"
      initialValue={user.description}
      rules={[
        {
          required: true,
          message: 'Пожалуйста введите описание!',
        },
      ]}>

      <TextArea
        placeholder="Описание"
        style={{ marginBottom: "12px" }}
        showCount
        maxLength={250} />
    </Form.Item>
    <Form.Item
      name="phone"
      initialValue={user.phone.substring(4, 13)}
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
      ]}>
      <Input
        addonBefore="+375"
        style={{
          width: '100%',
        }}
      />
    </Form.Item>
    <Text type="warning">{reqerror ? reqerror : null}</Text>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Применить
      </Button>
    </Form.Item>
  </Form>
</div>} else {
  return <Spin className="spinner" />
} 
}
 
export default Settins;