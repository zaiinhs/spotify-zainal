import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const SPOTIFY_CLIENT = process.env.REACT_APP_SPOTIFY_CLIENT_ID; 
  // console.log(SPOTIFY_CLIENT)

  const showId = () => {
    alert(`ID nya Adalah : ${SPOTIFY_CLIENT}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Homework Generasi GIGIH 2.0
        </p>
        <button className='button-login' onClick={showId}>LOGIN SPOTIFY</button>
      </header>
    </div>
  );
}

export default App;
