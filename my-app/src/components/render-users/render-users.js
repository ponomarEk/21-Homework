import React from 'react';
import './render-users.css'

export default function Render(props){
    const{ name, username, avatar } = props; 
    return(
        <div className = 'users'>
            <img alt = '' src = {avatar} id = 'author'/>
            <span className = 'name' > {name}</span>
            <span className = 'user-name' >{username}</span>           
        </div>
    )
}