import React, {Component, Fragment } from 'react';
import './App.css';
import Nav from './Nav';
import Home from './Home';
import { render } from 'react-dom';
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import Section2 from './Section2';
import myForm from './myForm';
function App() {
  return  (
  <Router>
    
        <div className="App"> 
        <Nav />
        <Home />
        <Header />
        <Switch>
        <Route path="/" exact  component={HomePage} />
  <Route path="/section2"  component={Contact}  />
                                              
                                         
           </Switch>
        </div>
         </Router>
        );
   }

   
   const Contact = () => (
    <Fragment>
      <h1>Contact</h1>
      <myForm />
    </Fragment>
    );
  

   const HomePage = ()=>(
     <div style={{display:'inline-table',width:'50%', alignItems:'center'}} >
          
       
       <Gallery photos={photos} 
       direction={"column"}
       columns= {3}/>
   
       
     </div>
   );

export default App;
