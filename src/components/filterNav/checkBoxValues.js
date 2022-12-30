import React from "react";
import { useSelector } from "react-redux";
import { Checkbox } from 'antd';


const Params = React.memo((props) => {

    const keys = Object.keys(props.props);
    const values = Object.values(props.props);
    return keys.map((k, i) => {
        return ([<Checkbox key={i} value={k}>{values[i]}</Checkbox>,
        <br />])
    })
})

export default Params;
