import { Row } from './Row.jsx';

export const Board = ({ guess }) => {
  const guesses = 6;
  const rows = [];
  for (let i = 0; i < guesses; i++) {
    rows.push(<Row key={`row${i}`} />);
  }
  return <div className="board">{rows}</div>;
};
