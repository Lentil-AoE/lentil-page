import React, { useState } from 'react';
import {MapModal} from './MapModal';
import {CivModal} from './CivModal';

export const Match = () => {
    const [showMaps, toggleMaps] = useState(false);
    const [showCivs, toggleCivs] = useState(false);

    return (
        <>
        {showMaps && <MapModal toggleMaps={toggleMaps}/> }
        {showCivs && <CivModal toggleMaps={toggleCivs}/>}
        <div className='page'>
            <div className="container flex">
                <div className="player">
                    <input type="text" placeholder='Player 1' />
                </div>
                <div className="player">Best of 3</div>
                <div className="player">
                    <input type="text" placeholder='Player 2' className='right' />
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <h1>Maps</h1>
            <div className="container flex">
                <div className="maps flex">
                    <div className="plus flex" onClick={() => toggleMaps(true)}>1</div>
                    <div className="plus flex" onClick={() => toggleMaps(true)}>1</div>
                </div>

                <div className='flex flex-col gray'>
                    <div className="map megarandom"></div>
                    <p>Megarandom</p>
                </div>
                

                <div className="maps flex">
                    <div className="plus flex" onClick={() => toggleMaps(true)}>2</div>
                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <h1>Civs</h1>
            <div className="container flex">
            <div className="maps flex">
            <div className="plus flex" onClick={() => toggleCivs(true)}>1</div>
            <div className="plus flex" onClick={() => toggleCivs(true)}>2</div>
            <div className="plus flex" onClick={() => toggleCivs(true)}>1</div>
            <div className="plus flex red" onClick={() => toggleCivs(true)}>×</div>
                </div>
                <div className="gray">
                <div className='flex flex-col'>
                    <div>
                        <img src='https://static.ageofempires.com/aoe/wp-content/themes/msgpwebteam/dist/images/hero-logo-age2_ea9d88d4.png' alt=""/>
                    </div>
                </div>
                </div>
                <div className="maps flex">
                <div className="plus flex red" onClick={() => toggleCivs(true)}>×</div>
                <div className="plus flex" onClick={() => toggleCivs(true)}>2</div>
                <div className="plus flex" onClick={() => toggleCivs(true)}>2</div>
                </div>
            </div>
        </div>
        </>
    )
}