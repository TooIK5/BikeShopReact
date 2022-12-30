import React from "react";
import { Input } from 'antd';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchItem } from "../../redux/API/API";
import { setLastSearch } from "../../redux/filtersSlice";
const { Search } = Input;

let Searching = () => {
    const dispatch = useDispatch();
  
    let history = useHistory();

    const sendSearchRequset = (title) => {
        dispatch(searchItem({ title }));
        dispatch(setLastSearch({ title }));
        history.replace("/search")
    };

    return <div className="search">
        <div className="search-input">
            <Search placeholder="Поиск по РБ" enterButton="Search" onSearch={sendSearchRequset} />
        </div>
    </div>
}

export default Searching;