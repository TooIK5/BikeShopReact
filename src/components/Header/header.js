import React, {useState} from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import {Button, Drawer, Menu, Dropdown, Input, Badge} from 'antd';
import {AimOutlined, DownOutlined, SnippetsOutlined,StarOutlined,SettingOutlined,ArrowRightOutlined, ArrowUpOutlined} from '@ant-design/icons';
import Auth from "../accountEntrence/authorization";
import Registration from "../accountEntrence/reg";
import {NavLink} from "react-router-dom";
import {setSearchRequest} from "../../redux/headerSlice"
import { useSelector, useDispatch } from "react-redux";
const { SubMenu } = Menu;
const {Search} = Input;

let Header = () => {
    const dispatch = useDispatch();
    const searchParams = useSelector(state => state.header.searchParameters);
    const [location, setLocation] = useState("Беларусь");
    const handleClick = ({key}) => {setLocation(key)};
    const sendSearchRequset = (type) => dispatch(setSearchRequest({type, location}));
    const [visible, setVisible] = useState(false);
    const [regvisible, setRegVisible] = useState(false);
    
    const showRegDrawer = () => {
        setRegVisible(true);
        onClose();
    };

    const onClose = () => {
        setVisible(false);
    };
    const onCloseReg = () => {
        setRegVisible(false);
    };
      const userProperties = (<Menu >
        <Menu.Item key="=Объявления"><SnippetsOutlined /> <NavLink to="/account/my_ads">Мои объявления</NavLink></Menu.Item>
        <Menu.Item key="Избранное"><StarOutlined /> <NavLink to="/account/saved_ads">Избранное</NavLink></Menu.Item>
        <Menu.Item key="Настройки"><SettingOutlined /> <NavLink to="/account/settings">Настройки</NavLink></Menu.Item>
        <Menu.Item key=""><ArrowRightOutlined /> Выход</Menu.Item>
        </Menu>)
      const menu = (
        <Menu onClick={handleClick}>
        <SubMenu key="Minsk region" title="Минская область">
        <Menu.Item key="Борисов">Борисов</Menu.Item>
        <Menu.Item key="Молодечно">Молодечно</Menu.Item>
 
      {/* <Menu.ItemGroup title="Item 2">
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </Menu.ItemGroup> */}
        </SubMenu>
          <Menu.Item key="Newest">Newest</Menu.Item>
          <Menu.Item key="Lowest Price">Lowest Price</Menu.Item>
          <Menu.Item key="Highest Price">Highest Price</Menu.Item>
        </Menu>
      );

    return <header className="header">
        <Drawer width="550" title="Войти" placement="right" onClose={onClose} visible={visible}>
              <Auth/>
            <Drawer width="550" title="Регистрация" placement="right" onClose={onCloseReg} visible={regvisible}>
            <Registration/>
            </Drawer>
            <Button onClick={showRegDrawer} type="primary" block>
                Регистрация
            </Button>
        </Drawer>
        <div className="header-img">
            <NavLink to="/"> <img alt="mainLogo" src="../../assets/img/logo2.jpg"/></NavLink>
        </div>
        <div className="header-input"> 
            <Search placeholder="введите текст поиска" enterButton="Search" onSearch={sendSearchRequset} />
        </div>
        <div className="header-location">
       
  <Dropdown overlay={menu} trigger={["click"]}>
    <a
      className="ant-dropdown-link"
      onClick={(e) => e.preventDefault()}
      style={{ color: "black", fontWeight: "bold" }}
    >
      {location} <AimOutlined />
    </a>
  </Dropdown>
            </div>
        <div className="header-addBtn">
            <NavLink to={"/account/addAd"}><Button type="primary">Добавить объявление <ArrowUpOutlined style={{}}/></Button></NavLink>
        </div>  
        <div className="header-account">
          <div className="header-accountData">
            <div  className="header-avatarWrapper">
            <Badge count={5} size="small"><img src="https://media.istockphoto.com/photos/beautiful-universe-picture-id1358140204" className="header-avatar"/></Badge>
            </div>
  <div className="header-antlinkWrapper">
  <Dropdown overlay={userProperties} trigger={["click"]} >
    <a 
      onClick={(e) => e.preventDefault()}
      style={{ color: "black", fontWeight: "bold", margin: "0 0 10px 0" }}
    >
      Username <DownOutlined />
      <br/>
    </a>
  </Dropdown>
  </div>
          </div>
            {/* <Button type="dashed" onClick={showDrawer}>Войти</Button> */}
        </div>
    </header>
}

export default Header;