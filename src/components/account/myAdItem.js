import React from "react";
import { Typography } from 'antd';
import { NavLink } from "react-router-dom";
import { Button } from "antd"
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../../redux/API/API";

const { Title, Text } = Typography;

const AdItem = ({ id, title, createdAt, price, photo }) => {
    const dispatch = useDispatch();
    let userid = useSelector(state => state.account.user.id);
    let src = "http://localhost:5000/" + photo[0];
    let stock = "http://localhost:5000/nopicture.jpg";
    let status = useSelector(state => state.account.dstatus);
    let error = useSelector(state => state.account.derror);

    let handleClick = () => {
        dispatch(deleteItem({userid, id}))
    }

    return <div className="myAdItem-wrapper">
        <div className="myAdItem-photo">
            <img src={photo[0] ? src : stock} />
        </div>
        <div className="myAdItem-info">
            <Title className="myAdItem__title" level={4}>{title}</Title>
            <Text strong > {price}</Text>
            <br />
            <Text type="secondary" >{createdAt.substring(0, 10) + " " + createdAt.substring(12, 16)}</Text>
            <br />
            <NavLink to={"/account/editAd/" + id}>Редактировать</NavLink>
            <br />
            {status === "loading" ? <Button loading onClick={handleClick} style={{ background: "#f8f8f8" }}>Удалить</Button> : <Button danger onClick={handleClick} style={{ background: "#f8f8f8" }}>Удалить</Button>}
        </div>
    </div>
}

export default AdItem;