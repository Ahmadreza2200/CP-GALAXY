document.addEventListener("DOMContentLoaded", () => {

    let cart = [];

    const cartPanel =
        document.getElementById("cartPanel");

    const overlay =
        document.getElementById("overlay");

    const checkoutModal =
        document.getElementById("checkoutModal");

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    const checkoutTotal =
        document.getElementById("checkoutTotal");

    const checkoutBtn =
        document.getElementById("checkoutBtn");


    /* ================= OPEN CART ================= */

    function openCart() {

        cartPanel.classList.add("active");
        overlay.classList.add("active");

        document.body.style.overflow = "hidden";
    }


    /* ================= CLOSE CART ================= */

    function closeCart() {

        cartPanel.classList.remove("active");
        overlay.classList.remove("active");

        if (!checkoutModal.classList.contains("active")) {
            document.body.style.overflow = "";
        }
    }


    /* ================= ADD PRODUCT ================= */

    function addProduct(name, price) {

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


    /* ================= UPDATE CART ================= */

    function updateCart() {

        cartItems.innerHTML = "";

        let total = 0;
        let count = 0;


        if (cart.length === 0) {

            cartItems.innerHTML = `
                <div class="empty-cart">
                    <div>🛒</div>
                    <p>سبد خرید خالی است</p>
                </div>
            `;

        } else {

            cart.forEach((item, index) => {

                const itemTotal =
                    item.price * item.quantity;

                total += itemTotal;

                count += item.quantity;


                const element =
                    document.createElement("div");

                element.className = "cart-item";


                element.innerHTML = `

                    <div>

                        <h3>
                            ${item.name}
                        </h3>

                        <div class="cart-item-price">
                            ${item.price.toLocaleString("en-US")}
                            تومان
                        </div>


                        <div class="quantity">

                            <button
                                data-action="plus"
                                data-index="${index}">
                                +
                            </button>

                            <strong>
                                ${item.quantity}
                            </strong>

                            <button
                                data-action="minus"
                                data-index="${index}">
                                −
                            </button>

                        </div>

                    </div>


                    <button
                        class="remove-item"
                        data-action="remove"
                        data-index="${index}">

                        حذف

                    </button>
                `;


                cartItems.appendChild(element);

            });

        }


        cartCount.textContent = count;

        cartTotal.textContent =
            total.toLocaleString("en-US") +
            " تومان";

        checkoutTotal.textContent =
            total.toLocaleString("en-US") +
            " تومان";


        checkoutBtn.disabled =
            cart.length === 0;
    }


    /* ================= CART BUTTONS ================= */

    cartItems.addEventListener("click", (event) => {

        const button =
            event.target.closest("button");

        if (!button) return;


        const index =
            Number(button.dataset.index);

        const action =
            button.dataset.action;


        if (action === "plus") {

            cart[index].quantity++;

        }


        if (action === "minus") {

            cart[index].quantity--;

            if (cart[index].quantity <= 0) {

                cart.splice(index, 1);

            }

        }


        if (action === "remove") {

            cart.splice(index, 1);

        }


        updateCart();
    });


    /* ================= PRODUCT BUTTONS ================= */

    document.querySelectorAll(".add-button")
        .forEach(button => {

            button.addEventListener("click", () => {

                const name =
                    button.dataset.name;

                const price =
                    Number(button.dataset.price);

                addProduct(name, price);

            });

        });


    /* ================= CART OPEN/CLOSE ================= */

    document
        .getElementById("openCartBtn")
        .addEventListener("click", openCart);


    document
        .getElementById("heroCartBtn")
        .addEventListener("click", openCart);


    document
        .getElementById("closeCartBtn")
        .addEventListener("click", closeCart);


    overlay.addEventListener("click", closeCart);


    /* ================= ESC KEY ================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            checkoutModal.classList.remove("active");

            closeCart();

            document.body.style.overflow = "";

        }

    });


    /* ================= CHECKOUT ================= */

    checkoutBtn.addEventListener("click", () => {

        if (cart.length === 0) return;

        checkoutModal.classList.add("active");

        document.body.style.overflow = "hidden";

    });


    document
        .getElementById("closeCheckoutBtn")
        .addEventListener("click", () => {

            checkoutModal.classList.remove("active");

            document.body.style.overflow = "";

        });


    /* ================= CARD FORMAT ================= */

    const cardInput =
        document.getElementById("demoCard");


    cardInput.addEventListener("input", () => {

        let value =
            cardInput.value
                .replace(/\D/g, "")
                .slice(0, 16);


        let result = "";

        for (let i = 0; i < value.length; i++) {

            if (i > 0 && i % 4 === 0) {
                result += " ";
            }

            result += value[i];
        }

        cardInput.value = result;

    });


    /* ================= OTP ================= */

    const otpInputs =
        document.querySelectorAll(".otp");


    otpInputs.forEach((input, index) => {

        input.addEventListener("input", () => {

            input.value =
                input.value.replace(/\D/g, "");

            if (
                input.value &&
                index < otpInputs.length - 1
            ) {

                otpInputs[index + 1].focus();

            }

        });


        input.addEventListener("keydown", (event) => {

            if (
                event.key === "Backspace" &&
                !input.value &&
                index > 0
            ) {

                otpInputs[index - 1].focus();

            }

        });

    });


    /* ================= DEMO PAYMENT ================= */

    document
        .getElementById("demoPayBtn")
        .addEventListener("click", () => {

            const result =
                document.getElementById("paymentResult");


            if (cart.length === 0) {

                result.textContent =
                    "سبد خرید خالی است.";

                return;
            }


            result.textContent =
                "✓ پرداخت نمایشی با موفقیت ثبت شد.";

        });


    /* ================= SEARCH ================= */

    const searchInput =
        document.getElementById("productSearch");


    const productCards =
        document.querySelectorAll(".product-card");


    function filterProducts() {

        const search =
            searchInput.value
                .trim()
                .toLowerCase();


        const activeFilter =
            document.querySelector(".filter-btn.active")
                .dataset.filter;


        productCards.forEach(card => {

            const name =
                card.dataset.name.toLowerCase();

            const category =
                card.dataset.category;


            const searchOK =
                name.includes(search) ||
                "cp".includes(search);


            const filterOK =
                activeFilter === "all" ||
                category === activeFilter;


            if (searchOK && filterOK) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    }


    searchInput.addEventListener(
        "input",
        filterProducts
    );


    /* ================= FILTER BUTTONS ================= */

    document.querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document
                    .querySelectorAll(".filter-btn")
                    .forEach(btn => {

                        btn.classList.remove("active");

                    });


                button.classList.add("active");

                filterProducts();

            });

        });


    /* ================= INITIAL ================= */

    updateCart();

});
