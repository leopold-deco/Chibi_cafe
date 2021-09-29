const Product = require('../models/Product');

const checkPrice = async (cart) => {
    const tabCart = [];
        for(const item of cart){
            const quantity = item.quantity;
            const price = await Product.findOne(item.id);
            const amount = (quantity * (price.price_without_taxes * price.taxe).toFixed(2));
            tabCart.push(amount);
    }
    const cartAmount = tabCart.reduce((previousValue, currentValue) => previousValue + currentValue);
    return cartAmount;
}

module.exports = checkPrice;