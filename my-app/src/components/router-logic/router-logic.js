import React, { Component } from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import AddUser from '../add-users/add-users';
import Users from '../users/users';
import AddTweet from '../add-tweet/add-tweet';
import Tweets from '../tweets/tweets';




export default class Logic extends Component{

    render(){
        return(
            <Switch>
    
                <Route path="/users" component = { Users } />
    
                <Route path="/add-user" component = { AddUser } />
    
                <Route path="/tweets" component = { Tweets } />
    
                <Route path="/add-tweet" component = { AddTweet } />
    
    
            </Switch>
        )
    }
}

