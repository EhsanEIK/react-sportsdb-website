import React, { useEffect, useState } from 'react';
import Players from '../Players/Players';
import './Body.css';

const Body = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=ronaldo`)
            .then(res => res.json())
            .then(data => setPlayers(data.player));
    }, []);
    // console.log(players)
    return (
        <div>
            <h1>The Sports db</h1>
            <div className='container'>
                <div className='players-container'>
                    <Players players={players}></Players>
                </div>
                <div className='cart-container'>
                    <h1>Booked Players</h1>
                </div>
            </div>
        </div>
    );
};

export default Body;
