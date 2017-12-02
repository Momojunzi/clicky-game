import React from 'react';
import './StartPage.css';

const StartPage = (props) => (
  <div className="container" id="StartPage">
    <div className="row justify-content-center">
      <div className="col-10">
        <h1 className="game-title">CLICKY<br/>GAME!</h1>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-10">
        <h3 className="start-instructions">Click the button!</h3>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-10">
        <button className="btn-lg btn-success start-button" onClick={props.click}>This is a button!</button>
      </div>
    </div>
  </div>
);

export default StartPage;
