export const Modal = ({ startGame }) => {
  return (
    <div className="modal">
      <h1>ottimo lavoro!</h1>
      <button onClick={startGame}>play again</button>
    </div>
  );
};
