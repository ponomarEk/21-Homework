import React, { Component } from 'react';
import './add-users.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { pushUsersDataSuccess } from '../../state/action'



class AddUser extends Component{

    state={
        name: '',
        userName: '',
        avatar: ''
    }

    onChangeName=(e)=>{
        this.setState({ name: e.target.value })
    }
    onChangeUserName=(e)=>{
        
        this.setState({ userName: e.target.value })
    }
    onChangeAvatar=(e)=>{
        this.setState({ avatar: e.target.value })
    }
    
    render(){
        const { pushUsersDataSuccess } = this.props;

                const dispatchData=()=>{
                    if(this.state.name&&this.state.avatar&&this.state.userName){

                        let nick = '@'+this.state.userName;
                                            
                        const requestOptions = {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                name:this.state.name,
                                username:nick,
                                avatar:this.state.avatar
                            })
                        };
                        fetch('http://77.120.108.119:9999/users/', requestOptions).then(function(res){ console.log(res) });
                        pushUsersDataSuccess({
                            name:this.state.name,
                            username:nick,
                            avatar:this.state.avatar
                        })

                        this.setState({
                            name:'',
                            userName:'',
                            avatar: ''
                        })
                    }else{
                        alert('Some fields are empty!')
                    }
                }
        return(
                 <div className='change_data'>
                    <label>
                        <input
                            value={this.state.name}
                            onChange={this.onChangeName}
                            type='text' 
                            placeholder='Name'
                        />
                        Name
                    </label>
                    
                    <div className='t'>
                        <label>
                            <button className='ghost'>@</button>
                            <input
                                value={this.state.userName}
                                onChange={this.onChangeUserName}
                                type='text' 
                                placeholder='User name'
                            />
                            User name
                        </label> 
                    </div>
                       
                  
                    <label>
                        <input
                            value={this.state.avatar}
                            onChange={this.onChangeAvatar}
                            type='text' 
                            placeholder='Avatar (URL)'
                        />
                        Name
                    </label>
                    
                    <button onClick={dispatchData} className='dispatch_data'> Push data</button>

                </div>
        )
    }
   
}

const mapActionsToProps = (dispatch)=>{
    return{
        pushUsersDataSuccess:bindActionCreators(pushUsersDataSuccess,dispatch)
    }
}

export default connect(null,mapActionsToProps)(AddUser);