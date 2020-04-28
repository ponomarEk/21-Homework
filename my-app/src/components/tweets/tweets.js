import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import RenderTweets from '../render-tweets/container'
import { fetchTweetsData } from '../../state/action'
import './tweets.css'

class Tweets extends Component{
    render(){
        let k = 0;
        const elements = this.props.res.map(curr=>{
            k ++;
            return (<RenderTweets key = {k} id = {k} {...curr} data = { this.props.data }/>)
        });
        
        return(
            <div className='value'>
                {elements}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    let arr = [];
    state.tweets.forEach( curr => arr.push(curr) );
    return { res: arr, data:state.data };
}

const mapActionsToProps = (dispatch)=>{
    return{
        fetchTweetsData: bindActionCreators(fetchTweetsData,dispatch)
    }
}

export default connect(mapStateToProps,mapActionsToProps)(Tweets);