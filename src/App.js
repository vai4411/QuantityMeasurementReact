import React from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Quantity from './components/quantity';
import Type from './components/type';
import Convertion from './components/conversion';
import './styles/header.scss';
import Scale from './asserts/scale-1.svg';
import Hot from './asserts/hot.svg';
import Beaker from './asserts/beaker-1.svg';

function App() {
  return (
    <div>
      <Header name='Quanment' link='History'/>
      <Welcome msg='Welcome To Quantity Measurement' />
      <div className='choose-type'>
      <Type msg='CHOOSE TYPE'/>
      </div>
      <div className='quantity-button'>
      <Quantity icon={Scale} desc='Length'/>
      <Quantity icon={Hot} desc='Temperature'/>
      <Quantity icon={Beaker} desc='Volume'/>
      </div>
      <div className='quantity-button'>
      <Convertion id='FROM' />
      <Convertion id='TO'/>
      </div>
    </div>
  );
}

export default App;
