import { useState, useEffect } from 'react';
import { Main } from './components/Main.jsx';
import { Header } from './components/Header.jsx';
import raw from './wordlist.txt';
import './App.css';

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    fetch(raw)
      .then(res => res.text())
      .then(text =>
        setWords(
          text
            .split(/\n/)
            .filter(word => word.length === 5 && !word.includes(' '))
        )
      );
  }, []);
  return (
    <div className="app">
      <Header />
      <Main words={words} />
    </div>
  );
}

export default App;
