import React from 'react';
import { civs } from './const/civs';

const mapCivs = civs.map(civ => {
    return (
        <div className='flex'>
            <div className='flex flex-col'>
                <div className={`civ ${civ}`}></div>
                <p>{civ}</p>
            </div>
        </div>
    )
})

export const CivModal = props => {
    return (
        <div className="modal flex">
            <div className="white flex flex-col">
                <h2>pick four</h2>
                <div className='wrap flex'>
                {mapCivs}
                </div>
                <div className="buttons flex">
                <button onClick={() => props.toggleMaps(false)}>submit</button>
                <button onClick={() => props.toggleMaps(false)}>close</button>
                </div>
            </div>
        </div>
    )
}