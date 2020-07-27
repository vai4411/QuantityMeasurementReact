import React, { useState } from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Quantity from './components/quantity';
import Type from './components/type';
import './styles/header.scss';
import Scale from './asserts/test/scale.png';
import Hot from './asserts/test/hot.png';
import Beaker from './asserts/test/beaker.png';
import Scale1 from './asserts/test/scale1.png';
import Hot1 from './asserts/test/hot1.png';
import Beaker1 from './asserts/test/beaker1.png';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HistoryDetails from './components/historyContent';

class App extends React.Component {

  render(){
    var Units = [{
      unit:'Length',
      icon:Scale1,
      subunits:['Kilometer','Meters','Centimeter','Millimeter','Micrometer','Mile','Foot','Inch']
    },
    {
      unit:'Tempreture',
      icon:Hot1,
      subunits:['Celsius','Fahrenheit','Kelvin']},
      {
        unit:'Volume',
        icon:Beaker1,
        subunits:['Litres','Millilitres','Gallons']
      }];

  return (
    <div className='main-window'>
      <Router>
      <Header />
      <Welcome msg='Welcome To Quantity Measurement' />
      <Switch>
      <Route path='/' exact render={() =>
      <div >
      <div className='choose-type'>
        <Type msg='CHOOSE TYPE'/>
        </div>
        <div>
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
