import React, {Component} from 'react';
import './App.css';
import {Link, withRouter} from 'react-router-dom'




function Header() {
  
    const ulstyle={
     
        display: 'inline-block',
        position: 'relative',
        right: '-150px'
        
        };
       const navStyle2={
         width:'100%',
        alignItems:'right',
        listStyle: 'none',
        textDecoration:'none',
        position: 'relative',
        right: '-230px'
    
      
      };

      const navStyle3={
        width:'100%',
       alignItems:'left',
       listStyle: 'none',
       textDecoration:'none',
       position: 'absolut'
      
   
     
     };

     
    

       return (  
        <div>
    <h1>Our Sections</h1> 

    

  

    <ul style={ulstyle}>
  
         <li  style={navStyle2}>Home</li>
         
         <Link style={navStyle2}  to="/">
         <li  ><input type="radio" value="section1" id="section1" checked={window.location.pathname=="/"} /> </li>
         </Link>
         </ul >

         <ul style={ulstyle}>
         <li style={navStyle3} >Section 2</li>
        
         <Link style={navStyle3}  to="/section2" replace  >
         
         <li  ><input type="radio" value="section2" id="section2"  checked={window.location.pathname=="/section2"} /> </li>
         
         </Link>
    </ul>

    </div>
    
    );
   }
   
export default Header;

