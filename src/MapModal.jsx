import React from 'react';

export const MapModal = props => {
    return (
        <div className="modal flex">
            <div className="white flex flex-col">
                <h2>pick one</h2>
                <div className='flex'>
                    <div className='flex flex-col'>
                        <div className="map bog"></div>
                        <p>BogSocratra</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="map crochetbia"></div>
                        <p>Crochetbia</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="map ponds"></div>
                        <p>Ponds</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="map arena"></div>
                        <p>Reverse Arena</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className="map tideout"></div>
                        <p>Tideout</p>
                    </div>
                </div>
                <button onClick={() => props.toggleMaps(false)}>close</button>
            </div>
        </div>
    )
}