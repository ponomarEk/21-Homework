import React, { Component } from "react";

import User from './user';
import Content from './content'
import Avatar from './avatar'



import "./container.css";

export default class Container extends Component{

    render(){
 
        return(
            <>
            <div className ="container">
                <Avatar {...this.props}/>
                <div className="f">
                    <div className = "a">
                        <User {...this.props}/>
                    </div>
                    <Content {...this.props}/>
                </div>
            </div>
           
         </>
        )
    }
    
}
