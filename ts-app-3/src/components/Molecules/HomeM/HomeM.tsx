import * as React from 'react';
import { Home } from '../../Atoms/Home/Home';
import { Text } from '../../Atoms/Text/Text';

export const HomeM = () => {
  return (
    <div style={
        {paddingLeft:'15px',display:'flex',alignContent:'space-between',flexDirection:'row',gap:'15px'}
    }>
        <Home />
        <Text text="Home" size="small" />
    </div>
  );
}

