import React, { Component } from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';
import Home from './Components/inside/Home';
import Navbar from './Components/Navbar';
import SimpleForm from './componentsChat/SimpleForm';
import './App.css'
import Calculators from './Components/inside/Calculators';
import Contact from './Components/inside/Contact';
import Services from './Components/inside/Services';
import Btns from './Components/inside/btns';


function App() {
  return (
    <div >
< SimpleForm/>
      <>
      <Router>
        <Navbar/>
        <Switch>
          
        {/* <Route path ='/Calculators' exact component = {Calculators} /> */}
        <Route path ='/contact' exact component = {Contact} />
        <Route path ='/services' exact component = {Services} />
        <Route path ='/' exact component = {Home} />
     
        </Switch>
      </Router>
      </>
    </div>

 
  );
}

export default App;
