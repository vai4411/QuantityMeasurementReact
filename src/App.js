import React from 'react';
import Header from './components/header';
import Welcome from './components/welcome';
import Quantity from './components/quantity';
import './styles/header.scss';
import Scale from './asserts/scale-1.svg';
import Hot from './asserts/hot.svg';
import Beaker from './asserts/beaker-1.svg';

function App() {
  return (
    <div>
      <Header name='Quanment' link='History'/>
      <Welcome msg='Welcome To Quantity Measurement' />
      <div className='quantity-button'>
      <Quantity icon={Scale}/>
      <Quantity icon={Hot}/>
      <Quantity icon={Beaker}/>
      </div>
    </div>
  );
}

export default App;
