import React from "react";
import {  Typography } from 'antd';
import { NavLink } from "react-router-dom";
import { Button } from "antd"
const { Title, Text } = Typography;


const AdItem = ({id,title, dataTime, price, photo}) => {
 
    return  <div className="myAdItem-wrapper">
     <div className="myAdItem-photo"><img src={photo}/>
     </div>
        <div className="myAdItem-info">
        <Title level={4}>{title}</Title>
        <Text strong > {price}</Text>
        <br/>
        <Text type="secondary" >{dataTime}</Text>
        <br/>
        <NavLink to={"/account/editAd/" + id}>Редактировать</NavLink>
        <br/>
   
        <Button danger style={{background: "#f8f8f8"}}>Удалить</Button>
        </div>
    </div>
    }

export default AdItem;