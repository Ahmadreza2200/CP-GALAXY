let cart = [];

/* ================= CART ================= */

function addToCart(name, price) {

    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
    openCart();
}

function updateCart() {

    const cartContainer = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartContainer) return;

    let totalItems = 0;
    let totalPrice = 0;

    cartContainer.innerHTML = "";

    if (cart.length === 0) {

        cartContainer.innerHTML =
            '<p style="color:#999;text-align:center;padding:30px 0;">سبد خرید خالی است</p>';

    } else {

        cart.forEach((item, index) => {

            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;

            const div = document.createElement("div");

            div.className = "cart-item";

            div.innerHTML = `
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <span>${item.price.toLocaleString()} تومان</span>
                    <div>
                        تعداد: ${item.quantity}
                    </div>
                </div>

                <div>
                    <button onclick="changeQuantity(${index}, 1)">+</button>
                    <button onclick="changeQuantity(${index}, -1)">−</button>
                    <button onclick="removeItem(${index})">×</button>
                </div>
            `;

            cartContainer.appendChild(div);
        });
    }

    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    if (cartTotal) {
        cartTotal.textContent =
            totalPrice.toLocaleString() + " تومان";
    }
}

function changeQuantity(index, amount) {

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}

function clearCart() {

    cart = [];

    updateCart();
}

/* ================= CART PANEL ================= */

function openCart() {

    const panel = document.getElementById("cartPanel");
    const overlay = document.getElementById("cartOverlay");

    if (panel) {
        panel.classList.add("open");
    }

    if (overlay) {
        overlay.classList.add("show");
    }
}

function closeCart() {

    const panel = document.getElementById("cartPanel");
    const overlay = document.getElementById("cartOverlay");

    if (panel) {
        panel.classList.remove("open");
    }

    if (overlay) {
        overlay.classList.remove("show");
    }
}

/* ================= SEARCH + FILTER ================= */

let currentFilter = "all";
let currentSearch = "";

function applyProducts() {

    const cards = document.querySelectorAll(".product-card");

    cards.forEach(card => {

        const category = card.dataset.category || "all";

        const text =
            card.textContent.toLowerCase();

        const searchMatch =
            text.includes(currentSearch.toLowerCase());

        const filterMatch =
            currentFilter === "all" ||
            category === currentFilter;

        if (searchMatch && filterMatch) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}

function searchProducts() {

    const input = document.getElementById("productSearch");

    if (!input) return;

    currentSearch = input.value;

    applyProducts();
}

function filterProducts(category) {

    currentFilter = category;

    document.querySelectorAll(".filter-btn").forEach(button => {
        button.classList.remove("active");
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }

    applyProducts();
}

/* ================= START ================= */

document.addEventListener("DOMContentLoaded", function () {

    updateCart();

    const search =
        document.getElementById("productSearch");

    if (search) {

        search.addEventListener("input", function () {

            currentSearch = this.value;

            applyProducts();

        });
    }

    const overlay =
        document.getElementById("cartOverlay");

    if (overlay) {
        overlay.addEventListener("click", closeCart);
    }

});
