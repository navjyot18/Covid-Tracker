import React, {Fragment} from 'react';
import './App.css';
import {CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
//import Search from './components/newMap/Search';
import Body from './components/Body/Body';
import CheckHealth from './components/CheckHealth/CheckHealth';
import Graph from './Graph';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';


function App() {
  return (
    <div>
      <Router> 
        <Fragment>
          <Header/>
          <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Body />} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/Covid-Analytics" element={<Graph />} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          {/*<Route path="/Covid-Analytics" component={Graph} />*/}


            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          
        </Routes>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;

/*
   <Router>
      <div>
      <CssBaseline />
        <Header/>
        <Body/>
      </div>
  </Router>
*/