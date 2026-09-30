let cartCount = 0;

function addToCart(amount, price) {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    document.getElementById("message").textContent =
        💜 بسته ${amount} CP انتخاب شد — ${price.toLocaleString()} تومان;
}