import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h1>Booked Players</h1>
            <h3>Selected Players: {cart.length}</h3>
            <ol>
                {
                    cart.map(player => <li>{player.strPlayer}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;