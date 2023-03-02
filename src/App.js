import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [quote, setQuote]= useState('')

  const getQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(result=>setQuote(result.quote))
    .catch(console.error)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {quote && <p>{quote}</p>}
       <button onClick={getQuote}>What does Kanye say</button>
      </header>
    </div>
  );
}

export default App;
