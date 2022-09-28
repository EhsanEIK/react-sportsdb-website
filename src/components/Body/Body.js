import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Body.css';

const Body = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=ronaldo`)
            .then(res => res.json())
            .then(data => setPlayers(data.player));
    }, []);

    const addToCart = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
        addToDb(player.idPlayer);
    }

    useEffect(() => {
        const storedCart = getDataFromDb();
        let newCart = [];
        for (const id in storedCart) {
            const existPlayer = players.find(player => player.idPlayer === id);
            if (existPlayer) {
                existPlayer.quantity = storedCart[id];
                newCart.push(existPlayer);
            }
        }
        setCart(newCart);
    }, [players]);

    return (
        <div>
            <h1>The Sports db</h1>
            <div className='container'>
                <div className='players-container'>
                    <Players players={players}
                        handleCart={addToCart}></Players>
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Body;
