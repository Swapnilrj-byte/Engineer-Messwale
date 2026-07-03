let cart = [];

function addToCart(item, price) {
    cart.push({
        item: item,
        price: price
    });

    updateCart();

    alert(item + " added to cart!");
}

function updateCart() {

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach(function(food) {

        cartItems.innerHTML +=
        "<p>" + food.item + " - ₹" + food.price + "</p>";

        sum += food.price;

    });

    total.innerText = sum;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }
}
