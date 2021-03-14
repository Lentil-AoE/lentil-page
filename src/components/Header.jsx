import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <Link to='/'>
                <div className='logo'><i className="fas fa-home"></i></div>
            </Link>
            <div className='header-title'>
                <h2>LENTIL CUP 2</h2>
                <h4>current prize pool: $0</h4>
            </div>
        </header>
    )
}