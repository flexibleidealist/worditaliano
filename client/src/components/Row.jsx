import { useState, useEffect } from 'react';
import { Cell } from './Cell.jsx';

export const Row = ({ round, rowNumber, currentGuess, guesses }) => {
  const [cells, setCells] = useState([]);
  useEffect(() => {
    const currentCells = [];
    if (round === rowNumber - 1) {
      for (let i = 0; i < 5; i++) {
        currentCells.push({ letter: currentGuess[i] ? currentGuess[i] : null });
      }
      setCells(currentCells);
    } else if (round > rowNumber - 1) {
      for (let i = 0; i < 5; i++) {
        currentCells.push({ letter: guesses[rowNumber - 1][i] });
      }
      setCells(currentCells);
    } else {
      for (let i = 0; i < 5; i++) {
        currentCells.push({ letter: null });
      }
      setCells(currentCells);
    }
  }, [currentGuess]);

  return (
    <div className="row">
      {cells.map(cell => (
        <Cell letter={cell.letter} />
      ))}
    </div>
  );
};
