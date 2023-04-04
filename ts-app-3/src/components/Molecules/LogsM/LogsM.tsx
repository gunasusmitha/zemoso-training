import * as React from 'react'
import { Logs } from '../../Atoms/Logs/Logs';
import { Text } from '../../Atoms/Text/Text';

const LogsM: React.FC = () => {
  return (
    <div style={
        {paddingLeft:'15px',display:'flex',alignContent:'space-between',flexDirection:'row',gap:'15px'}
    }>
        <Logs />
        <Text text="Logs" size="small" />
    </div>
  );
}
export default LogsM;
