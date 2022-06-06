import { Row } from './Row.jsx';

export const Board = ({ guesses, currentGuess, round }) => {
  const rounds = 6;
  const rows = [];
  for (let i = 0; i < rounds; i++) {
    rows.push(
      <Row
        key={i}
        id={`row${i}`}
        guesses={guesses}
        currentGuess={currentGuess}
        round={round}
        rowNumber={i}
      />
    );
  }

  return <div className="board">{rows}</div>;
};
