import React, {Component} from 'react';
import './App.css';

function Home() {
   const navStyle={
      width:'2%',
      float: 'left',
      textDecoration:'none',
      listStyle: 'none',
      left: '7.5cm',
      position:'relative'  
    };
    return (   
    <div className="navClass"> 
     <ul className="Home">
            <li style={{listStyle: "none"}}><h1>Slide 1</h1></li>
            <li style={{listStyle: "none"}}><h3>Text for slide 1</h3></li>

            <li style={navStyle} ><input type="radio" checked={true} /> </li>
            <li  style={navStyle}><input type="radio"  /> </li>
            <li  style={navStyle}><input type="radio"  /> </li>
       </ul>
    
    </div>
    );
   }


export default Home;