import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import { setEditAd } from "../../redux/accountSlice";
import {
  Typography, Form,
  Input, Cascader, Upload, Radio, Button, InputNumber, Breadcrumb
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const AdEdit = (props) => {
  const dispatch = useDispatch();
  const setproperties = (type) => dispatch(setEditAd(type));
  const defValues = useSelector(state => state.app);

  const adCategories = defValues.categories;
  const adLocations = defValues.locations;

  setproperties(props.match.params.id);
  const ad = useSelector(state => state.account.editAd);

  const onFinish = (values) => {
    console.log('Данные, редактируемые в форме: ', values);
  };

  const normFile = (e) => {
    console.log(e.fileList);
  };

  return <div className="editAd-wrapper">
    <div className="itemDetails-breadCramb">
      <Breadcrumb >
        <Breadcrumb.Item>
          <NavLink to="/">Главная</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <NavLink to="/account/my_ads">Мои объявления</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Редактировать</Breadcrumb.Item>
      </Breadcrumb>
    </div>
    <Title level={2} >Параметры объявления</Title>

    <Form
      name="adEdition"
      autoComplete="off"
      className="account-form"
      {...formItemLayout}
      onFinish={onFinish}
    >
      <Form.Item
        initialValue={ad.title}
        name="Title"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите заголовок!',
          },
        ]}
      >
        <Input placeholder="Заголовок" />
      </Form.Item>
      <Form.Item
        initialValue={ad.description}
        name="Description"
        rules={[
          {
            required: true,
            message: 'Пожалуйста введите описание!',
          },
        ]}
      >
        <TextArea placeholder="Описание" style={{ height: "200px" }} maxLength={250} />

      </Form.Item>
      <Form.Item name="location"
        initialValue={ad.location}
        rules={[{ required: true, message: 'Пожалуйста, введите локацию!' }]}>
        <Cascader
          placeholder="Локация"
          options={adLocations}
        />
      </Form.Item>

      <Form.Item name="category"
        initialValue={ad.category}
        rules={[{ required: true, message: 'Пожалуйста, введите категорию!' }]}>
        <Cascader
          placeholder="Категория"
          options={adCategories}
        />
      </Form.Item>
      <Form.Item
        initialValue={ad.price}
        name="price"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите цену!' }]}>

        <InputNumber placeholder="цена" min={0} max={100000} style={{ width: 100 }} />

      </Form.Item>
      <Form.Item
        name="condition"
        initialValue={ad.condition}>

        <Radio.Group
          buttonStyle="solid">
          <Radio.Button value="used">Б/У</Radio.Button>
          <Radio.Button value="new">Новое</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        initialValue={ad.phoneNumber}
        name="phoneNumber"
        rules={[
          {
            required: true,
            message: 'Введите ваш номер',
          }
        ]}>
        <Input
          placeholder="Номер телефона"
          style={{
            width: '100%',
          }}
        />

      </Form.Item>
      <Form.Item
        name="upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Не более 10">

        <Upload name="logo"
          beforeUpload={() => false}
          listType="picture">
          <Button icon={<UploadOutlined />}>Загрузить</Button>
        </Upload>
      </Form.Item>

      <Form.Item name="primeryBtn">
        <Button type="primary" htmlType="submit" >
          Отправить
        </Button>
      </Form.Item>
    </Form>
  </div>
}

export default withRouter(AdEdit);
