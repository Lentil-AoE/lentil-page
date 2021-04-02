import React from 'react';

const maps = ['bog', 'crochetbia', 'ponds', 'arena', 'tideout'];

export const mapNames = {
    bog: 'BogSocratra',
    crochetbia: 'Crochetbia',
    ponds: 'Ponds',
    arena: 'ReverseArena',
    tideout: 'Tideout'
}

export const MapModal = props => {
    const mapMaps = maps.map(map => {
        return (
            <div className='flex flex-col' onClick={() => manageMapArray(map)}>
                <div className={`map ${map}`}>{props.mapsArray.find(el => el === map) && 'X'}</div>
                <p>{mapNames[map]}</p>
            </div>
        )
    })

    const manageMapArray = map => {
        if(props.mapsArray.find(el => el === map)){
            return 
        }

        props.addMap([...props.mapsArray, map])       
    }

    return (
        <div className="modal flex">
            <div className="white flex flex-col">
                <h2>{props.info.player} {props.info.message}</h2>
                <div className='flex'>
                    {mapMaps}
                </div>
                <div className="buttons flex">
                    <button onClick={() => props.toggleMaps(false)}>submit</button>
                    <button onClick={() => props.toggleMaps(false)}>close</button>
                </div>
            </div>
        </div>
    )
}