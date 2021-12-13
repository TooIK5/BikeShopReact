import React, {useState} from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import {  Button, Typography, Drawer, Form, Input, Popover } from 'antd';
import {  ArrowUpOutlined, AimOutlined } from '@ant-design/icons';
import  Auth from "../accountEntrence/authorization";
import Registration from "../accountEntrence/reg";

const { Text } = Typography;
const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const buttonWidth = 70;

let Header = () => {

const { Search } = Input;

const onSearch = value => console.log(value);
const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

    return  <header className="header" >
        <Drawer width="550" title="Войти" placement="right" onClose={onClose} visible={visible}> 
          {/*  <Auth/> */}
              <Registration/>
      </Drawer > 
        <div className="header-img">
        
        <img alt="mainLogo" src="../../assets/img/logo black.png" ></img>
        </div>
        <div className="header-input">
        <Search placeholder="введите текст поиска" onSearch={onSearch} enterButton />
        
        </div>
        <div className="header-location">
        <Popover placement="bottom" title={text} content={content} trigger="click">
        <Text strong >Молодечно</Text><AimOutlined style={{
            fontSize: 16,
            color: "#1890ff",
            cursor: "pointer"    
        }} />
      </Popover>
        
        
            </div>
        <div className="header-addBtn">
        <Button type="primary" >Добавить объявление <ArrowUpOutlined style={{
        
        }}/></Button>
        </div>
        <div className="header-account">
        <Button type="dashed" onClick={showDrawer}>Войти</Button>
        </div>
</header>
    } 
 

export default Header;