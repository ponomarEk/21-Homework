
import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {  pushTweetsDataSuccess} from '../../state/action';
import axios from 'axios';



class AddTweet extends Component{

    state={
        userId: '',
        content: '',
        image: ''
    }
    
    onChangeContent=(e)=>{
        this.setState({ content: e.target.value })
    }
    onChangeImage=(e)=>{
        
        this.setState({ image: e.target.value })
    }
    onChangeId=(e)=>{
        
        this.setState({ userId: e.target.value })
    }
    render(){
        const { pushTweetsDataSuccess  } = this.props;
       
    
                const dispatchData=()=>{
                    if(this.state.content&&this.state.userId&&this.state.image
                        &&
                        this.props.data.some(curr => curr.id === +this.state.userId )){

                      
                        axios({
                            method : 'post',
                            url: 'https://77.120.108.119:9999/tweets/',
                            data:{
                                userId: parseInt(this.state.userId),
                                content:this.state.content,
                                image : this.state.image
                            }
                    
                    })
                            .then(function (data) {  
                              console.log('Request succeeded with JSON response', data);  
                            })  
                            .catch(function (error) {  
                              console.log('Request failed', error);  
                            })
                        
                        pushTweetsDataSuccess({
                            userId: parseInt(this.state.userId),
                                content:this.state.content,
                                image : this.state.image
                        })                        
    
                        this.setState({
                            content:'',
                            userId:'',
                            image: ''
                        })
                    }else{
                        alert('Some fields are empty or not found this user!')
                    }
                }
        return(
                 <div className='change_data'>

                    <label>
                        <input
                            value={this.state.userId}
                            onChange={this.onChangeId}
                            type='text' 
                            placeholder='Id'
                        />
                        Id
                    </label>

                    <label>
                        <input
                            value={this.state.content}
                            onChange={this.onChangeContent}
                            type='text' 
                            placeholder='Content'
                        />
                        Content
                    </label>
                    
                    <label>
                        <input
                            value={this.state.image}
                            onChange={this.onChangeImage}
                            type='text' 
                            placeholder='Image'
                        />
                        Image
                    </label> 
                    
                    <button onClick={dispatchData} className='dispatch_data'> Push data</button>
    
                </div>
        )
    }
}

const mapActionsToProps = (dispatch)=>{
    return{
        pushTweetsDataSuccess: bindActionCreators(pushTweetsDataSuccess,dispatch)
    }
}
const mapStateToProps = (state)=>{
    let arr = [];
    state.tweets.forEach( curr => arr.push(curr) );
    return { res: arr, data:state.data };
}

export default connect(mapStateToProps,mapActionsToProps)(AddTweet);