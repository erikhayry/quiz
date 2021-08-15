import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchAsJSON} from "./utils/fetch";

function App() {

  useEffect(() => {
    async function fetch(){
      const d = await fetchAsJSON('https://api.nobelprize.org/2.1/nobelPrizes?nobelPrizeYear=2000&yearTo=2020&limit=20&nobelPrizeCategory=pea')
      console.log(d)
    }

    fetch()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
