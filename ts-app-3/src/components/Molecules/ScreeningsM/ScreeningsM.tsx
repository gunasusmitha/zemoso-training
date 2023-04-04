import * as React from 'react';
import { Screenings } from '../../Atoms/Screenings/Screenings';
import { Text } from '../../Atoms/Text/Text';

const ScreeningsM: React.FC = () => {
  return (
    <div style={
        {paddingLeft:'15px',display:'flex',alignContent:'space-between',flexDirection:'row',gap:'15px',paddingBottom:'100px',borderBottom:'1px solid gray'}
    }>
        <Screenings />
        <Text text="Screenings" size="small" />
    </div>
  );
};

export default ScreeningsM;
