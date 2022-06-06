import { Row } from './Row.jsx';

export const Board = ({}) => {
  const guesses = 6;
  const rows = [];
  // for (let i = 0; i < guesses; i++) {
  //   rows.push(<Row guess={guess} key={`row${i}`} />);
  // }
  return <div className="board">{rows}</div>;
};
