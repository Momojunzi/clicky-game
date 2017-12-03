import React from 'react';
import Instructions from '../Instructions/Instructions';
import Animals from '../Animals/Animals';
import './GamePage.css';

const GamePage = (props) => (
  <div className="container gamepage" id="GamePage">
      <Instructions chosenAnimal={props.chosenAnimal}/>
      <Animals animalsArr={props.animalsArr} click={props.click}/>
  </div>
)

export default GamePage;
