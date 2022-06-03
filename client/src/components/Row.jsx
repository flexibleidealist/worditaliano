import { Cell } from './Cell.jsx';

export const Row = () => {
  let wordLength = 5;
  const cells = [];
  for (let i = 0; i < wordLength; i++) {
    cells.push(<Cell key={i} />);
  }
  return <div className="row">{cells}</div>;
};
