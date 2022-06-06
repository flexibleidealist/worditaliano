import { useState } from 'react';
export const Cell = ({ letter }) => {
  const [color, setColor] = useState('#777777');

  return (
    <div className="cell" style={{ backgroundColor: color }}>
      <h3>{letter}</h3>
    </div>
  );
};
