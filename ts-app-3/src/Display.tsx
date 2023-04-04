import * as React from 'react';

interface DisplayProps {
    num:number
}

const Display:React.FC<DisplayProps> = ({num}) => {
  return <div>{num}</div>
};

export default Display;
