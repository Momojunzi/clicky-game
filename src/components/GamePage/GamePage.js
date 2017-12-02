import React from 'react';
import Instructions from '../Instructions/Instructions';
import './GamePage.css';

const GamePage = (props) => (
  <div className="container gamepage" id="GamePage">
      <h1>gamepage</h1>
      <Instructions chosenAnimal={props.chosenAnimal}/>
  </div>
)

export default GamePage;
