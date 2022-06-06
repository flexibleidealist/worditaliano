import { useState } from 'react';

export const Footer = ({
  words,
  setWord,
  currentGuess,
  setCurrentGuess,
  checkGuess,
  setGuesses,
  round,
  setRound,
}) => {
  const startGame = () => {
    setRound(0);
    setGuesses([]);
    setWord(words[Math.floor(Math.random() * words.length)]);
    setCurrentGuess('');
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (currentGuess.length === 5) checkGuess();
    setRound(round + 1);
  };
  const handleChange = e => {
    setCurrentGuess(e.target.value);
  };
  return (
    <div>
      <button onClick={startGame}>start</button>
      <form className="input-form" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="currentGuess"></label>
        <input
          type="text"
          name={currentGuess}
          value={currentGuess}
          onChange={e => handleChange(e)}
        />
        <button type="submit">invio</button>
      </form>
    </div>
  );
};
