import React, { useState } from "react";
import { Dropdown, Input, Menu } from 'antd';
import { AimOutlined} from '@ant-design/icons';
import { setSearchRequest } from "../../redux/headerSlice"
import { useSelector, useDispatch } from "react-redux";

const { Search } = Input;
const { SubMenu } = Menu;

let Searching = () => {
    const dispatch = useDispatch();
    const searchParams = useSelector(state => state.header.searchParameters);
    const sendSearchRequset = (type) => dispatch(setSearchRequest({ type, location }));
    const [location, setLocation] = useState("Беларусь");
    const handleClick = ({ key }) => { setLocation(key) };
    
    const menu = (
        <Menu onClick={handleClick}>
          <SubMenu key="Minsk region" title="Минская область">
            <Menu.Item key="Борисов" id="1">Борисов</Menu.Item>
            <Menu.Item key="Молодечно" id="2">Молодечно</Menu.Item> 
            {/* <Menu.ItemGroup title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup> */}
          </SubMenu>
        </Menu>
      );

    return <div className="search">
        <div className="search-input">
            <Search placeholder="введите текст поиска" enterButton="Search" onSearch={sendSearchRequset} />
        </div>
        <div className="search-location">
            <Dropdown overlay={menu} trigger={["click"]}>
                <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                    style={{ color: "black", fontWeight: "bold" }}>
                    {location} <AimOutlined />
                </a>
            </Dropdown>
        </div>
    </div>
}

export default Searching;