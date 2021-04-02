import React from 'react';
import { civs } from './const/civs';


export const CivModal = props => {
    const mapCivs = civs.map(civ => {
        return (
            <div className='flex'>
                <div className='flex flex-col' onClick={() => manageCivArray(civ)}>
                    <div className={`civ ${civ}`}>{props.civsArray.find(el => el === civ) && 'X'}</div>
                    <p>{civ}</p>
                </div>
            </div>
        )
    })

    const manageCivArray = civ => {
        if(props.civsArray.find(el => el === civ)){
            return 
        }

        props.addCiv([...props.civsArray, civ]) 
    }

    return (
        <div className="modal flex">
            <div className="white flex flex-col">
                <h2>{props.info.player} {props.info.message}</h2>
                <div className='wrap flex'>
                {mapCivs}
                </div>
                <div className="buttons flex">
                <button onClick={() => props.toggleCivs(false)}>submit</button>
                <button onClick={() => props.toggleCivs(false)}>close</button>
                </div>
            </div>
        </div>
    )
}