import React, { Component } from 'react';
import StartPage from './components/StartPage/StartPage'
import './App.css';
import GamePage from './components/GamePage/GamePage'
import availableAnimals from './resources/availableAnimals'
import WinPage from './components/WinPage/WinPage'

class App extends Component {
  state = {
    startDisplay: "block",
    gamePageDisplay: "none",
    animal: "cat",
    hideInstructions: true,
    transitionCount: 0,
    animalsArr: [],
    score: 0
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
    this.setAnimalsArr();
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
    //let opacity = document.querySelector('#Instructions').style.opacity;
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
    //let opacity = document.querySelector('#Instructions').style.opacity;
    let myinterval =   setInterval(() => {
      this.setState({transitionCount:transitionCount-= 0.1},
      this.changeOpacity(myinterval));
    }, 30);
    document.querySelector('#Instructions').style.zIndex = -10;
  }

  changeOpacity = (intervalName) => {
    let instructions = document.querySelector('#Instructions');
    instructions.style.opacity = this.state.transitionCount;
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

  setAnimalsArr = () => {
    let animalsArr = [];
    while(animalsArr.length < 6){
      let animalindex = Math.floor(Math.random()*availableAnimals.length);
      if (animalsArr.indexOf(availableAnimals[animalindex]) === -1) {
        animalsArr.push(availableAnimals[animalindex]);
      }
    }
    this.setState({ animalsArr });
    this.setState({animal: animalsArr[Math.floor(Math.random()*animalsArr.length)]})
  }

  imageClickHandler = (event) => {
    const {animal, score} = this.state;
    console.log('clicked');
    console.log(event.target.getAttribute('data-id'));
    if (event.target.getAttribute('data-id') === animal){
      let appScore = score;
      this.setState({score: appScore += 1});
      this.setAnimalsArr();
      this.setState({transitionCount: 0},this.showInstructions)
      if(score === 10){
        document.querySelector('#GamePage').style.display = 'none';
        document.querySelector('#WinPage').style.display = 'block';
      }
    }
  }

  winButtonHandler = () => {
    document.querySelector('#WinPage').style.display = 'none';
    window.location.reload();
  }

  render() {
    const { animalsArr } = this.state;

    return (
      <div className="App">

        <StartPage click={this.startButtonHandler} />
        <GamePage chosenAnimal={this.state.animal} animalsArr={animalsArr} click={this.imageClickHandler} />
        <WinPage click={this.winButtonHandler} />
      </div>
    );
  }
}

export default App;
