import React, { useEffect } from "react";
import { Typography, Button } from 'antd';
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLiked } from "../../redux/API/API";
import Item from "../SellinsItems/item";

const { Title, Text } = Typography;

const SavedAds = () => {
    const dispatch = useDispatch();
    let userid = useSelector(state => {
        if (state.account.user) {
            return state.account.user.id
        }
    });

    let items = useSelector(state => state.items.likedAds);

    useEffect(() => {
        dispatch(getLiked(userid));
    }, [userid]);

    // let handleClick = () => {
    //     dispatch(deleteItem({userid, id}))
    // }

    return <div className="savedAds-wrapper">
        {items ? items.map((item) => <Item key={item.id} id={items} props={item} />
        ) : null}
    </div>
}

export default SavedAds;