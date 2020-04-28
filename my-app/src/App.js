import React, { Component } from 'react';
import Links from './components/links/links';
import Logic from './components/router-logic/router-logic';
import { fetchUsersData , fetchUsersDataSuccess, fetchTweetsData } from './state/action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



export const FETCH_USERS_DATA_SUCCESS='FETCH_USERS_DATA_SUCCESS';
export const PUSH_USERS_DATA_SUCCESS='PUSH_USERS_DATA_SUCCESS';
export const FETCH_TWEETS_DATA_SUCCESS='FETCH_TWEETS_DATA_SUCCESS';
export const PUSH_TWEETS_DATA_SUCCESS='PUSH_TWEETS_DATA_SUCCESS';




 class App extends Component {
   componentDidMount(){
     this.props.fetchUsersData('http://77.120.108.119:9999/users/');
     this.props.fetchTweetsData('http://77.120.108.119:9999/tweets/')
  }
  render(){
    return (
     <>
          <Links/>
          <Logic/>
      </>
    );
  }
}

const mapActionsToProps = (dispatch)=>{
  return{
    fetchTweetsData : bindActionCreators (fetchTweetsData,dispatch),
      fetchUsersData: bindActionCreators(fetchUsersData,dispatch),
      fetchUsersDataSuccess: bindActionCreators( fetchUsersDataSuccess, dispatch )
  }
}

export default connect(null,mapActionsToProps)(App);
