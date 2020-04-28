import React, { Component } from 'react';

import "./avatar.css"

class Avatar extends Component{
    
    render(){

        const { userId , data } = this.props;
        let obj =  data.filter((curr) => {
            if(userId===curr.id){
                return curr;
            }
        });

        return(
            <img src = {obj[0].avatar} alt = '' id = "author"/>
        )
    }
}
export default Avatar;