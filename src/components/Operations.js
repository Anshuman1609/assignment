import React, { useEffect, useState } from 'react';
import '../styles/Calculator.css';

const Operations = () => {
    const [teamMembers, setTeamMembers] = useState('');
    const [networkSize, setNetworkSize] = useState('');
    const [signalsPerContact, setSignalsPerContact] = useState('');
    const [legitimateSignals, setLegitimateSignals] = useState('');
    const [uniqueSignals, setUniqueSignals] = useState('');
    const [calculatedResult, setCalculatedResult] = useState('');

    useEffect(() => {
        const calculateResult = () => {
            const result = (parseInt(teamMembers) || 0) * (parseInt(networkSize) || 0) * (parseFloat(signalsPerContact) || 0) * (parseInt(legitimateSignals) / 100 || 0) * (parseInt(uniqueSignals) / 100 || 0);
            setCalculatedResult(result);
        };

        calculateResult() ;
    }, [teamMembers, networkSize, signalsPerContact, legitimateSignals, uniqueSignals]);


    // const calculateResult = () => {
    //     let result = parseInt(teamMembers) * parseInt(networkSize) * parseFloat(signalsPerContact) * (parseInt(legitimateSignals) / 100) * (parseInt(uniqueSignals) / 100);
    //     setCalculatedResult(result);
    // }

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
                    <input className='inputs' type="number" value={legitimateSignals} onChange={(e) => { setLegitimateSignals(e.target.value); }} />
                </div>
                <div className='part'>
                    <label className='labels style-item'>% Unique/Hard To Discover Signals</label>
                    <input className='inputs' type="number" value={uniqueSignals} onChange={(e) => { setUniqueSignals(e.target.value); }} />
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