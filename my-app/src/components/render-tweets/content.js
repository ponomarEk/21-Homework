import React, { Component } from 'react';

import "./content.css";


class Content extends Component{
    render(){
        const{ content , image } = this.props;
        return(
            <div className="content">
                <p className="inner__text">
                    { content }
                </p>
                <img src = { image } alt = '' id="content__photo"/>
            </div>
        )
    }
}

export default Content;