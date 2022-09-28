import './Body.css';

const Body = () => {
    return (
        <div>
            <h1>The Sports db</h1>
            <div className='container'>
                <div className='players-container'></div>
                <div className='cart-container'>
                    <h1>Booked Players</h1>
                </div>
            </div>
        </div>
    );
};

export default Body;
