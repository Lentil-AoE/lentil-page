import React, { useState } from 'react';

export const Match = () => {
    return (
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
                    <div className="plus flex">+</div>
                </div>

                <div className='flex flex-col gray'>
                    <div className="map megarandom"></div>
                    <p>Megarandom</p>
                </div>

                <div className="maps flex">
                {/* <div className='flex flex-col'>
                    <div className="map megarandom"></div>
                    <p>Megarandom</p>
                </div>
                <div className='flex flex-col'>
                    <div className="map megarandom"></div>
                    <p>Megarandom</p>
                </div> */}
                    <div className="plus flex">+</div>
                </div>

            </div>
            <br/>
            <br/>
            <br/>
            <h1>Civs</h1>
            <div className="container flex">
            <div className="maps flex">
                    <div className="plus flex">+</div>
                </div>
                <div className="gray">
                <div className='flex flex-col'>
                    <div>
                        <img src='https://static.ageofempires.com/aoe/wp-content/themes/msgpwebteam/dist/images/hero-logo-age2_ea9d88d4.png' alt=""/>
                    </div>
                </div>
                </div>
                <div className="maps flex">
                    <div className="plus flex">+</div>
                </div>
            </div>
        </div>
    )
}