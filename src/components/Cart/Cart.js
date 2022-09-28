import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    let quantity = 0;
    for (const player of cart) {
        quantity += player.quantity;
    }
    return (
        <div className='cart'>
            <h1>Booked Players</h1>
            <h3>Selected Players: {quantity}</h3>
            <ol>
                {
                    cart.map(player => <li>{player.strPlayer}</li>)
                }
            </ol>
        </div>
    );
};

export default Cart;