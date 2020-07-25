import React, { useState } from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Quantity from './components/quantity';
import Type from './components/type';
import './styles/header.scss';
import Scale from './asserts/scale-1.svg';
import Hot from './asserts/hot.svg';
import Beaker from './asserts/beaker-1.svg';

class App extends React.Component {

  render(){
    var Units = [{
      unit:'Length',
      icon: Scale,
      subunits:['cm','m']
    },
    {
      unit:'Tempreture',
      icon: Hot,
      subunits:['c','f']},
      {
        unit:'Volume',
        icon: Beaker,
        subunits:['kg','gram']
      }];
  return (
    <div>
      <Header name='Quanment' link='History'/>
      <Welcome msg='Welcome To Quantity Measurement' />
      <div className='choose-type'>
      <Type msg='CHOOSE TYPE'/>
      </div>
      <div className='quantity-button'>
        <Quantity units={Units} />
      </div>
      <div className='quantity-button'>
      </div>
    </div>
  );
  }
}

export default App;
