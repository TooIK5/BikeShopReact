import React, {useState} from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import {Button, Typography, Drawer, Form, Cascader, Input, Popover} from 'antd';
import {ArrowUpOutlined, AimOutlined} from '@ant-design/icons';
import Auth from "../accountEntrence/authorization";
import Registration from "../accountEntrence/reg";
import {NavLink} from "react-router-dom";
import {setSearchRequest} from "../../redux/headerSlice"
import { useSelector, useDispatch } from "react-redux";

let Header = () => {
    const { Text } = Typography;
    const {Search} = Input;
    const dispatch = useDispatch();
    const searchParams = useSelector(state => state.header.searchParameters);
    const sendSearchRequset = (type) => dispatch(setSearchRequest({type, ...location}));
 
    const [location, setLocation] = useState(searchParams.location);
    console.log(searchParams);
  

    const [visible, setVisible] = useState(false);
    const [regvisible, setRegVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

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
            <NavLink to="/"> <img alt="mainLogo" src="../../assets/img/logo black.png"/></NavLink>
        </div>
        <div className="header-input">
            <Search placeholder="введите текст поиска" enterButton="Search" onSearch={sendSearchRequset} />
        </div>
        <div className="header-location">
       
        <Popover placement="bottom"  content={  
            <Cascader  onChange={setLocation} trigger="click" 
                options={[
                    {
                        value: 'Minsk region',
                        label: 'Минский район',
                        children: [
                            {
                                value: 'Molodechno',
                                label: 'Молодечно',
                            },
                            {
                                value: 'Borisov',
                                label: 'Борисов',
                            },
                            {
                                value: 'Jodino',
                                label: 'Жодино',
                            },
                        ],
                    },
                ]}
            />   
      }>
                <Text strong>{location[1]}</Text>
                <AimOutlined style={{
                fontSize: 16,
                color: "#1890ff",
                cursor: "pointer"
            }}/>
            </Popover> 
        </div>
        {/* <div className="header-addBtn">
            <NavLink to={"/addAd"}><Button type="primary">Добавить объявление <ArrowUpOutlined style={{}}/></Button></NavLink>
        </div> */}
        <div className="header-account">
            <Button type="dashed" onClick={showDrawer}>Войти</Button>
        </div>
    </header>
}

export default Header;