import * as React from 'react';
import { Analytics } from '../../Atoms/Analytics/Analytics';
import { Text } from '../../Atoms/Text/Text';

const AnalyticsM: React.FC = () => {
  return (
    <div style={
        {paddingLeft:'15px',display:'flex',alignContent:'space-between',flexDirection:'row',gap:'15px'}
    }>
        <Analytics />
        <Text text="Analytics" size="small" />
    </div>
  );
};

export default AnalyticsM;
