let cart = [];


/* =========================
   ADD TO CART
========================= */

function addToCart(name, price) {

    const existing =
        cart.find(item => item.name === name);

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


/* =========================
   UPDATE CART
========================= */

function updateCart() {

    const cartCount =
        document.getElementById("cartCount");

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");


    let totalQuantity = 0;
    let totalPrice = 0;


    cart.forEach(item => {

        totalQuantity += item.quantity;

        totalPrice +=
            item.price * item.quantity;

    });


    cartCount.textContent =
        totalQuantity;


    cartTotal.textContent =
        totalPrice.toLocaleString("fa-IR")
        + " تومان";


    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                هنوز بسته‌ای انتخاب نشده.
            </p>`;

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach((item, index) => {

        const div =
            document.createElement("div");

        div.className =
            "cart-item";


        div.innerHTML = `

            <div class="cart-item-top">

                <strong>
                    ${item.name}
                </strong>

                <span>
                    ${(item.price * item.quantity)
                    .toLocaleString("fa-IR")}
                    تومان
                </span>

            </div>

            <small>
                قیمت هر بسته:
                ${item.price.toLocaleString("fa-IR")}
                تومان
            </small>

            <div class="cart-actions">

                <button
                    onclick="changeQuantity(${index}, 1)">
                    +
                </button>

                <span>
                    ${item.quantity}
                </span>

                <button
                    onclick="changeQuantity(${index}, -1)">
                    −
                </button>

                <button
                    class="remove-item"
                    onclick="removeItem(${index})">
                    حذف
                </button>

            </div>

        `;


        cartItems.appendChild(div);

    });

}


/* =========================
   CHANGE QUANTITY
========================= */

function changeQuantity(index, change) {

    cart[index].quantity += change;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


/* =========================
   REMOVE ITEM
========================= */

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();

}


/* =========================
   CLEAR CART
========================= */

function clearCart() {

    cart = [];

    updateCart();

}


/* =========================
   CART OPEN
========================= */

function openCart() {

    document
        .getElementById("cartPanel")
        .classList.add("show");

    document
        .getElementById("overlay")
        .classList.add("show");

}


/* =========================
   CART CLOSE
========================= */

function closeCart() {

    document
        .getElementById("cartPanel")
        .classList.remove("show");

    document
        .getElementById("overlay")
        .classList.remove("show");

}


/* =========================
   SEARCH
========================= */

function searchProducts() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .trim()
            .toLowerCase();


    const products =
        document.querySelectorAll(".product");


    let found = 0;


    products.forEach(product => {

        const name =
            product
                .dataset
                .name
                .toLowerCase();


        if (
            name.includes(search) ||
            search === ""
        ) {

            product.style.display =
                "";

            found++;

        } else {

            product.style.display =
                "none";

        }

    });


    document
        .getElementById("noResults")
        .hidden = found !== 0;

}


/* =========================
   FILTER
========================= */

function filterProducts(category) {

    const products =
        document.querySelectorAll(".product");


    let found = 0;


    products.forEach(product => {

        const productCategory =
            product.dataset.category;


        if (
            category === "all" ||
            productCategory === category
        ) {

            product.style.display =
                "";

            found++;

        } else {

            product.style.display =
                "none";

        }

    });


    document
        .getElementById("noResults")
        .hidden = found !== 0;

}


/* =========================
   START
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {


        /* Cart */

        document
            .getElementById("cartButton")
            .addEventListener(
                "click",
                openCart
            );


        document
            .getElementById("closeCart")
            .addEventListener(
                "click",
                closeCart
            );


        document
            .getElementById("overlay")
            .addEventListener(
                "click",
                closeCart
            );


        document
            .getElementById("clearCart")
            .addEventListener(
                "click",
                clearCart
            );


        /* Search */

        document
            .getElementById("searchInput")
            .addEventListener(
                "input",
                searchProducts
            );


        /* Filters */

        const filters =
            document.querySelectorAll(".filter");


        filters.forEach(filter => {

            filter.addEventListener(
                "click",
                () => {

                    filters.forEach(item => {

                        item.classList.remove(
                            "active"
                        );

                    });


                    filter.classList.add(
                        "active"
                    );


                    filterProducts(
                        filter.dataset.filter
                    );

                }
            );

        });

    }
);
