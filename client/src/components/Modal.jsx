export const Modal = ({ startGame, message }) => {
  return (
    <div className="modal">
      <h1>{message}</h1>
      {message === 'ottimo lavoro' ? (
        <button onClick={startGame}>play again</button>
      ) : (
        <button>back</button>
      )}
    </div>
  );
};
