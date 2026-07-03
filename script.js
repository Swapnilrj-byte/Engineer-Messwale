let cart = {};

function increaseQty(item, price) {

    if (!cart[item]) {
        cart[item] = { qty: 0, price: price };
    }

    cart[item].qty++;

    updateCart();
}

function decreaseQty(item) {

    if (cart[item] && cart[item].qty > 0) {
        cart[item].qty--;

        if (cart[item].qty === 0) {
            delete cart[item];
        }

        updateCart();
    }
}

function updateCart() {

    let cartItems = document.getElementById("cart-items");
    let total = document.getElementById("total");

    cartItems.innerHTML = "";

    let sum = 0;

    for (let item in cart) {

        document.getElementById(item + "-qty").innerText = cart[item].qty;

        cartItems.innerHTML +=
            "<p>" + item + " × " + cart[item].qty +
            " = ₹" + (cart[item].qty * cart[item].price) + "</p>";

        sum += cart[item].qty * cart[item].price;
    }

    total.innerText = sum;

    if (sum === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";

        document.getElementById("Veg Thali-qty").innerText = 0;
        document.getElementById("Chicken Thali-qty").innerText = 0;
        document.getElementById("Egg Thali-qty").innerText = 0;
    }
}function checkout() {

    if (Object.keys(cart).length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "🛒 Engineer Messwale Order\n\n";

    for (let item in cart) {
        message += item + " x " + cart[item].qty + "\n";
    }

    message += "\nTotal: ₹" + document.getElementById("total").innerText;

    alert(message);
}