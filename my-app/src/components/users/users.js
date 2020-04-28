import React, { Component } from 'react';
import { connect } from 'react-redux'

import RenderUsers from '../render-users/render-users'

class Users extends Component{
   
    render(){
        let k = 0;
        const elements = this.props.res.map(curr=>{
            k ++;
            return (<RenderUsers key = {k} id = {k} {...curr} />)
        });
        
        return(
            <div>
                {elements}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    let arr = [];
    state.data.forEach( curr => arr.push(curr) );
     return { res: arr };
}



export default connect(mapStateToProps)(Users);