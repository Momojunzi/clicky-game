import React from 'react';
import './Instructions.css';

const Instructions = (props) => (
  <div className="row justify-content-center col-12 instructions" id="Instructions">
    <div className="jumbotron ">
      <div className="row justify-content-center">
        <div className="col-8">
          <h3>Click the image of the</h3>
          <h1 className="animal-name">{props.chosenAnimal}</h1>
        </div>
      </div>
    </div>
  </div>
)

export default Instructions;
