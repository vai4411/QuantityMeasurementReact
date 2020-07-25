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
import HistoryDetails from './components/historyContent';

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
      <Header />
      <Welcome msg='Welcome To Quantity Measurement' />
      <Switch>
      <Route path='/' exact render={() =>
      <div>
      <div className='choose-type'>
        <Type msg='CHOOSE TYPE'/>
        </div>
        <div className='quantity-button'>
          <Quantity units={Units} />
        </div>
      </div>}/>
      <Route path='/history' exact component={HistoryDetails} />
      </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
