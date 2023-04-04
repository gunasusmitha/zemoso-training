import * as React from 'react';
import { Avatar } from '../../Atoms/Avatar/Avatar';
import { Logout } from '../../Atoms/Logout/Logout';
import { Text } from '../../Atoms/Text/Text';


export const AvatarM: React.FC = () => {
  return (
    <div style={
        {paddingLeft:'10px',display:'flex',alignContent:'space-between',flexDirection:'row',gap:'15px',justifyItems:'center'}
    }>
        <Avatar />
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <Text text="John Rodriguez" size="small" color='light' />
            <Text text="John.Co" size="small" color='light'/>
        </div>
        <Logout />
    </div>
  );
};

 