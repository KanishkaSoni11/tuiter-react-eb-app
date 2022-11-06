import React from "react";

import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import { useLocation } from 'react-router-dom';
import ExploreComponent from "./explore";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import TuitList from "./tuits";
import ProfileItem from "./profile/profile-item";
import profileReducer from "./profile/profile-reducer";


const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, profile : profileReducer}});


function Tuiter() {

    const location = useLocation();

    return (
        <Provider store={store}>

            <div className="row pt-2">
                <div className=" mt-2 col-2 col-md-2 col-lg-1 col-xl-2">

                    <NavigationSidebar active={location.pathname}/>

                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/explorecomponent" element={<ExploreComponent/>}/>
                        <Route path="/" element={<TuitList/>}/>
                        <Route path="/profilecomponent" element={<ProfileItem/>}/>
                    </Routes>
                </div>

                <div className="pt-2 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    )
        ;
}

export default Tuiter

