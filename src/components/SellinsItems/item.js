import React from "react";
import '../../../node_modules/antd/dist/antd.css';
import {  Typography } from 'antd';
import { StarFilled, AimOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

let Item = () => {
    return <div className="Item">
       <div
        className="Item-photo"
       ><img
       src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
       alt="content"
     />
     </div>
        <div className="Item-info">
      
        <StarFilled style={{
            fontSize: 22,
            color: "#1890ff",
            cursor: "pointer",
            float: "right",
        
        }} />
        <Title level={3}>Втулка задняя   </Title>
        <Text  >Втулки</Text>
        <br/>
        <Text strong >10 р.</Text>
        <br/>
        <Text >Г. Минск, Советский район <AimOutlined style={{
            fontSize: 18,
            color: "#1890ff",
            cursor: "pointer"    
        }} /></Text>
        <br/>
        <Text type="secondary" >22.10.2021, 13:45</Text>
        </div>
    </div>
}

export default Item;