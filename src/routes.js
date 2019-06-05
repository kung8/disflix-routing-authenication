import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Movies from './components/Movies'
import Movie from './components/Movie'
import Login from './components/Login'

export default (
    <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/movies/:id' component={Movie}/>
        <Route path='/movies' component={Movies}/>
    </Switch>
)