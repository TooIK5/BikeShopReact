import React from "react";
import '../../../node_modules/antd/dist/antd.css';
import { Menu, Switch } from 'antd';
import {NavLink} from "react-router-dom";
const { SubMenu } = Menu;

function handleClick(e) {
    console.log('click', e);
}
class Nav extends React.Component {

    render () {
        return  <div className="nav-container">
            <Menu onClick={handleClick} style={{ width: "100%" }} mode="vertical">
                <SubMenu key="sub1"  title="Navigation One">
                    <Menu.ItemGroup title="Item 1">
                        <NavLink to={"/items"}><Menu.Item key="1">FILTRATION</Menu.Item></NavLink>

                        <Menu.Item key="2">Option 2</Menu.Item>
                    </Menu.ItemGroup>
                    <Menu.ItemGroup title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </Menu.ItemGroup>
                </SubMenu>
                <SubMenu key="sub2"  title="Navigation Two">
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4"  title="Navigation Three">
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
    </div>
    }
}

export default Nav;