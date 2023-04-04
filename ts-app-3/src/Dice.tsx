import * as React from 'react';

interface DiceProps {
    cbf:CallableFunction
}

const Dice:React.FC<DiceProps> = ({cbf}) => {
  return (
    <div>
      <button onClick={()=>cbf(Math.floor(Math.random()*6)+1)}>
        RollDice
      </button>
    </div>
  );
}

export default Dice;
