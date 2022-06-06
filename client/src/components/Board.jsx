import { Row } from './Row.jsx';

export const Board = ({ guesses, currentGuess, round }) => {
  const rounds = 6;
  const rows = [];
  for (let i = 0; i < rounds; i++) {
    rows.push(
      <Row
        key={i + 1}
        id={`row${i + 1}`}
        guesses={guesses}
        currentGuess={currentGuess}
        round={round}
        rowNumber={i + 1}
      />
    );
  }

  return <div className="board">{rows}</div>;
};
