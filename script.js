let cart = [];

function addToCart(item, price) {
    cart.push({
        item: item,
        price: price
    });

    alert(item + " added to cart!");
}
