import React, { useState } from 'react';
import { MapModal } from './MapModal';
import { CivModal } from './CivModal';
import { mapNames } from './MapModal';
import {civNames} from './const/civs';

export const Match = () => {
    const [showMaps, toggleMaps] = useState(false);
    const [showCivs, toggleCivs] = useState(false);

    const [mapsArray, addMap] = useState([]);
    const [civsArray, addCiv] = useState([]);

    const [player1, changePlayer1] = useState('Player 1');
    const [player2, changePlayer2] = useState('Player 2');

    const [info, setInfo] = useState({
        player: '',
        number: '',
        message: ''
    });

    const onMapClick = (player, number, message, type) => {
        setInfo({
            player,
            number,
            message
        });

        type === 'maps' && toggleMaps(true);
        type === 'civs' && toggleCivs(true);
    }

    const returnMap = (map, ban) => {
        const isMap = mapNames[map]

        return (
            <div className='flex flex-col'>
                <div className={`${isMap ? 'map margin' : 'civ'} ${map}`}>{ban && 'X'}</div>
                <p>{mapNames[map]}</p>
                <p>{civNames[map.toLowerCase()]}</p>
            </div>
        )
    }

    const pickOne = (player, number, message, i) => {
        return (
            mapsArray[i] ?
                returnMap(mapsArray[i])
                : <div className="plus flex" onClick={() => onMapClick(player, number, message, 'maps')}>1</div>
        )
    }

    const pickOneCiv = (player, number, message, i) => {
        const ban = message === 'ban one';

        return (
            civsArray[i] ? returnMap(civsArray[i], ban) 
            : <div className={`plus flex ${ban && 'red'}`} onClick={() => onMapClick(player, number, message, 'civs')}>{number}</div>
        )
    }

    const pickTwoCivs = (player, number, message, i) => {
        return (
            civsArray[i] ?
                <>
                {returnMap(civsArray[i-1])}
                {returnMap(civsArray[i])}
                </>
                : <div className="plus flex" onClick={() => onMapClick(player, number, message, 'civs')}>2</div>
        )
    }

    return (
        <>
            {showMaps && <MapModal toggleMaps={toggleMaps} mapsArray={mapsArray} addMap={addMap} info={info} />}
            {showCivs && <CivModal toggleCivs={toggleCivs} civsArray={civsArray} addCiv={addCiv} info={info}/>}
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
                    {pickOneCiv(player1, '×', 'ban one', 0)}
                            {pickOne(player1, 1, 'pick one', 0)}
                    </div>
                    <div className='flex flex-col gray'>
                        <div className="map megarandom"></div>
                        <p>Megarandom</p>
                    </div>
                    <div className="maps flex">
                        {pickOne(player2, 1, 'pick one', 1)}
                        {pickOneCiv(player2, '×', 'ban one', 1)}
                    </div>
                </div>

                <br />
                <br />
                <br />
                <h1>Civs</h1>
                <div className="container flex">
                    <div className="maps flex">
                        {pickOneCiv(player1, 1, 'pick one', 9)}
                        {pickTwoCivs(player1, 2, 'pick two', 6)}
                        {pickOneCiv(player1, 1, 'pick one', 2)}
                    </div>
                    <div className="gray">
                        <div className='flex flex-col'>
                            <div>
                                <img src='https://static.ageofempires.com/aoe/wp-content/themes/msgpwebteam/dist/images/hero-logo-age2_ea9d88d4.png' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="maps flex">
                        {pickTwoCivs(player2, 2, 'pick two', 4)}
                        {pickTwoCivs(player2, 2, 'pick two', 8)}
                    </div>
                </div>
            </div>
        </>
    )
}