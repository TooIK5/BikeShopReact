import React from "react";
import {  Typography } from 'antd';
import { NavLink } from "react-router-dom";
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
        </div>
    </div>
    }

export default AdItem;