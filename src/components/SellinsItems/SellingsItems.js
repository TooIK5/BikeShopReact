import React from "react";
import Paginator from "../../components/COMMON/paginator"
import Item from "./item"
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { Breadcrumb, Button } from 'antd';
import { FilterOutlined } from "@ant-design/icons";
import { setIsHidden } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";

let SellingsItems = () => {
  const dispatch = useDispatch();
  const { categoryId } = useParams();

  //  useEffect(() => {
  //       dispatch(getAsyncAds({locationId: "UUID", categoryId: categoryId}));
  //  }, [dispatch]); useDispatch(setIsHidden)

  const setVisible = () => dispatch(setIsHidden());
  const items = useSelector(state => state.items.items);

  return <div className="sellingsItems" >
    <div className="items-controllersBlock">
      <Breadcrumb >
        <Breadcrumb.Item>
          <NavLink to="/">Главная</NavLink>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Товары</Breadcrumb.Item>
        <Button className="filter__showFilterBtn" onClick={setVisible} size="small" type="primary">Параметры</Button>
        <FilterOutlined style={{
          float: "right",
          fontSize: 25,
          marginRight: 5,
          cursor: "pointer"
        }} />
      </Breadcrumb>
    </div>
    {items ? items.map((item) => <Item key={item.id} {...item} />
    ) : null}
    <Paginator />
  </div>
}

export default  SellingsItems;