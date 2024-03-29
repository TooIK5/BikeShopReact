import React, { useEffect } from "react";
import Paginator from "../../components/COMMON/paginator"
import Item from "./item"
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Breadcrumb, Button, Spin } from 'antd';
import { FilterOutlined } from "@ant-design/icons";
import { setIsHidden, setLasteq, setCurrent } from "../../redux/filtersSlice";
import { getAll } from "../../redux/API/API";
import { setCurrentType, clearItems } from "../../redux/itemsSlice";
import { getLiked } from "../../redux/API/API";

let SellingsItems = React.memo(() => {
  const dispatch = useDispatch();
  const { typeid } = useParams();

  if (typeid) {
    dispatch(setCurrentType(+typeid));
  }

  let types = useSelector(state => state.types.types);
  let page = useSelector(state => state.filters.currentPage);
  let limit = useSelector(state => state.items.limit);
  
  let userid = useSelector(state => {
    if (state.account.user) {
      return state.account.user.id
    }
  });

  let liked = useSelector(state => state.items.likedAds);
  let arr = [];

  types.forEach(e => {
    if (e.value === +typeid) {
      if (e.children) {
        e.children.forEach(e => arr.push(e.value))
      } else {
        err.push(typeid);
      }
    }
  });

  useEffect(() => {
    if (userid) {
      dispatch(getLiked(userid));
    }
    
    if (arr.length) {
      dispatch(getAll({ typeid: arr, page, limit }));
    }

    dispatch(setLasteq({ typeid: arr, page }));

    return () => {
      dispatch(setCurrent(1))
      dispatch(clearItems())
    }

  }, [userid]);

  const setVisible = () => dispatch(setIsHidden());
  const items = useSelector(state => state.items.items);
  if (items) {
    return <div className="sellingsItems" >
      <div className="items-controllersBlock">
        <Breadcrumb >
          <Breadcrumb.Item>
            <NavLink to="/">Главная</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Товары</Breadcrumb.Item>
        </Breadcrumb>
        <div>
          <Button className="filter__showFilterBtn" onClick={setVisible} size="small" type="primary">Параметры</Button>
          <FilterOutlined style={{
            float: "right",
            fontSize: 25,
            marginRight: 5,
            cursor: "pointer"
          }} />
        </div>
      </div>
      <div className="sellingsItems__item">
        {items ? items.map((item) => <Item key={item.id} props={item} id={liked} />
        ) : null}
      </div>
      <div className="sellingsItems__pagination">
        <Paginator />
      </div>
    </div>
  } else {
    return <Spin className="spinner" />
  }

}, function comparator(prevProps, nextProps) {

})

export default SellingsItems;