import React from "react";
import { useSelector } from "react-redux";
import { Checkbox } from 'antd';

const Params = () => {
const currentFilters = useSelector(state => state.filters.currentFilters); 
 const keys = Object.keys(currentFilters);
 const values = Object.values(currentFilters);
return  keys.map((k, i) => {
    return ([<Checkbox  key={i} value={k}>{values[i]}</Checkbox>,
    <br/>])} )
} 

export default Params;
