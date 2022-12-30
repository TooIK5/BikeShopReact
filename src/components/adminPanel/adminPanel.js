import React, { useEffect } from 'react';
import Aitem from './aitem';
import { useSelector, useDispatch } from "react-redux";
import Paginator from "../COMMON/paginator";
import { getAllForAdmin } from '../../redux/API/API';

const Adminpage = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.items.items)

    useEffect(() => {
        dispatch(getAllForAdmin({}))
    }, [dispatch]);

    return <div>
        {items ? items.map((item) => <Aitem key={item.id} props={item} />
        ) : null}

        <div className="sellingsItems__pagination">
            <Paginator props={"admin"}/>
        </div>
    </div>
};

export default Adminpage;