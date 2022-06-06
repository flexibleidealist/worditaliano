import { useState } from 'react';
export const Cell = ({ letter, color }) => {
  return (
    <div className="cell" style={{ backgroundColor: color }}>
      <h3>{letter}</h3>
    </div>
  );
};
