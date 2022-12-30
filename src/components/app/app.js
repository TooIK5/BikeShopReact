
import { Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Header/header";
import Categories from "../Categories/categories";
import SellingsItems from "../SellinsItems/SellingsItems"
import Filter from "../filterNav/filter";
import ItemDetails from "../itemDetailsPage/ItemDetails"
import Ad from "../adAddPage/ad";
import MyAds from "../account/myAds";
import AdEdit from "../account/myAdEdit";
import SavedAds from "../account/saved_ads";
import Settings from "../account/settings";
import Searchpage from "../search/searchpage";
import { auth, getTypes, getLocations } from "../../redux/API/API";
import Adminpage from "../adminPanel/adminPanel";
import Dialogs from "../dialogs/dialogs"; 

const App = () => {
    const dispatch = useDispatch();
    const isHidden = useSelector(state => state.filters.isHidden);
    useEffect(() => {
        dispatch(getTypes());
        dispatch(getLocations());
        dispatch(auth());
    }, [dispatch]);

    const isHidden = useSelector( state => state.filters.isHidden);

    return <div>
        <div className="app-wrapper">
            <Header />
            <div className="wrapp-allContent">
                <div className={`navBarContainer ${isHidden ? "hideFilter" : "showFilter"}`} >
                    <Route exact path="/items/:typeid?" render={() => <Filter />} />
                </div>
                <div className="content">
                    <Route exact path="/admin" render={() => <Adminpage />} />
                    <Route exact path="/dialogs" render={() => <Dialogs />} />
                    <Route exact path="/search" render={() => <Searchpage />} />
                    <Route exact path="/account/saved_ads" render={() => <SavedAds />} />
                    <Route path="/account/my_ads" render={() => <MyAds />} />
                    <Route exact path="/account/editAd/:id?" render={() => <AdEdit />} />
                    <Route exact path="/" render={() => <Categories />} />
                    <Route exact path="/account/settings" render={() => <Settings />} />
                    <Route path="/account/addAd" render={() => <Ad />} />
                    <Route exact path="/items/:typeid?" render={() => <SellingsItems />} />
                    <Route exact path="/item/:id?" render={() => <ItemDetails />} />
                </div>
            </div>
            <div />
        </div>
        <footer className="footer">
            <span className="footer__mainTitle">Produced by <a preventDefault target="_blank" href="https://www.linkedin.com/in/levvv/">Leu</a>. Powered by React/Redux Toolkit. 2022</span>
        </footer>
    </div>
}

export default App;