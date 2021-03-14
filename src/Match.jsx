import React, {useState} from 'react';
import './style/Civs.css';
import wolf from './assets/teams/wolf.png';
import hawk from './assets/teams/hawk.png';
import {team1, team2} from './const/match-a-draft';

const megarandom = 'MegaRandom';
const mapDraft = [
    team1.maps[2], 
    team1.maps[1], 
    team1.maps[0], 
    megarandom,
    team2.maps[0], 
    team2.maps[1], 
    team2.maps[2], 
]

export const Match = props => {
    const [maps1, updateMaps] = useState(['MegaRandom']);
    const [team1CivPicks, updateTeam1CivPicks] = useState([]);
    const [team2CivPicks, updateTeam2CivPicks] = useState([]);
    const [result, updateResult] = useState({
        team1: [],
        team2: []
    })
    const [score, updateScore] = useState([0,0])

    const returnCheck = (x) => {
        const bank = {
            W: <i class="fas fa-check"></i>,
            L: '❌'
        }
        return bank[x] || ''
    }

    const recordWin = (team, i) => {
        if(!team1CivPicks[i] || !team2CivPicks[i]){
            return 
        }

        const newResult = Object.assign(result);
        const newScore = Object.assign(score)

        if (team === 'team1'){
            newResult.team1.splice(i, 1, 'W')
            newResult.team2.splice(i, 1, 'L')
            newScore[0] = newResult.team1.filter(score => score === 'W').length
            newScore[1] = newResult.team2.filter(score => score === 'W').length
        }

        if (team === 'team2'){
            newResult.team1.splice(i, 1, 'L')
            newResult.team2.splice(i, 1, 'W')
            newScore[0] = newResult.team1.filter(score => score === 'W').length
            newScore[1] = newResult.team2.filter(score => score === 'W').length
        }
        updateResult({...newResult});
        updateScore([...newScore])
    }

    document.title = 'LENTIL CUP 2'

    const [mapsUsed, updateMapsUsed] = useState(['MegaRandom'])
    const containsMap = mapName => mapsUsed.find(map => map === mapName)
    
    const updateMaps1 = async (map, i) => {
        if(!result.team1[i]){
            return
        }

        if(containsMap(map)){
            return
        }
        if (team1CivPicks[i] && team1CivPicks[i]){
        updateMapsUsed([...mapsUsed, map])
        await updateMaps([...maps1, map])
        
        const objDiv = document.getElementById('games');
        objDiv.scrollTop = objDiv.scrollHeight;}
    }

    const mapMaps = () => mapDraft.map((map, i) => {
        return (
            <div key={map}
            className='hover map'
            onClick={() => updateMaps1(map, maps1.length - 1)}
            >
                <div className='test'>{containsMap(map) && '❌'}</div>
                <p>{map}</p>
            </div>
        )
    });
    
    const mapGamesLeft = maps1.map((_, i) => (
            <div key={i} className='game-left'>
                <h2>{`Game ${i + 1}`}</h2>
                <div className='civ-div'>
                    <div 
                    className={`civ ${team1CivPicks[i] && team1CivPicks[i]} hover`}
                    onClick={() => recordWin('team1', i)}>
                        {team1CivPicks[i] ? returnCheck(result.team1[i]) : '❔'}
                    </div>
                    <p>{team1CivPicks[i] ? team1CivPicks[i] : 'Pending'}</p>
                </div>
            </div>
        )
    )
    
    const mapGamesRight = maps1.map((_, i) => (
            <div key={i} className='game-right'>
                <div className='civ-div'>
                    <div className={`civ ${team2CivPicks[i] && team2CivPicks[i]} hover`}
                    onClick={() => recordWin('team2', i)}>
                        {team2CivPicks[i] ? returnCheck(result.team2[i]) : '❔'}
                        
                    </div>
                    <p>{team2CivPicks[i] ? team2CivPicks[i] : 'Pending'}</p>
                </div>
                <div className='map'>
                <div className="test"></div>
                <p>{maps1[i]}</p>
            </div>
            </div>
        )
    )

    const [civsUsedTeam1, updateCivsUsedTeam1] = useState([]);
    const isCivUsedTeam1 = civ => civsUsedTeam1.find(el => el === civ);
    
    const [civsUsedTeam2, updateCivsUsedTeam2] = useState([]);
    const isCivUsedTeam2 = civ => civsUsedTeam2.find(el => el === civ);

    const updateCivPicks = (team, civ, i) => {
        if(!maps1[i]){
            if(maps1[1-1]){
                i--
            } else {
                return
            }
        }

            if(isCivUsedTeam1(civ)){
                return
            }

            if(isCivUsedTeam2(civ)){
                return
            }

            const newCivPicksTeam1 = Object.assign(team1CivPicks);
            const newCivPicksTeam2 = Object.assign(team2CivPicks);
            const newCivUsedTeam1 = Object.assign(civsUsedTeam1);
            const newCivUsedTeam2 = Object.assign(civsUsedTeam2);

            if (team === 'team1'){
                newCivPicksTeam1.splice(i, 1, civ);
                newCivUsedTeam1.splice(i, 1, civ);
                updateCivsUsedTeam1([...newCivUsedTeam1]);
                updateTeam1CivPicks([...newCivPicksTeam1]);
            }

            if (team === 'team2'){
                newCivPicksTeam2.splice(i, 1, civ);
                newCivUsedTeam2.splice(i, 1, civ);
                updateCivsUsedTeam2([...newCivUsedTeam2]);
                updateTeam2CivPicks([...newCivPicksTeam2]);
            }
        }

    const mapCivsTeam1 = team1.civs.map(civ => (
            <div className='civ-div' onClick={() => updateCivPicks('team1', civ, team1CivPicks.length)}>
                <div className={`civ ${civ} hover`}>{isCivUsedTeam1(civ) && '❌'}</div>
                <p>{civ}</p>
            </div>
        )
    )

    const mapCivsTeam2 = team2.civs.map(civ => (
        <div className='civ-div' onClick={() => updateCivPicks('team2', civ, team2CivPicks.length)}>
            <div className={`civ ${civ} hover`}>{isCivUsedTeam2(civ) && '❌'}</div>
            <p>{civ}</p>
        </div>
    )
)

    return (
        <div className='modal'>
            <br/>
            <p>In development - let me know if you can break anything important. Click <span onClick={() => props.changeToggle(false)}>here</span> (or refresh) to go back.</p>
            <br/>
            <div className='match-title'>
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
                    <h1 className='score'>{score[0]}</h1>
                </div>
                <div className='team team-right right'>
                    <h1 className='score'>{score[1]}</h1>
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
                    {mapCivsTeam1}
                </div>
                <div className="civ-picks right">
                    {mapCivsTeam2}
                </div>
            </div>
            <div className='games' id='games'>
                <div className="games-left left">
                    {mapGamesLeft}
                </div>
                <div className="games-right right">
                    {mapGamesRight}
                </div>
            </div>
        </div>
    )
}