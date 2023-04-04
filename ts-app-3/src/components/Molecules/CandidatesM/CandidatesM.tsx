import * as React from 'react';
import { Candidates } from '../../Atoms/Candidates/Candidates';
import { Text } from '../../Atoms/Text/Text';


const CandidatesM : React.FC = () => {
  return (
    <div style={
        {paddingLeft:'15px',display:'flex',alignContent:'space-between',flexDirection:'row',gap:'15px'}
    }>
        <Candidates />
        <Text text="Candidates" size="small" />
    </div>
  );
};

export default CandidatesM;
