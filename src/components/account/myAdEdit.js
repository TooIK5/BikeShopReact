import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, NavLink, useParams } from "react-router-dom";
import {
  Typography, Form,
  Input, Cascader, Upload, Radio, Button, InputNumber, Spin, Breadcrumb
} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { getMyAds } from "../../redux/API/API";
import { findMyFamily } from "../COMMON/findMyFamily";
import { getFormData } from "../COMMON/convertFormData";
import { updateItem } from "../../redux/API/API";
import { dropUpdateStatus } from "../../redux/itemsSlice";

const { Title, Text } = Typography;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const AdEdit = () => {
  const dispatch = useDispatch();
  let { id } = useParams();

  let ads = useSelector(state => state.account.ads);
  let status = useSelector(state => state.items.ustatus);
  let error = useSelector(state => state.items.uerror);
  const locations = useSelector(state => state.locations.locations);
  const types = useSelector(state => state.types.types);
  let deletedFiles = [];

  let files = [];

  let userid = useSelector(state => {
    if (state.account.user) {
      return state.account.user.id
    }
  });

  let locationParent;
  let typeParent;
  let defFiles = [];

  useEffect(() => {
    if (!ads.length) {
      dispatch(getMyAds(userid));
    }

    return () => {
      dispatch(dropUpdateStatus())
    }
  }, [userid])

  const ad = useSelector(state => {
    if (state.account.ads.length) {
      for (let i = 0; i < state.account.ads.length; i++) {
        if (state.account.ads[i].id === +id) {
          return state.account.ads[i];
        }
      }
    }
  });

  if (ad) {
    locationParent = findMyFamily(ad.locationid, locations);
    typeParent = findMyFamily(ad.typeid, types);
    ad.photo.forEach((e, i) => {
      defFiles.push(
        {
          uid: i,
          name: e,
          status: 'done',
          response: 'Ok',
          url: 'http://localhost:5000/' + e,
        },
      )
    });
  }

  const onFinish = (values) => {
    values.id = id;
    values.deleted = deletedFiles;
    console.log(files)
    values.typeid = values.typeid.slice(-1)[0];
    values.locationid = values.locationid.slice(-1)[0];
    console.log('Данные, редактируемые в форме: ', values);
    let formData = getFormData(values);
    if (files) {
      files.forEach(file => {
        formData.append('img', file.originFileObj);
      });
    }
    dispatch(updateItem(formData))
  };

  const handleChange = (val) => {
     if (val.file.status === "removed") {
      deletedFiles.push(val.file.name)
     }
  }

  const normFile = (e) => {
    files = e.fileList;
  };

  if (locations && types && ad) {
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
        autoComplete="off"
        className="account-form"
        {...formItemLayout}
        onFinish={onFinish}>
        <Form.Item
          initialValue={ad.title}
          name="title"
          rules={[
            {
              required: true,
              message: 'Длинна заголовка от 1 до 24 символов!',
            },
          ]}>

          <Input placeholder="Заголовок" maxLength="24" />
        </Form.Item>

        <Form.Item
          initialValue={ad.description}
          name="description"
          rules={[
            {
              required: true,
              message: 'Пожалуйста введите описание!',
            },
          ]}>
          <TextArea placeholder="Описание" style={{ height: "200px" }} maxLength={250} />
        </Form.Item>

        <Form.Item name="locationid"
          initialValue={locationParent ? [locationParent, ad.locationid] : [ad.locationid]}
          rules={[{ required: true, message: 'Пожалуйста, введите локацию!' }]}>
          <Cascader
            placeholder="Локация"
            options={locations}
          />
        </Form.Item>

        <Form.Item name="typeid"
          initialValue={typeParent ? [typeParent, ad.typeid] : [ad.typeid]}
          rules={[{ required: true, message: 'Пожалуйста, введите категорию!' }]}>
          <Cascader
            placeholder="Категория"
            options={types} />
        </Form.Item>

        <Form.Item
          initialValue={ad.price}
          name="price"
          hasFeedback
          rules={[{ required: true, message: 'Пожалуйста, введите цену!' }]}>
          <InputNumber placeholder="цена" min={0} max={100000} style={{ width: 100 }} />
        </Form.Item>

        <Form.Item
          name="state"
          initialValue={ad.state}>
          <Radio.Group
            buttonStyle="solid">
            <Radio.Button value={2}>Б/У</Radio.Button>
            <Radio.Button value={3}>Новое</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          initialValue={ad.phone}
          name="phone"
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
          name="photo"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          extra="Фото. Не более 5">
          <Upload
            onChange={handleChange}
            maxCount={5}
            multiple={true}
            defaultFileList={defFiles}
            beforeUpload={() => false}
            listType="picture">
            <Button icon={<UploadOutlined />}>Загрузить</Button>
          </Upload>
        </Form.Item>
        <Text type="warning">{status || error}</Text>
        <Form.Item >
          <Button type="primary" htmlType="submit" >
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  } else { return <Spin className="spinner" /> }
}

export default withRouter(AdEdit);
