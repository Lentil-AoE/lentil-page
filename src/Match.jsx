import React, {useState} from 'react';
import megarandomImg from './assets/maps/megarandom.png';
import wolf from './assets/teams/wolf.png';
import hawk from './assets/teams/hawk.png';
import {team1, team2} from './const/match-a-draft';

const megarandom = 'MegaRandom';
const maps = [
    team1.maps[2], 
    team1.maps[1], 
    team1.maps[0], 
    megarandom,
    team2.maps[0], 
    team2.maps[1], 
    team2.maps[2], 
]

const mapMaps = () => maps.map(map => {
    return (
        <div className='map'>
            <img src={megarandomImg} alt="" />
            <p>{map}</p>
        </div>
    )
});

const mapCivsTeam1 = () => team1.civs.map(civ => {
    return (
        <div className='civ-div'>
            <div className={`civ ${civ.toLowerCase()}`}></div>
            <p>{civ}</p>
        </div>
    )
})

export const Match = () => {
    const [maps, updateMaps] = useState([megarandom]);
    const [team1CivPicks, updateTeam1CivPicks] = useState([]);
    const [team2CivPicks, updateTeam2CivPicks] = useState([]);
    
    const mapGamesLeft = () => maps.map((game, i) => {
        return (
            <div className='game-left'>
                <h2>{`Game ${i + 1}`}</h2>
                <div className='civ-div'>
                    <div className='civ'>{team1CivPicks[i] ? '' : '???'}</div>
                    <p>{game.team1Civ}</p>
                </div>
            </div>
        )
    })
    
    const mapGamesRight = () => maps.map((game, i) => {
        return (
            <div className='game-right'>
                <div className='civ-div'>
                    <div className='civ'>{team2CivPicks[i] ? '' : '???'}</div>
                    <p>{team2CivPicks[1]}</p>
                </div>
                <div className='map'>
                <img src={megarandomImg} alt="" />
                <p>{maps[i]}</p>
            </div>
            </div>
        )
    })
    document.title = 'LENTIL CUP 2'
    return (
        <div>
            <header>
                <h2>LENTIL CUP 2</h2>
                <h4>current prize pool: $0</h4>
            </header>
            <div className="match-title">
                <h3>RICE BRACKET - best of 7</h3>
            </div>
            <div className='teams'>
                <div className='team team-left left'>
                    <div className='flex flex-left'>
                        <img src={wolf} alt='wolf' />
                        <div className='team-names'>
                            <h1>{team1.name}</h1>
                            <p>Player 1</p>
                            <p>Player 2</p>
                        </div>
                    </div>
                    <h1 className='score'>0</h1>
                </div>
                <div className='team team-right right'>
                    <h1 className='score'>0</h1>
                    <div className='flex flex-right'>
                        <div className='team-names'>
                            <h1>{team2.name}</h1>
                            <p>Player 1</p>
                            <p>Player 2</p>
                        </div>
                        <img src={hawk} alt='hawk' />
                    </div>
                </div>
            </div>
            <div className='maps'>
                {mapMaps()}
            </div>
            <div className='civs'>
                <div className="civ-picks left">
                    {mapCivsTeam1()}
                </div>
                <div className="civ-picks right">
                    {mapCivsTeam1()}
                </div>
            </div>
            <div className='games'>
                <div className="games-left left">
                    {mapGamesLeft()}
                </div>
                <div className="games-right right">
                    {mapGamesRight()}
                </div>
            </div>
        </div>
    )
}