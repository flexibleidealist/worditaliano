import { useState } from 'react';
export const Cell = () => {
  const [color, setColor] = useState('#777777');

  return <div className="cell" style={{ backgroundColor: color }}></div>;
};
