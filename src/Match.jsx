import React from 'react';
import megarandom from './assets/maps/megarandom.png';
import wolf from './assets/teams/wolf.png';
import hawk from './assets/teams/hawk.png';

const maps = [1, 2, 3, 4, 5, 6, 7];

const mapMaps = () => maps.map(map => {
    return (
        <div className='map'>
            <img src={megarandom} alt="" />
            <p>MegaRandom</p>
        </div>
    )
});

const civs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mapCivs = () => civs.map(civ => {
    return (
        <div className='civ-div'>
            <div className='civ'></div>
            <p>Vietnamese</p>
        </div>
    )
})

const games = [
    {
        map: 'Bog Socatra'
    },
    {
        map: 'Ponds'
    },
    {
        map: 'Reverse Arena'
    },
    {
        map: 'Mega Random',
        image: megarandom
    },
    {
        map: 'Reverse Arena'
    },
    {
        map: 'Reverse Arena'
    },
    {
        map: 'Reverse Arena'
    }
];

const mapGamesLeft = () => games.map((game, i) => {
    return (
        <div className='game-left'>
            <h2>{`Game ${i + 1}`}</h2>
            <div className='civ-div'>
                <div className='civ'></div>
                <p>Vietnamese</p>
            </div>
        </div>
    )
})

const mapGamesRight = () => games.map(game => {
    return (
        <div className='game-right'>
            <div className='civ-div'>
                <div className='civ'></div>
                <p>Vietnamese</p>
            </div>
            <div className='map'>
            <img src={megarandom} alt="" />
            <p>MegaRandom</p>
        </div>
        </div>
    )
})

export const Match = () => {
    document.title = 'LENTIL CUP 2'
    return (
        <div>
            <header>
                <h2>LENTIL CUP 2</h2>
                <h4>current prize pool: $0</h4>
            </header>
            <div className="match-title">
                <h3>RICE BRACKET - bo7</h3>
            </div>
            <div className='teams'>
                <div className='team team-left left'>
                    <div className='flex flex-left'>
                        <img src={wolf} alt='wolf' />
                        <h1>Pizza Wolf</h1>
                    </div>
                    <h1 className='score'>0</h1>
                </div>
                <div className='team team-right right'>
                    <h1 className='score'>0</h1>
                    <div className='flex flex-right'>
                        <h1>Pretzel Hawk</h1>
                        <img src={hawk} alt='hawk' />
                    </div>
                </div>
            </div>
            <div className='maps'>
                {mapMaps()}
            </div>
            <div className='civs'>
                <div className="civ-picks left">
                    {mapCivs()}
                </div>
                <div className="civ-picks right">
                    {mapCivs()}
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