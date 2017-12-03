import React from 'react';
import './WinPage.css'

const WinPage = (props) => (
  <div className='row justify-content-center win-page' id="WinPage" >
    <div >
      <h1 className="win-headline">Wow! You sure know your animals!</h1>
      <h2 className="win-sub">you should start a farm</h2>
      <button className="btn-lg btn-success win-button" onClick={props.click}>Try Again</button>
    </div>
  </div>
)

export default WinPage;
