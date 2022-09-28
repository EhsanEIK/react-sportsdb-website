import React from 'react';
import Player from '../Player/Player';

const Players = ({ players }) => {
    return (
        <>
            {
                players.map(player => <Player player={player}></Player>)
            }
        </>
    );
};

export default Players;