import React from "react";
import { NavLink } from "react-router-dom";
import Item from "./item"

let SellingsItems = () => {
 
    return <div className="SellingsItems">
        <NavLink to=""><Item/></NavLink>
    </div>
}

export default SellingsItems;