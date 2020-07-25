import React, { useState } from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Quantity from './components/quantity';
import Type from './components/type';
import './styles/header.scss';
import Scale from './asserts/scale-1.svg';
import Hot from './asserts/hot.svg';
import Beaker from './asserts/beaker-1.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import History from './components/history';

class App extends React.Component {

  render(){
    var Units = [{
      unit:'Length',
      icon: Scale,
      subunits:['Kilometer','Meters','Centimeter','Millimeter','Micrometer','Mile','Foot','Inch']
    },
    {
      unit:'Tempreture',
      icon: Hot,
      subunits:['Celsius','Fahrenheit','Kelvin']},
      {
        unit:'Volume',
        icon: Beaker,
        subunits:['Litres','Millilitres','Gallons']
      }];
  return (
    <div>
      <Router>
      <Header name='Quanment'/>
      <History />
      <Welcome msg='Welcome To Quantity Measurement' />
      <div className='choose-type'>
      <Type msg='CHOOSE TYPE'/>
      </div>
      <div className='quantity-button'>
        <Quantity units={Units} />
      </div>
      </Router>
    </div>
  );
  }
}

export default App;
