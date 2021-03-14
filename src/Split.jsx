import React from 'react';
import { Link } from 'react-router-dom';

export const Split = () => {
    return (
        <div className='page'>
            <section className='section-left'>
                    <h1>Lentil Cup</h1>
                <a href='https://lentil.page' target='__blank' rel='noreferrer'>
                    <button className='btn-big btn-left'>Enter</button>
                </a>
            </section>
            <section className='section-right'>
                <h1>Lentil Cup 2</h1>
                <Link to='/two'>
                    <button className='btn-big btn-right'>Enter</button>
                </Link>
            </section>
        </div>
    )
}