let cartCount = 0;


/* =========================
   ADD TO CART
========================= */

function addToCart(amount, price) {

    cartCount++;

    const cartCounter =
        document.getElementById("cartCount");

    const message =
        document.getElementById("message");

    cartCounter.textContent = cartCount;

    message.textContent =
        `💜 بسته ${amount} CP انتخاب شد — ${price.toLocaleString("fa-IR")} تومان`;

    message.style.borderColor = "#7653d6";

    setTimeout(() => {

        message.style.borderColor = "#302653";

    }, 1200);
}


/* =========================
   NAVIGATION
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const links =
        document.querySelectorAll("nav a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            links.forEach(item => {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});
