import React, { useEffect, useState } from "react";
import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Button, Drawer, Menu, Dropdown, Input, Badge } from 'antd';
import { DownOutlined, SnippetsOutlined, StarOutlined, PlusCircleOutlined, SettingOutlined, ArrowRightOutlined, RollbackOutlined } from '@ant-design/icons';
import { Button, Drawer, Menu, Dropdown, Input, Badge } from 'antd';
import { DownOutlined, SnippetsOutlined, StarOutlined, PlusCircleOutlined, SettingOutlined, ArrowRightOutlined, RollbackOutlined } from '@ant-design/icons';
import Auth from "../accountEntrence/authorization";
import Registration from "../accountEntrence/reg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Searching from "./search";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import Searching from "./search";

let Header = () => {

  const [visible, setVisible] = useState(false);
  const [regvisible, setRegVisible] = useState(false);

  let user = useSelector(state => state.account.user)
  useEffect(() => {
    if (user) {
      setVisible(false)
    }
  })
  const showDrawer = () => {
    setVisible(true);
  };

  const logout = () => {
      localStorage.setItem("token", null),
      localStorage.setItem("rememberMe", false)
      sessionStorage.setItem("token", null)
      location.reload()
  }

  const showRegDrawer = () => {
    setRegVisible(true);
    onClose();
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

  const userProperties = (<Menu >
    <Menu.Item key="1"><RollbackOutlined /> <NavLink to="/">Главная</NavLink></Menu.Item>
    <Menu.Item key="2"><SnippetsOutlined /> <NavLink to="/account/my_ads">Мои объявления</NavLink></Menu.Item>
    <Menu.Item key="3"><StarOutlined /> <NavLink to="/account/saved_ads">Избранное</NavLink></Menu.Item>
    <Menu.Item key="4"><SettingOutlined /> <NavLink to="/account/settings">Настройки</NavLink></Menu.Item>
    <Menu.Item key="5" onClick={logout}><ArrowRightOutlined /> Выход</Menu.Item>
  </Menu>)

  return <header className="header">

    <div className="header__img">
      <NavLink to="/"><img alt="mainLogo" src="../../assets/img/logo2.jpg" /></NavLink>
    </div>

    <div className="headerSearchbox"><Searching /></div>

    <div className="header-account" >
      {user ? <NavLink to={"/account/addAd"}><PlusCircleOutlined size="large" /></NavLink> : null}

      {user ?
        <div className="header-accountData">
          <div className="header-avatarWrapper">
            <Badge count={null} size="small" style={{ border: "none" }}><img src={user.avatar ? "http://localhost:5000/" + user.avatar : "../../assets/img/undefindUser.jpg"} className="header-avatar" /></Badge>
          </div>
          <div className="header__dropper">
            <Dropdown overlay={userProperties} trigger={["click"]} >
              <a
                onClick={(e) => e.preventDefault()}
                style={{ color: "black", fontWeight: "bold", margin: "0 0 10px 0" }}>
                {user.username} <DownOutlined />
                <br />
              </a>
              <a
                onClick={(e) => e.preventDefault()}
                style={{ color: "black", fontWeight: "bold", margin: "0 0 10px 0" }}>
                {user.username} <DownOutlined />
                <br />
              </a>
            </Dropdown>
          </div>
        </div> : null}
    </div>

    {user ? null : <Button type="dashed" onClick={showDrawer}>Войти</Button>}

    <Drawer width="320" title="Войти" placement="right" onClose={onClose} visible={visible}>
      <Auth />
      <Drawer width="320" title="Регистрация" placement="right" onClose={onCloseReg} visible={regvisible}>
        <Registration />
      </Drawer>
      <span block>
        <a preventDefault onClick={showRegDrawer}>Регистрация</a>
      </span>
    </Drawer>
  </header>
        </div> : null}
    </div>

    {user ? null : <Button type="dashed" onClick={showDrawer}>Войти</Button>}

    <Drawer width="320" title="Войти" placement="right" onClose={onClose} visible={visible}>
      <Auth />
      <Drawer width="320" title="Регистрация" placement="right" onClose={onCloseReg} visible={regvisible}>
        <Registration />
      </Drawer>
      <span block>
        <a preventDefault onClick={showRegDrawer}>Регистрация</a>
      </span>
    </Drawer>
  </header>
}

export default Header;