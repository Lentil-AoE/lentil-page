import React from 'react';
import { Header } from './components/Header';
import { Match } from './Match';
import { Switch, Route } from 'react-router-dom';
import wolf from './assets/teams/wolf.png'

export const Sample = () => {
    return (
        <div>
            <Header />
            <div className='sample'>
                <div className='bar'>
                <marquee className='marquee' behavior="" direction="left">
                        <p>
                            🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2
                            🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2
                            🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2
                        </p> 
                    </marquee>
                    <p>Your favorite co-op only, lentil-themed, elo-capped, AoE2 tournament returns featuring brand new maps and an even tackier website. Hosted by Lentil (website by crochet 🧶).</p>
                </div>
                <div className="lines">
                <div className='circle'>
                    <h1>Sample Match UI ✨</h1>
                    <p>Click on the pizza wolf below.</p>
                    <img src={wolf} alt=""/>
                </div>
                <div className='circle'>
                    <h1>New Map Pool! ✨</h1>
                    <p>New maps currently being developed!</p>
                    <ul>
                        <li>Ever wish Socratra was boggier?</li>
                        <li>Ever wish that you started a game trapped inside your opponent walls?</li>
                        <li>Ever wish your starting scout was super slow and could collect relics?</li>
                    </ul>
                    <p>You no longer have to wish!</p>
                    <br/>
                    <p>Help us test new maps here.</p>
                </div>
                </div>
                <div className="bar">
                    <p><em>It's a giant Roman numeral 2 - see what I did there? (Unless you're viewing this on a phone in which case - good luck... have fun.)</em></p>
                    <br/>
                    <marquee className='marquee' behavior="" direction="left">
                        <p>
                            🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2
                            🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2
                            🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2 🧆 🧆 🧆 LENTIL CUP 2
                        </p> 
                    </marquee>
                </div>
            </div>
        </div>
    )
}