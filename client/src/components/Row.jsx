import { useState, useEffect } from 'react';
import { Cell } from './Cell.jsx';

export const Row = ({ round, rowNumber, currentGuess, guesses, word }) => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    const guessLetters = guesses.length
      ? guesses[rowNumber - 1]?.split('')
      : null;
    const wordLetters = word.split('');
    const currentCells = [];
    if (round === rowNumber - 1) {
      for (let i = 0; i < 5; i++) {
        currentCells.push({
          letter: currentGuess[i] ? currentGuess[i] : null,
          color: '#777777',
        });
      }
      setCells(currentCells);
    } else if (round > rowNumber - 1) {
      for (let i = 0; i < 5; i++) {
        let cellInfo = { letter: guesses[rowNumber - 1][i], color: '#777777' };
        if (!wordLetters.includes(guessLetters[i])) {
          cellInfo.color = '#777777';
          currentCells.push(cellInfo);
        } else if (
          wordLetters.includes(guessLetters[i]) &&
          wordLetters[i] !== guessLetters[i]
        ) {
          cellInfo.color = '#FFFF00';
          currentCells.push(cellInfo);
          wordLetters.splice(
            wordLetters.indexOf(guesses[rowNumber - 1][i]),
            1,
            '*'
          );
        } else if (wordLetters[i] === guessLetters[i]) {
          cellInfo.color = '#00FF00';
          currentCells.push(cellInfo);
          wordLetters.splice(
            wordLetters.indexOf(guesses[rowNumber - 1][i]),
            1,
            '*'
          );
        }
      }
      setCells(currentCells);
    } else {
      for (let i = 0; i < 5; i++) {
        currentCells.push({ letter: null, color: '#777777' });
      }
      setCells(currentCells);
    }
  }, [currentGuess, round]);

  return (
    <div className="row">
      {cells.map(cell => (
        <Cell letter={cell.letter} color={cell.color} />
      ))}
    </div>
  );
};
