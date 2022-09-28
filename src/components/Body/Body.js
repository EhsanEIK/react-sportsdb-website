import React, { useEffect, useState } from 'react';
import { addToDb, getDataFromDb } from '../../utilities/fakeDb';
import Cart from '../Cart/Cart';
import Players from '../Players/Players';
import './Body.css';

const Body = () => {
    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${search}`)
            .then(res => res.json())
            .then(data => setPlayers(data.player));
    }, [search]);

    const addToCart = (player) => {
        let newCart = [];
        const exists = cart.find(p => p.idPlayer === player.idPlayer);
        if (!exists) {
            player['quantity'] = 1;
            newCart = [...cart, player];
        }
        else {
            const rest = cart.filter(p => p.idPlayer !== exists.idPlayer);
            exists.quantity = player.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(player.idPlayer);
    }

    useEffect(() => {
        const storedCart = getDataFromDb();
        let newCart = [];
        for (const id in storedCart) {
            const existPlayer = players?.find(player => player.idPlayer === id);
            if (existPlayer) {
                existPlayer.quantity = storedCart[id];
                newCart.push(existPlayer);
            }
        }
        setCart(newCart);
    }, [players]);

    return (
        <div>
            <div className='search-container'>
                <input type="text" onChange={(e) => setSearch(e.target.value)} />
            </div>
            <h1 className='all-players-title'>All Players</h1>
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
