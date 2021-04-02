import React, { useState } from 'react';
import { MapModal } from './MapModal';
import { CivModal } from './CivModal';
import { mapNames } from './MapModal';

export const Match = () => {
    const [showMaps, toggleMaps] = useState(false);
    const [showCivs, toggleCivs] = useState(false);

    const [mapsArray, addMap] = useState([]);
    const [player1, changePlayer1] = useState('Player 1');
    const [player2, changePlayer2] = useState('Player 2');

    const [info, setInfo] = useState({
        player: '',
        number: '',
        message: ''
    });

    const onMapClick = (player, number, message) => {
        setInfo({
            player,
            number,
            message
        });

        toggleMaps(true);
    }

    const returnMap = map => {
        console.log(mapsArray)
        return (
            <div className='flex flex-col'>
                <div className={`map ${map}`}></div>
                <p>{mapNames[map]}</p>
            </div>
        )
    }

    const pickOne = (player, number, message, i) => {
        return (
            mapsArray[i] ?
                returnMap(mapsArray[i])
                : <div className="plus flex" onClick={() => onMapClick(player, number, message)}>1</div>
        )
    }

    const pickTwo = (player, number, message, i) => {
        return (
            mapsArray[2] ?
                <>
                {returnMap(mapsArray[i-1])}
                {returnMap(mapsArray[i])}
                </>
                : <div className="plus flex" onClick={() => onMapClick(player, number, message)}>2</div>
        )
    }

    return (
        <>
            {showMaps && <MapModal toggleMaps={toggleMaps} mapsArray={mapsArray} addMap={addMap} info={info} />}
            {showCivs && <CivModal toggleMaps={toggleCivs} />}
            <div className='page'>
                <div className="container flex">
                    <div className="player">
                        <input type="text" placeholder='Player 1' onChange={e => changePlayer1(e.target.value)} />
                    </div>
                    <div className="player">Best of 3</div>
                    <div className="player">
                        <input type="text" placeholder='Player 2' className='right' onChange={e => changePlayer2(e.target.value)} />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <h1>Maps</h1>
                <div className="container flex">
                    <div className="maps flex">
                            {pickOne(player1, 1, 'pick one', 0)}
                    </div>

                    <div className='flex flex-col gray'>
                        <div className="map megarandom"></div>
                        <p>Megarandom</p>
                    </div>


                    <div className="maps flex">
                        {pickOne(player2, 1, 'pick one', 1)}
                    </div>

                </div>
                <br />
                <br />
                <br />
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
                                <img src='https://static.ageofempires.com/aoe/wp-content/themes/msgpwebteam/dist/images/hero-logo-age2_ea9d88d4.png' alt="" />
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