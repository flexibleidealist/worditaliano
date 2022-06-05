import { Cell } from './Cell.jsx';

export const EmptyRow = () => {
  let wordLength = 5;
  const cells = [];
  for (let i = 0; i < wordLength; i++) {
    cells.push(<Cell key={`empty ${i}`} />);
  }
  return <div>{cells}</div>;
};
