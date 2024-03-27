import React, { useEffect, useState } from 'react';
import '../styles/Calculator.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Operations = () => {
    const [teamMembers, setTeamMembers] = useState('');
    const [networkSize, setNetworkSize] = useState('');
    const [signalsPerContact, setSignalsPerContact] = useState('');
    const [legitimateSignals, setLegitimateSignals] = useState(10);
    const [uniqueSignals, setUniqueSignals] = useState(20);
    const [calculatedResult, setCalculatedResult] = useState('');

    const handleLegSignal = (e) => {
        setLegitimateSignals(e.target.value);
    }
    const handleSignalValue = (e) => {
        setUniqueSignals(e.target.value);
    }

    useEffect(() => {
        const calculateResult = () => {
            const result = (parseInt(teamMembers) || 0) * (parseInt(networkSize) || 0) * (parseFloat(signalsPerContact) || 0) * (legitimateSignals / 100 || 0) * (uniqueSignals / 100 || 0);
            setCalculatedResult(result);
        };

        calculateResult();
    }, [teamMembers, networkSize, signalsPerContact, legitimateSignals, uniqueSignals]);

    return (
        <>
            <div className="operations">
                <div className='part'>
                    <label className='labels style-item'>Number of Team Members</label>
                    <input className='inputs' type="number" value={teamMembers} onChange={(e) => { setTeamMembers(e.target.value); }} />
                </div>
                <div className='part'>
                    <label className='labels style-item'>Size of Network</label>
                    <input className='inputs' type="number" value={networkSize} onChange={(e) => { setNetworkSize(e.target.value); }} />
                </div>
                <div className='part'>
                    <label className='labels style-item'>Number of Signals Per Contact / Year</label>
                    <input className='inputs' type="number" value={signalsPerContact} onChange={(e) => { setSignalsPerContact(e.target.value); }} />
                </div>
                <div className='part'>
                    <label className='labels style-item'>% Legitimate Signals</label>
                    <Box style={{ width: '90%' }}>
                        <Slider style={{ color: 'rgba(135, 83, 212, 1)' }} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={handleLegSignal} value={legitimateSignals} />
                    </Box>
                    {/* <input className='inputs' type="number" value={legitimateSignals} onChange={(e) => { setLegitimateSignals(e.target.value); }} /> */}
                </div>
                <div className='part'>
                    <label className='labels style-item'>% Unique/Hard To Discover Signals</label>
                    <Box style={{ width: '90%' }}>
                        <Slider style={{ color: 'rgba(135, 83, 212, 1)' }} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={handleSignalValue} value={uniqueSignals} />
                    </Box>
                    {/* <input className='inputs' type="number" value={uniqueSignals} onChange={(e) => { setUniqueSignals(e.target.value); }} /> */}
                </div>
                <div className='part'>
                    <label style={{ fontSize: '20px' }} className='labels style-item'>Number of New Signals</label>
                    <input style={{ backgroundColor: 'rgba(18, 9, 32, 0.04)' }} className='inputs' type="number" value={calculatedResult} readOnly />
                </div>
            </div>
        </>
    )
}

export default Operations