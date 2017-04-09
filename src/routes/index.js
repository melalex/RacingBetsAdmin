/**
 * Created by Alexander Melashchenko on 4/3/17.
 */

import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from "../containers/App";
import NotFound from "../containers/NotFound";
import Home from "../containers/Home";

import page from "../containers/entity/Page"
import view from "../containers/entity/View"
import create from "../containers/entity/Create"
import edit from "../containers/entity/Edit"

import requireAuthentication from "../containers/AuthenticatedComponent"

import {createHorse, getHorses, searchHorse, getOneHorse, updateHorse, deleteHorse} from '../actions/Horse'
import {createJockey, getJockeys, searchJockey, getOneJockey, updateJockey, deleteJockey} from '../actions/Jockey'
import {createOwner, getOwners, searchOwner, getOneOwner, updateOwner, deleteOwner} from '../actions/Owner'
import {getRaces, searchRace, getOneRace, deleteRace} from '../actions/Race'
import {
    createTrainer,
    getTrainers,
    searchTrainer,
    getOneTrainer,
    updateTrainer,
    deleteTrainer
} from '../actions/Trainer'
import {
    createRacecourse,
    getRacecourses,
    searchRacecourse,
    getOneRacecourse,
    updateRacecourse,
    deleteRacecourse
} from '../actions/Racecourse'

import Login from "../containers/Login";

import HorseForm from "../components/horse/HorseForm"
import HorseList from "../components/horse/HorseList"
import HorseView from "../components/horse/HorseView"

import PersonForm from "../components/person/PersonForm"
import PersonList from "../components/person/PersonList"
import PersonView from "../components/person/PersonView"

import RacecourseForm from "../components/racecourse/RacecourseForm"
import RacecourseList from "../components/racecourse/RacecourseList"
import RacecourseView from "../components/racecourse/RacecourseView"

import RaceList from "../components/race/RaceList"
import RaceView from "../components/race/RaceView"

import RaceCreate from '../containers/race/RaceCreate'
import RaceEdit from '../containers/race/RaceEdit'

import UserPage from '../containers/user/UserPage'


export default (
    <div>
        <Route path='/login' component={Login}/>
        <Route path='/' component={requireAuthentication(App)}>
            <IndexRoute component={Home}/>

            <Route path='/horse/list' component={page('Horse', HorseList, getHorses, searchHorse, deleteHorse)}/>
            <Route path='/horse/create' component={create('Horse', HorseForm, createHorse)}/>
            <Route path='/horse/edit/:id' component={edit('Horse', HorseForm, updateHorse, getOneHorse)}/>
            <Route path='/horse/view/:id' component={view('Horse', HorseView, getOneHorse)}/>

            <Route path='/jockey/list' component={page('Jockey', PersonList, getJockeys, searchJockey, deleteJockey)}/>
            <Route path='/jockey/create' component={create('Jockey', PersonForm, createJockey)}/>
            <Route path='/jockey/edit/:id' component={edit('Jockey', PersonForm, updateJockey, getOneJockey)}/>
            <Route path='/jockey/view/:id' component={view('Jockey', PersonView, getOneJockey)}/>

            <Route path='/owner/list' component={page('Owner', PersonList, getOwners, searchOwner, deleteOwner)}/>
            <Route path='/owner/create' component={create('Owner', PersonForm, createOwner)}/>
            <Route path='/owner/edit/:id' component={edit('Owner', PersonForm, updateOwner, getOneOwner)}/>
            <Route path='/owner/view/:id' component={view('Owner', PersonView, getOneOwner)}/>

            <Route path='/trainer/list'
                   component={page('Trainer', PersonList, getTrainers, searchTrainer, deleteTrainer)}/>
            <Route path='/trainer/create' component={create('Trainer', PersonForm, createTrainer)}/>
            <Route path='/trainer/edit/:id' component={edit('Trainer', PersonForm, updateTrainer, getOneTrainer)}/>
            <Route path='/trainer/view/:id' component={view('Trainer', PersonView, getOneTrainer)}/>

            <Route path='/racecourse/list'
                   component={page('Racecourse', RacecourseList, getRacecourses, searchRacecourse, deleteRacecourse)}/>
            <Route path='/racecourse/create' component={create('Racecourse', RacecourseForm, createRacecourse)}/>
            <Route path='/racecourse/edit/:id'
                   component={edit('Racecourse', RacecourseForm, updateRacecourse, getOneRacecourse)}/>
            <Route path='/racecourse/view/:id' component={view('Racecourse', RacecourseView, getOneRacecourse)}/>

            <Route path='/race/list' component={page('Race', RaceList, getRaces, searchRace, deleteRace)}/>
            <Route path='/race/create' component={RaceCreate}/>
            <Route path='/race/edit/:id' component={RaceEdit}/>
            <Route path='/race/view/:id' component={view('Race', RaceView, getOneRace)}/>

            <Route path='/user/list' component={UserPage}/>
        </Route>
        <Route path='*' component={NotFound}/>
    </div>
);