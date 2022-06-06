import { Cell } from './Cell.jsx';

export const Row = ({ round, rowNumber, currentGuess, guesses }) => {
  const cells = [];
  for (let i = 0; i < 5; i++) {
    if (round === 0) cells.push({ letter: null });
    else if (round > 0 && round - 1 === rowNumber)
      cells.push({ letter: currentGuess[i] });
  }

  return (
    <div className="row">
      {cells.map(cell => (
        <Cell letter={cell.letter} />
      ))}
    </div>
  );
};
