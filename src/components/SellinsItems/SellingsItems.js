import React, {useEffect} from "react";
import Paginator from "../../components/COMMON/paginator"
import Item from "./item"
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import { Breadcrumb } from 'antd';
import {FilterOutlined} from "@ant-design/icons";
import { fetchItems } from "../../redux/API/API";
import {useDispatch} from "react-redux";

let SellingsItems = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);

    const items = useSelector( state => state.items.items);
    return <div className="SellingsItems">
        <div className="items-controllersBlock">
        <Breadcrumb >
    <Breadcrumb.Item> 
      <NavLink to="/">Главная</NavLink>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Товары</Breadcrumb.Item>
    <FilterOutlined style={{float: "right",
      fontSize: 30,
      marginRight: 20,
      cursor: "pointer"
  }}/>
      </Breadcrumb>
        </div>
         
        {items.map((item) => <NavLink to={"/item/" + item.id}> <Item key={item.id} {...item} /> </NavLink>
        )}
        <Paginator/>
    </div>
}

export default SellingsItems;