import React, { Component } from 'react';

import "./user.css"

const VERIFIED_ICON = "https://upload.wikimedia.org/wikipedia/commons/e/e4/Twitter_Verified_Badge.svg";


class User extends Component{
  
    render(){
        const { userId } = this.props;
        console.log(userId);
        console.log(this.props.data)
        let obj =  this.props.data.filter((curr) => {
            if(curr.id===userId){
                return curr;
            }
        });
        console.log(obj)
        return(
            <div className = "info"> 
                
                    <ul className = "user__elements">
                        <li>
                            <span id = "name">
                                {obj[0].name}
                            </span>
                            <img src = {VERIFIED_ICON} alt = '' id = "verify" />
                        </li>
                        <li>
                            <span>
                                {obj[0].userName}
                            </span>
                        </li>
                    </ul>
                </div>
            
        )
    }
}

export default User;