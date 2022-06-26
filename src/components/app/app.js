
import {Route} from "react-router-dom";
import React, {useEffect} from "react";
import Header from "../Header/header";
import Categories from "../Categories/categories";
import SellingsItems from "../SellinsItems/SellingsItems"
import Filter from "../filterNav/filter";
import ItemDetailsContainer from "../itemDetailsPage/itemDetailsContainer"
import Ad from "../adAddPage/ad";
import MyAds from "../account/myAds";
import AdEdit from "../account/myAdEdit";
import Settings from "../account/settings";
import { useSelector } from "react-redux";

const App = () => {

    const isHidden = useSelector( state => state.filters.isHidden);

    return <div>
        <div className="app-wrapper">
        <Header/>
            <div className="wrapp-allContent">
                <div className={`navBarContainer ${isHidden ? "hideFilter" : "showFilter"}`} >
                    <Route exact path="/items/:categoryId?" render={() => <Filter/>}/>
                </div>
                <div className="content">
                    <Route path="/account/my_ads" render={() => <MyAds/> }/>
                    <Route exact path="/account/editAd/:id?" render={() => <AdEdit/> }/>
                    <Route exact path="/" render={() => <Categories/>}/>
                    <Route exact path="/account/settings" render={() => <Settings/>}/>
                    <Route path="/account/addAd" render={() => <Ad/>}/>
                    <Route exact path="/items/:categoryId?" render={() => <SellingsItems/>}/>
                    <Route exact path="/item/:id?" render={() => <ItemDetailsContainer/>}/>
                </div>
                </div>
            <div/>
        </div>
        <footer className="footer">
                <span className="footer__mainTitle">Produced by <a preventDefault target="_blank" href="https://www.linkedin.com/in/levvv/">Leu</a>. Powered by React/Redux Toolkit. 2022</span>
        </footer>
    </div>
    
}

export default App;