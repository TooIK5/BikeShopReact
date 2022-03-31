import React from 'react';
import { Pagination } from 'antd';
import {useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/itemsSlice";
import {useDispatch} from "react-redux";

let Paginator = () => {
    const currentPage = useSelector( state => state.items.currentPage);
   
    const dispatch = useDispatch();
    const setPage = (current) => dispatch(setCurrentPage(current));
     
    return   <Pagination onChange={setPage} style={{paddingBottom: "20px"}} total={50} /> 

   /* let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let rightPortionPageNumber = portionNumber * portionSize + 1;
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;

    return <div className="usersWrapper">
        <div className="users-Btns">
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>
                before </button>
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                    return <button className={currentPage === p ? 'users-Page--active' : null}
                                   onClick={() => {
                                       onPageChanged(p)
                                   }}>{p}</button>
                })
            }
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}> >> </button>}
        </div>
    </div>;*/

};

export default Paginator;
