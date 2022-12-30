import React, {useState} from "react";
import { Typography } from 'antd';
import { NavLink } from "react-router-dom";
import { StarFilled, AimOutlined, StarOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { findOption } from "../COMMON/findOption";
import { addToLiked, removeFromLiked } from "../../redux/API/API";

const { Title, Text } = Typography;

let Item = (props) => {
    let dispatch = useDispatch();
    let isLiked = false;
    if (props.id) {
        props.id.forEach(element => {
            if (element.id === props.props.id) {
                isLiked = true;
            }
        });
    };

    let [thelike, toggleLike] = useState(isLiked)

    let { id, createdAt, description, locationid, photo, typeid, title, price } = props.props;
    let types = useSelector(state => state.types.types);
    let userid = useSelector(state => {
        if (state.account.user) {
            return state.account.user.id
        }
    })
    let locations = useSelector(state => state.locations.locations);
    let type = findOption(types, typeid);
    let location = findOption(locations, locationid);

    let like = () => { dispatch(addToLiked({ userid, id })) };
    let unlike = () => { dispatch(removeFromLiked({ id })) };

    return <div className="Item">
        <NavLink to={"/item/" + id}>
            <div
                className="Item-photo">
                <img
                    src={photo.length ? `http://localhost:5000/${photo[0]}` : `http://localhost:5000/nopicture.jpg`}
                    alt={id} />
            </div>
        </NavLink>

        <div className="Item-info">
            { thelike ? <button style={{
                background: "transparent",
                fontSize: 22,
                color: "#1890ff",
                cursor: "pointer",
                float: "right",
            }} onClick={() => {
                unlike(id);
                toggleLike(!thelike);
            }}><StarFilled /></button>
                : <button style={{
                    fontSize: 22,
                    background: "transparent",
                    color: "#1890ff",
                    cursor: "pointer",
                    float: "right",
                }} onClick={() => {
                    like(id);
                    toggleLike(!thelike);
                }}> <StarOutlined /></button>}
            <Title className="item__title" level={3}> <NavLink to={"/item/" + id}>{title}  </NavLink></Title>
            <Text>{type}</Text>
            <br />
            <Text strong >{price}</Text>
            <br />
            <Text >{location + " "}<AimOutlined style={{
                fontSize: 18,
                color: "#1890ff",
                cursor: "pointer"
            }} /></Text>
            <br />
            <Text className="item__descr">{description.substring(0, 50) + "..."}</Text>
            <Text type="secondary" style={{ float: "right" }}>{createdAt.substring(0, 10) + " " + createdAt.substring(12, 16)}</Text>
        </div>
    </div>
}

export default Item;