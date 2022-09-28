import React from 'react';
import './Player.css';

const Player = ({ player }) => {
    console.log(player)
    const { strThumb, strPlayer, strNationality, strPosition, strDescriptionEN } = player
    return (
        <div className='player'>
            <div className="player-info">
                <img src={strThumb} alt={strThumb} />
                <h2>{strPlayer}</h2>
                <p><b><i>Country:</i></b> {strNationality}</p>
                <p><b><i>Playing Position:</i></b> {strPosition}</p>
                <p>{strDescriptionEN ? strDescriptionEN.slice(0, 100) + '...' : ''}</p>
            </div>
            <button className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Player;