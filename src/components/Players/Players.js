import React from 'react';
import Player from '../Player/Player';

const Players = ({ players, handleCart }) => {
    return (
        <>
            {
                players.map(player => <Player
                    key={player.idPlayer}
                    player={player}
                    handleCart={handleCart}></Player>)
            }
        </>
    );
};

export default Players;