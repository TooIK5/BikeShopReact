import React from "react";
import { Typography } from 'antd';
import { NavLink } from "react-router-dom";
import { StarFilled, AimOutlined, StarOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;

let Item = ({ id, title, src, createAt, location, description, price, isLiked }) => {

    return <div className="Item">
        <NavLink to={"/item/" + id}>
            <div
                className="Item-photo">
                <img
                    src={src}
                    alt={id} />
            </div>
        </NavLink>

        <div className="Item-info">
            {isLiked ? <button style={{
                background: "transparent",
                fontSize: 22,
                color: "#1890ff",
                cursor: "pointer",
                float: "right",
            }} onClick={() => {
                unfollow(id);
            }}><StarFilled /></button>
                : <button style={{
                    fontSize: 22,
                    background: "transparent",
                    color: "#1890ff",
                    cursor: "pointer",
                    float: "right",
                }} onClick={() => {
                    follow(id);
                }}> <StarOutlined /></button>}
            <Title className="item__title" level={3}> <NavLink to={"/item/" + id}>{title}  </NavLink></Title>
            <Text>subCategory</Text>
            <br />
            <Text strong >{price}</Text>
            <br />
            <Text >{location} <AimOutlined style={{
                fontSize: 18,
                color: "#1890ff",
                cursor: "pointer"
            }} /></Text>
            <br />
            <Text className="item__descr">{description.substring(0, 50) + "..."}</Text>
            <Text type="secondary" style={{ float: "right" }}>{createAt}</Text>
        </div>
    </div>
}

export default Item;