import { useState, useLayoutEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Board } from './components/Board.jsx';
import { Footer } from './components/Footer.jsx';
import raw from './wordlist.txt';
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [round, setRound] = useState(0);
  const checkGuess = () => {
    if (!words.includes(currentGuess)) {
      alert('word not found');
      return;
    } else {
      setGuesses([...guesses, currentGuess]);
    }

    const guessLetters = currentGuess.split('');
    const wordLetters = word.split('');
    for (let i = 0; i < guessLetters.length; i++) {
      if (!wordLetters.includes(guessLetters[i])) {
        console.log(`gray at ${i}`);
      } else if (
        wordLetters.includes(currentGuess[i]) &&
        word[i] !== currentGuess[i]
      ) {
        wordLetters.splice(wordLetters.indexOf(currentGuess[i]), 1, '*');
        console.log(`yellow at ${i}`);
      } else if (word[i] === currentGuess[i]) {
        wordLetters.splice(wordLetters.indexOf(currentGuess[i]), 1, '*');
        console.log(`green at ${i}`);
      }
    }
  };
  useLayoutEffect(() => {
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
      <Board guesses={guesses} currentGuess={currentGuess} round={round} />
      <Footer
        words={words}
        setWord={setWord}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        checkGuess={checkGuess}
        setGuesses={setGuesses}
        round={round}
        setRound={setRound}
      />
    </div>
  );
}

export default App;
