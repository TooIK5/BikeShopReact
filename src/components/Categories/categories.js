

import {} from 'antd';
import React, {useEffect} from "react";
import '../../assets/scss/main.scss';
import {NavLink} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setForksFilters} from "../../redux/filtersSlice";
import {getCategories} from "../../redux/API/API";
 
const Categories = () => {
    const dispatch = useDispatch();
    
    //     useEffect(() => {
    //       dispatch(getCategories());
    //   }, [dispatch]);
       
   // const categories = useSelector( state => state.items.categories);
 
    const setFilters = (type) => dispatch(setForksFilters(type));
    
   return <div className="categories-wrapp">
            
            {/* {categories ? categories.map((item) => <NavLink to={"/items/" + item.id}> <div className="categories-item">{item.name}</div></NavLink>
        ) : null}
         */}
        <NavLink to="/items"> <div className="categories-item" >Багажники</div></NavLink>
        <NavLink to="/items"> <div className="categories-item" onClick={setFilters.bind(this, "forks")}>Вилки и амортизаторы</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Втулки велосипедные</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Выносы</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Замки</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Защиты</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Звезды</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Звонки</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Инструменты</div></NavLink>
        <NavLink to="/items"> <div className="categories-item" onClick={setFilters.bind(this, "cassetes")}>Кассеты</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Колеса</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Крепления</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Насосы</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Обода</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Одежда</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Очки велосипедные</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Педали</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Переключение</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Покрышки и камеры</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Рамы</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Рулевые</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Рули, грипсы, обмотки, рога</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Седла</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Спицы</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Средства по уходу</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Тормоза</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Фляги и держатели</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Цепи</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Шатуны и каретки</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Шлемы</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Штыри подседельные и зажимы</div></NavLink>
        <NavLink to="/items"> <div className="categories-item">Щитки</div></NavLink>
    </div>
}


export default Categories;