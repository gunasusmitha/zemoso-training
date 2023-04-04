import * as React from 'react';
import AccountM from '../Molecules/AccountM/AccountM';
import AdverseActionsM from '../Molecules/AdverseActionsM/AdverseActionsM';
import AnalyticsM from '../Molecules/AnalyticsM/AnalyticsM';
import { AvatarM } from '../Molecules/AvatarM/AvatarM';
import CandidatesM from '../Molecules/CandidatesM/CandidatesM';
import { HomeM } from '../Molecules/HomeM/HomeM';
import LogsM from '../Molecules/LogsM/LogsM';
import ScreeningsM from '../Molecules/ScreeningsM/ScreeningsM';

const Organism : React.FC = () => {
  return (
    <div style={{boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px',paddingLeft:'15px',border:'1px groove gray',height:'580px',width:'250px',margin:'25px'}}>
        <h3 style={{display:'flex',alignContent:'start'}}>RECRUIT</h3>
        <HomeM />
        <CandidatesM />
        <AdverseActionsM />
        <LogsM />
        <AnalyticsM />
        <AccountM />
        <ScreeningsM />
        <AvatarM />
    </div>
  );
};

export default Organism;
