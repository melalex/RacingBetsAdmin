/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from "../containers/App";
import NotFound from "../containers/NotFound";
import Home from "../containers/Home";

import requireAuthentication from "../containers/AuthenticatedComponent";

import Login from "../containers/Login";

import HorsePage from "../containers/horse/HorsePage";
import HorseCreate from "../containers/horse/HorseCreate"
import HorseEdit from "../containers/horse/HorseEdit"
import HorseView from "../containers/horse/HorseView"

import JockeyPage from "../containers/jockey/JockeyPage";
import JockeyCreate from "../containers/jockey/JockeyCreate"
import JockeyEdit from "../containers/jockey/JockeyEdit"
import JockeyView from "../containers/jockey/JockeyView"

import OwnerPage from "../containers/owner/OwnerPage";
import OwnerCreate from "../containers/owner/OwnerCreate"
import OwnerEdit from "../containers/owner/OwnerEdit"
import OwnerView from "../containers/owner/OwnerView"

import TrainerPage from "../containers/trainer/TrainerPage";
import TrainerCreate from "../containers/trainer/TrainerCreate"
import TrainerEdit from "../containers/trainer/TrainerEdit"
import TrainerView from "../containers/trainer/TrainerView"

import RacecoursePage from "../containers/racecourse/RacecoursePage";
import RacecourseCreate from "../containers/racecourse/RacecourseCreate"
import RacecourseEdit from "../containers/racecourse/RacecourseEdit"
import RacecourseView from "../containers/racecourse/RacecourseView"


export default (
    <div>
        <Route path='/' component={requireAuthentication(App)}>
            <IndexRoute path='/home' component={Home}/>

            <Route path='/login' component={Login}/>

            <Route path='/horse/list' component={HorsePage}/>
            <Route path='/horse/create' component={HorseCreate}/>
            <Route path='/horse/edit/:id' component={HorseEdit}/>
            <Route path='/horse/view/:id' component={HorseView}/>

            <Route path='/jockey/list' component={JockeyPage}/>
            <Route path='/jockey/create' component={JockeyCreate}/>
            <Route path='/jockey/edit/:id' component={JockeyEdit}/>
            <Route path='/jockey/view/:id' component={JockeyView}/>

            <Route path='/owner/list' component={OwnerPage}/>
            <Route path='/owner/create' component={OwnerCreate}/>
            <Route path='/owner/edit/:id' component={OwnerEdit}/>
            <Route path='/owner/view/:id' component={OwnerView}/>

            <Route path='/trainer/list' component={TrainerPage}/>
            <Route path='/trainer/create' component={TrainerCreate}/>
            <Route path='/trainer/edit/:id' component={TrainerEdit}/>
            <Route path='/trainer/view/:id' component={TrainerView}/>

            <Route path='/racecourse/list' component={RacecoursePage}/>
            <Route path='/racecourse/create' component={RacecourseCreate}/>
            <Route path='/racecourse/edit/:id' component={RacecourseEdit}/>
            <Route path='/racecourse/view/:id' component={RacecourseView}/>
        </Route>
        <Route path='*' component={NotFound}/>
    </div>
);