import React from "react";
import { NavLink } from "react-router-dom";
import '../../../node_modules/antd/dist/antd.css';
import { Menu, Switch } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;

class Nav extends React.Component {
    state = {
        theme: 'light',
        current: '1',
      };
    
      changeTheme = value => {
        this.setState({
          theme: value ? 'dark' : 'light',
        });
      };
    
      handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    render () {
        return  <div className="nav-container">
        <div className="navList">
        
        <Menu
          className="nav-container-menu"
          theme={this.state.theme}
          onClick={this.handleClick}    
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1"  title="Втулки">
            <NavLink to={"/items"}> <Menu.Item key="1">Все</Menu.Item></NavLink>
          </SubMenu>
          <SubMenu key="sub2"  title="Вилки">
            <Menu.Item key="5">Воздушные</Menu.Item>
            <Menu.Item key="6">Пружинно-эластомерные</Menu.Item>
            <Menu.Item key="7">Ригидгные</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title="Колеса">
              <Menu.Item key="8">29</Menu.Item>
              <Menu.Item key="9">28</Menu.Item>
              <Menu.Item key="10">27.5</Menu.Item>
              <Menu.Item key="11">26</Menu.Item>
              <Menu.Item key="12">другие</Menu.Item>
            </SubMenu>
          <SubMenu key="sub4"  title="Руль">
            <Menu.Item key="13">Шоссейный</Menu.Item>
            <Menu.Item key="14">MTB</Menu.Item>
            <Menu.Item key="15">Гревл</Menu.Item>
            <Menu.Item key="16">Другие</Menu.Item>
          </SubMenu>
        </Menu>
        </div>
    </div>
    }
}

export default Nav;