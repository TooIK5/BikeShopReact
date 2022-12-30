import React, { useEffect } from 'react';
import { Pagination } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { getAll, searchItem, getAllForAdmin } from "../../redux/API/API";
import { setCurrent } from "../../redux/filtersSlice"
 

let Paginator = (props) => {

    let lastreq = useSelector(state => state.filters.lastreq);
    let curr = useSelector(state => state.filters.currentPage);
    let lastSearch = useSelector(state => state.filters.lastSearch);
    let total = useSelector(state => state.items.count);
    let copy = { ...lastreq };
    let lastSearchCopy = { ...lastSearch };
    const dispatch = useDispatch();

    const setPage = (current) => {
        if (props.props === "search") {
            lastSearchCopy.page = current;
            dispatch(setCurrent(current))
            dispatch(searchItem(lastSearchCopy));
        } else if (props.props === "admin") {
            dispatch(getAllForAdmin({page: current}))
            dispatch(setCurrent(current))
        } else {
            copy.page = current;
            dispatch(setCurrent(current))
            dispatch(getAll(copy))
        }
    };
    return <Pagination onChange={setPage} current={curr} style={{ paddingBottom: "10px" }} total={total} />
};

export default Paginator;
