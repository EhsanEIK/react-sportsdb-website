import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Player = ({ player, handleCart }) => {
    // console.log(player, handleCart)
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
            <button onClick={() => handleCart(player)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Player;