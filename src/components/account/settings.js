import React from "react";
 import { Upload, Input, Button, Form } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const Settins = () => {
    //const dispatch = useDispatch();
    //const setAds = (type) => dispatch(setCurrentAds(type));
    const loading = false;
    const imageUrl = false;
    const userName = "Petya";
    const onFinish = (values) => {
       console.log("ChangeSettings: ", values)
  };
    //const ads = useSelector(state => state.account.currentAds)
    const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div style={{ marginTop: 8 }}>Upload</div>
        </div>
      );
    return  <div className="settings">
          <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
      
      <Form
onFinish={onFinish}
autoComplete="off"
>
<Form.Item>
<Input placeholder="Username" defaultValue={userName}  style={{width: 400}}/>
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