import { useState, useLayoutEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Board } from './components/Board.jsx';
import { Footer } from './components/Footer.jsx';
import { Modal } from './components/Modal.jsx';
import raw from './wordlist.txt';
import './App.css';

function App() {
  const [words, setWords] = useState([]);
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [round, setRound] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const startGame = () => {
    setRound(0);
    setShowModal(false);
    setGuesses([]);
    setWord(words[Math.floor(Math.random() * words.length)]);
    setCurrentGuess('');
  };
  const checkGuess = () => {
    if (!words.includes(currentGuess)) {
      alert('word not found');
      return;
    } else {
      setGuesses([...guesses, currentGuess]);
    }
    setCurrentGuess('');
    if (guesses.includes(word)) setShowModal(true);
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
      {showModal && <Modal startGame={startGame} />}
      <Board
        guesses={guesses}
        currentGuess={currentGuess}
        round={round}
        word={word}
      />
      <Footer
        words={words}
        setWord={setWord}
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        checkGuess={checkGuess}
        setGuesses={setGuesses}
        round={round}
        setRound={setRound}
        startGame={startGame}
      />
    </div>
  );
}

export default App;
