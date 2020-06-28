import React, {Component} from 'react';
import './App.css';
import { AiOutlineSearch } from "react-icons/ai";
import {Link, withRouter} from 'react-router-dom'
function Nav() {

  const navStyle={
    color:'white',
    textDecoration:'none'

  };
    return (   
    <nav className="navClass"> 
   
    
        <ul className="nav-links">
            <Link style={navStyle} to="/">
            <li>Home</li>
            </Link>
            <Link style={navStyle} to="/page2">
            <li>Page 2</li>
            </Link>
            <li > <input  type="text" /></li>
            <li><button type="submit"></button></li>
            <li><AiOutlineSearch /> </li>
       </ul>
      
    </nav>
    );
   }

 
export default Nav;
