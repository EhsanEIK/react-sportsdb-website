import React from 'react';
import Player from '../Player/Player';

const Players = ({ players, handleCart }) => {
    console.log(players)
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