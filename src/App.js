import React, { Component } from 'react';
import StartPage from './components/StartPage/StartPage'
import './App.css';
import GamePage from './components/GamePage/GamePage'

class App extends Component {
  state = {
    startDisplay: "block",
    gamePageDisplay: "none",
    animal: "cat",
    hideInstructions: true,
    transitionCount: 0
  }

  startButtonHandler = () => {
    console.log(this.state.startDisplay);
    this.setState(
      {
        startDisplay:"none",
        gamePageDisplay: "block",
      },
      this.startDisplayHandler
    );
  }

  startDisplayHandler = () => {
    document.querySelector("#StartPage").style.display = this.state.startDisplay;
    document.querySelector("#GamePage").style.display = this.state.gamePageDisplay;
    this.instructionsAnimations();
  }

  instructionsAnimations = () => {
    if(this.state.hideInstructions){
      this.showInstructions();
    }
  }

  showInstructions = () => {
    let transitionCount = this.state.transitionCount;
    let opacity = document.querySelector('#Instructions').style.opacity;
    document.querySelector('#Instructions').style.zIndex = 10;
    let myinterval = setInterval(() => {
      this.setState({transitionCount:transitionCount+= 0.1},
      this.changeOpacity(myinterval));
    }, 30);
    setTimeout(() => {
      this.hideInstructions();
    }, 2000);
  }

  hideInstructions = () => {
    let transitionCount = this.state.transitionCount;
    let opacity = document.querySelector('#Instructions').style.opacity;
    let myinterval =   setInterval(() => {
      this.setState({transitionCount:transitionCount-= 0.1},
      this.changeOpacity(myinterval));
    }, 30);
    document.querySelector('#Instructions').style.zIndex = -10;
  }

  changeOpacity = (intervalName) => {
    let instructions = document.querySelector('#Instructions');
    instructions.style.opacity = this.state.transitionCount;
    console.log(instructions.style.opacity);
    if(this.state.transitionCount >1 && this.state.hideInstructions){
      clearInterval(intervalName);
      this.setState({hideInstructions: false});
      console.log(this.state.hideInstructions);
    }
    if(this.state.transitionCount < 0){
      clearInterval(intervalName);
      this.setState({hideInstructions: true});
      console.log(this.state.hideInstructions);
    }
  }

  render() {
    return (
      <div className="App">
        <StartPage click={this.startButtonHandler} />
        <GamePage chosenAnimal={this.state.animal} />
      </div>
    );
  }
}

export default App;
