import React from "react";
import '../../../node_modules/antd/dist/antd.css';
import {  Typography } from 'antd';
import { StarFilled, AimOutlined, StarOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

let Item = ({id,title, url}) => {

    const  liked = false;
    const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    return <div className="Item">
       <div
        className="Item-photo"
       ><img
       src={url}
       alt={id}
     />
     </div>
        <div className="Item-info">
        {liked ? <button style={{   background: "transparent",
                                    fontSize: 22,
                                    color: "#1890ff",
                                    cursor: "pointer",
                                    float: "right",
                                }}  onClick={() => {
                                    unfollow(id);
                                }}><StarFilled  /></button>
                                : <button style={{
                                    fontSize: 22,
                                    background: "transparent",
                                    color: "#1890ff",
                                    cursor: "pointer",
                                    float: "right",
                                }}  onClick={() => {
                                    follow(id);
                                }}> <StarOutlined /></button>}
        <Title level={3}>{title}</Title>
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
        <Text>{description.substring(0, 100) + "..."}</Text>
        <Text type="secondary" style={{float: "right"}}>22.10.2021, 13:45</Text>
        </div>
    </div>
}

export default Item;