import React from 'react';
import Header from './components/header.jsx';
import Welcome from './components/welcome';
import './styles/header.scss';

function App() {
  return (
    <div>
      <Header name='Quanment' link='History'/>
      <Welcome msg='Welcome To Quantity Measurement' />
    </div>
  );
}

export default App;
