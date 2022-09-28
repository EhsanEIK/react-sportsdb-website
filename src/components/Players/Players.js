import React from 'react';
import Player from '../Player/Player';
import './Players.css';

const Players = ({ players, handleCart }) => {
    console.log(players)
    return (
        <>
            {
                players ? players.map(player => <Player
                    key={player.idPlayer}
                    player={player}
                    handleCart={handleCart}></Player>)
                    : <p className='warning-messsage'>No Data Found</p>
            }
        </>
    );
};

export default Players;