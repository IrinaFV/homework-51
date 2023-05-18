import React from "react";

interface IGameProps {
  number: number;
}

const Game:React.FC<IGameProps> = props => {
  return(
    <div className="game">
      <span>{props.number}</span>
    </div>
  );
};

export default Game;