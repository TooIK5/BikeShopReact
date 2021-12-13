import { compose } from "redux";
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import React from "react";
import '../../assets/scss/main.scss';
import HeaderContainer from "../Header/headerContainer";
import NavContainer from "../Navigation/navContainer";
import SellingsItemsContainer from "../SellinsItems/SellingsItemsContainer"
import '../../../node_modules/antd/dist/antd.css';
import FilterContainer from "../filterNav/filterContainer";
import ItemDetailsContainer from "../itemDetailsPage/itemDetailsContainer"
import AdContainer from "../adAddPage/adContainer";
const   { Component } = require("react");

class App extends Component {
   
   render() {
return ( 
<div>
    <HeaderContainer /> 
<div className="app-wrapper">
         
        <div className="wrapp-allContent">
           <div className="navBarContainer">
           <Route path="/items" render={() =>  <FilterContainer />}/>
           <Route path="/" render={() =>  <NavContainer/>}/>
           </div>
           <div className="content">
           {/* <SellingsItemsContainer /> */}

          {/*  <Route path='/item/:userId?' render={() =>  <ItemDetailsContainer /> }/> */}
             {/* <ItemDetailsContainer />  */}
             <AdContainer/>
           </div>
          </div>
        <div/>
    </div>
</div>
)
   }
}

const mapStateToProps = (state) => ({
   // initialized: state.app.initialized
});

export default compose(withRouter, connect(mapStateToProps))(App);