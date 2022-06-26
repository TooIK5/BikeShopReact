import React from 'react';
import { Pagination } from 'antd';
import {useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/itemsSlice";
import {useDispatch} from "react-redux";

let Paginator = () => {
    const currentPage = useSelector( state => state.items.currentPage);
    const dispatch = useDispatch();
    const setPage = (current) => dispatch(setCurrentPage(current));
     
    return   <Pagination onChange={setPage} style={{paddingBottom: "10px"}} total={50} /> 
};

export default Paginator;
