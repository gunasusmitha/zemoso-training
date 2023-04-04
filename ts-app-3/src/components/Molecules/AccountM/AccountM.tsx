import * as React from 'react';
import { Account } from '../../Atoms/Account/Account';
import { Text } from '../../Atoms/Text/Text';


const AccountM: React.FC = () => {
  return (
    <div style={
        {paddingLeft:'15px',display:'flex',alignContent:'space-between',flexDirection:'row',gap:'15px'}
    }>
        <Account />
        <Text text="Account" size="small" />
    </div>
  );
};

export default AccountM;
