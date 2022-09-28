const addToDb = (id) => {
    let playerCart = getDataFromDb();
    let quantity = playerCart[id];
    if (quantity) {
        quantity++;
        playerCart[id] = quantity;
    }
    else {
        playerCart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(playerCart));
}

const getDataFromDb = () => {
    let playerCart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        playerCart = JSON.parse(storedCart);
    }
    return playerCart;
}

export { addToDb, getDataFromDb };