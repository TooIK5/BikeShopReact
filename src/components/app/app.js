
import {Route} from "react-router-dom";
import React, {useEffect} from "react";
import '../../assets/scss/main.scss';
import HeaderContainer from "../Header/headerContainer";
import Categories from "../Categories/categories";
import SellingsItemsContainer from "../SellinsItems/SellingsItemsContainer"
import '../../../node_modules/antd/dist/antd.css';
import FilterContainer from "../filterNav/filterContainer";
import ItemDetailsContainer from "../itemDetailsPage/itemDetailsContainer"
import AdContainer from "../adAddPage/adContainer";
import {useDispatch} from "react-redux";
import { fetchItems } from "../../redux/itemsSlice"

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch])

    return <div>
        <HeaderContainer/>
        <div className="app-wrapper">
            <div className="wrapp-allContent">
                <div className="navBarContainer">
                    <Route exact path="/items" render={() => <FilterContainer/>}/>
                </div>
                <div className="content">
                    <Route exact path="/" render={() => <Categories/>}/>
                    <Route path="/addAd" render={() => <AdContainer/>}/>
                    <Route exact path="/items" render={() => <SellingsItemsContainer/>}/>
                    <Route exact path="/item/:id?" render={() => <ItemDetailsContainer/>}/>
                </div>
            </div>
            <div/>
        </div>
    </div>
}

export default App;