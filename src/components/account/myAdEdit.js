import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {withRouter, NavLink} from "react-router-dom";
import {setEditAd} from "../../redux/accountSlice";
import {  Typography, Form,
    Input, Cascader, Upload, Radio, Button, InputNumber, Breadcrumb, Select } from 'antd';
    import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
      const { Option } = Select;

const { Title, Text } = Typography;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const AdEdit = (props) => {
  const dispatch = useDispatch(); 
  const setproperties = (type) => dispatch(setEditAd(type));
  const defValues = useSelector(state => state.app);

  const adCategories = defValues.categories;
  const  adLocations = defValues.locations;
  
  setproperties(props.match.params.id);
  const ad = useSelector(state => state.account.editAd); 
  
  const onFinish = (values) => {
    console.log('Данные, редактируемые в форме: ', values);
  };
  const normFile = (e) => {
    console.log(e.fileList);
  };

    return  <div className="iditAd-wrapper">
      <div className="itemDetails-breadCramb">
      <Breadcrumb >
      <Breadcrumb.Item>
      <NavLink to="/">Главная</NavLink>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <NavLink to="/account/my_ads">Объявления</NavLink>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Редактировать</Breadcrumb.Item>
      </Breadcrumb>
        </div> 
       <Title level={2} >Параметры объявления</Title> 
             
  <Form
  name="adEdition"
  autoComplete="off"
  className="account-form"
  onFinish={onFinish}
  {...formItemLayout}
>
  <Form.Item
    label="Заголовок"
    initialValue={ad.title}
    name="Title"
    rules={[
      {
        required: true,
        message: 'Пожалуйста введите ваше описание!',
      },
    ]}
  >
    <Input />
  </Form.Item>
  <Form.Item
    label="Описание"
    initialValue={ad.description}
    name="Description"
    rules={[
      {
        required: true,
        message: 'Please input your title!',
      },
    ]}
  >
     <TextArea showCount maxLength={100}  />

  </Form.Item>
   <Form.Item name="location"
            initialValue={ad.location}
                            label="Локация"
                            rules={[{ required: true, message: 'Пожалуйста, введите локацию!' }]}>
                     <Cascader
                         options={adLocations}
                     />
  </Form.Item> 
  <Form.Item name="category"
             initialValue={ad.category}
                            label="Категория"
                            rules={[{ required: true, message: 'Пожалуйста, введите категорию!' }]}>
                      <Cascader
                         options={adCategories}
                      />
                 </Form.Item>
                 <Form.Item
        initialValue={ad.price}
        name="price"
        label="Цена"
        hasFeedback
        rules={[{ required: true, message: 'Пожалуйста, введите цену!' }]}>

        <InputNumber  placeholder="цена в BYN" min={0} max={100000} style={{width: 100}}  />
 
      </Form.Item>
  <Form.Item
        name="condition"
        label="Состояние"
        initialValue={ad.condition}>
          
  <Radio.Group 
         buttonStyle="solid">
          <Radio.Button value="used">Б/У</Radio.Button>
          <Radio.Button value="new">Новое</Radio.Button> 
        </Radio.Group>
      </Form.Item>  
     
  <Form.Item
        label="Номер телефона"
        initialValue={ad.phoneNumber}
        name="phoneNumber"
      rules={[ 
        {
          required: true,
          message: 'Введите ваш номер',
        }
      ]}>
        <Input
    style={{
      width: '100%',
    }}
  />

</Form.Item>
      <Form.Item
        name="upload"
        label="Изображения"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra="Не более 10"
      >
        <Upload name="logo"       
       beforeUpload={() => false}
      listType="picture">
          <Button icon={<UploadOutlined />}>Загрузить</Button>
        </Upload>
      </Form.Item>

      <Form.Item name="primeryBtn" wrapperCol={{ span: 12, offset: 6 }} >
        <Button type="primary" htmlType="submit" >
          Отправить
        </Button>
      </Form.Item>
  </Form>  
    </div>
    }

    export default withRouter(AdEdit);
 