import React from 'react';
import {
    Link
  } from "react-router-dom";
  import './links.css'

export default ()=>{
    return(
        <div className='links'>
            <li>
                <Link to="/users" className='link'>Users</Link>
            </li>
            <li>
                <Link to="/add-user"  className='link'>Add user</Link>
            </li>
            <li>
                <Link to="/tweets" className='link'>Tweets</Link>
            </li>
            <li>
                <Link to="/add-tweet" className='link'>Add tweet</Link>
            </li>
        </div>
    )
}