import * as React from 'react';
import Dice from './Dice';
import Display from './Display';

const Parent:React.FC = () => {
  const [n,setN]=React.useState(0);
  return (
    <div>
      <Display num={n}/>
      <Dice cbf={setN}/>
    </div>
  );
}

export default Parent;