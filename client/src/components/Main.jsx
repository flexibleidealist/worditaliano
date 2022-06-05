import { useState, useLayoutEffect } from 'react';
import { Board } from './Board.jsx';
import { Header } from './Header.jsx';

export const Main = ({ words }) => {
  const [word, setWord] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [round, setRound] = useState(0);

  const handleSubmit = e => {
    e.preventDefault();
    setRound(round + 1);
    const guessArray = guess.split('');
    const wordArray = word.split('');
    const letters = [];
    letters.length = 5;
    guessArray.forEach(letter => {
      if (wordArray.includes(letter)) {
      }
    });
  };

  const handleChange = e => {
    setGuess(e.target.value);
  };
  useLayoutEffect(() => {
    setWord(words[Math.floor(Math.random() * words.length)]);
  }, [words]);
  return (
    <div className="main">
      <Board guess={guessArray} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="guess">indovina:</label>
        <input type="text" value={guess} name={guess} onChange={handleChange} />
        <button type="submit">invio</button>
      </form>
    </div>
  );
};
