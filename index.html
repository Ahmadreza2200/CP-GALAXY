"use strict";

/* =========================================================
   NOVA SHOP
   Demo E-Commerce JavaScript
========================================================= */

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const STORAGE = {
    cart: "nova_cart",
    favorites: "nova_favorites",
    purchases: "nova_purchases",
    recent: "nova_recent",
    compare: "nova_compare",
    notifications: "nova_notifications",
    account: "nova_account"
};

/* =========================================================
   DATA
========================================================= */

const categories = [
    ["موبایل", "📱"],
    ["لپ‌تاپ", "💻"],
    ["تبلت", "📲"],
    ["هدفون", "🎧"],
    ["ساعت", "⌚"],
    ["گیمینگ", "🎮"],
    ["پوشاک", "👕"],
    ["خانه", "🏠"],
    ["آشپزخانه", "🍳"],
    ["کفش", "👟"],
    ["اسپیکر", "🔊"],
    ["ابزار", "🛠️"]
];

const productTypes = [
    ["موبایل", "📱"],
    ["لپ‌تاپ", "💻"],
    ["تبلت", "📲"],
    ["هدفون", "🎧"],
    ["ساعت", "⌚"],
    ["گیمینگ", "🎮"],
    ["مردانه", "👕"],
    ["زنانه", "👗"],
    ["کفش", "👟"],
    ["خانه", "🏠"],
    ["آشپزخانه", "🍳"],
    ["اسپیکر", "🔊"],
    ["ابزار", "🛠️"],
    ["اکسسوری", "👜"]
];

const nameParts = [
    "Pro",
    "Ultra",
    "Max",
    "Plus",
    "Prime",
    "Air",
    "Elite",
    "X",
    "Neo",
    "Vision",
    "Edge",
    "Nova",
    "One",
    "Power",
    "Smart"
];

const brands = [
    "Nova",
    "Apple",
    "Samsung",
    "Xiaomi",
    "Sony",
    "Lenovo",
    "Asus",
    "LG"
];

const icons = {
    "موبایل": "📱",
    "لپ‌تاپ": "💻",
    "تبلت": "📲",
    "هدفون": "🎧",
    "ساعت": "⌚",
    "گیمینگ": "🎮",
    "مردانه": "👕",
    "زنانه": "👗",
    "کفش": "👟",
    "خانه": "🏠",
    "آشپزخانه": "🍳",
    "اسپیکر": "🔊",
    "ابزار": "🛠️",
    "اکسسوری": "👜"
};

let products = [];
let cart = load(STORAGE.cart, []);
let favorites = load(STORAGE.favorites, []);
let purchases = load(STORAGE.purchases, []);
let recent = load(STORAGE.recent, []);
let compareList = load(STORAGE.compare, []);
let notifications = load(STORAGE.notifications, []);

let currentPage = 1;
const perPage = 20;

let activeCategory = "all";
let searchTerm = "";
let currentSort = "default";
let appliedCoupon = null;
let captcha = "";
let currentPaymentTotal = 0;

let currentHero = 0;
let heroTimer;


/* =========================================================
   STORAGE
========================================================= */

function load(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
}

function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}


/* =========================================================
   PRODUCT GENERATOR
========================================================= */

function generateProducts() {
    const result = [];

    for (let i = 1; i <= 10000; i++) {

        let typeIndex = (i - 1) % productTypes.length;
        let [category, icon] = productTypes[typeIndex];

        let brand = brands[(i - 1) % brands.length];

        let name;

        if (i === 1) {
            name = "iPhone 1000 Pro Max";
        } else {
            const part = nameParts[(i * 7) % nameParts.length];
            name = `${brand} ${category} ${100 + (i % 900)} ${part}`;
        }

        let basePrice;

        if (i === 1) {
            basePrice = 50000000;
        } else {
            const ranges = {
                "موبایل": 12000000,
                "لپ‌تاپ": 28000000,
                "تبلت": 14000000,
                "هدفون": 3500000,
                "ساعت": 5000000,
                "گیمینگ": 9000000,
                "مردانه": 1800000,
                "زنانه": 2200000,
                "کفش": 2800000,
                "خانه": 3200000,
                "آشپزخانه": 2600000,
                "اسپیکر": 3000000,
                "ابزار": 2400000,
                "اکسسوری": 1200000
            };

            const base = ranges[category] || 2000000;

            basePrice =
                base +
                ((i * 7919) % Math.max(base, 10000000));
        }

        let discount = 0;

        /*
           تخفیف‌های دوره‌ای
           هر 4 ساعت مجموعه تخفیف‌ها عوض می‌شود.
        */
        const cycle = Math.floor(Date.now() / (4 * 60 * 60 * 1000));

        if ((i + cycle * 3) % 11 === 0) {
            discount = 10 + ((i * 7) % 31);
        }

        const rating =
            Math.round((3.5 + ((i * 13) % 15) / 10) * 10) / 10;

        const stock =
            ((i * 17) % 40) + 1;

        result.push({
            id: i,
            name,
            category,
            brand,
            icon,
            price: Math.round(basePrice / 1000) * 1000,
            discount,
            rating,
            stock,
            sold: 100 + ((i * 47) % 9000),
            isNew: i > 9700
        });
    }

    return result;
}


/* =========================================================
   FORMAT
========================================================= */

function toman(number) {
    return new Intl.NumberFormat("fa-IR").format(Math.round(number)) + " تومان";
}

function englishNumber(number) {
    return String(number);
}


/* =========================================================
   PRODUCT HELPERS
========================================================= */

function discountedPrice(product) {
    return product.price * (1 - product.discount / 100);
}

function findProduct(id) {
    return products.find(p => p.id === Number(id));
}

function escapeHTML(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}


/* =========================================================
   PRODUCT CARD
========================================================= */

function productCard(product) {

    const isFavorite = favorites.includes(product.id);
    const isCompared = compareList.includes(product.id);

    const price = discountedPrice(product);

    return `
        <article class="product-card" data-id="${product.id}">

            <div class="product-image">

                ${product.discount > 0
                    ? `<span class="discount-badge">${product.discount}% تخفیف</span>`
                    : ""
                }

                <div class="product-actions">

                    <button
                        class="${isFavorite ? "active" : ""}"
                        data-action="favorite"
                        data-id="${product.id}"
                        title="علاقه‌مندی"
                    >
                        ${isFavorite ? "♥" : "♡"}
                    </button>

                    <button
                        class="${isCompared ? "active" : ""}"
                        data-action="compare"
                        data-id="${product.id}"
                        title="مقایسه"
                    >
                        ⇄
                    </button>

                    <button
                        data-action="quick"
                        data-id="${product.id}"
                        title="مشاهده سریع"
                    >
                        👁
                    </button>

                </div>

                <span>${product.icon}</span>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${escapeHTML(product.category)}
                </span>

                <h3 class="product-name">
                    ${escapeHTML(product.name)}
                </h3>

                <div class="rating">
                    ★ ${product.rating}
                    <span>(${Math.floor(product.sold / 7)})</span>
                </div>

                <div class="stock ${product.stock < 5 ? "low" : ""}">
                    ${
                        product.stock < 5
                        ? `فقط ${product.stock} عدد باقی مانده`
                        : "موجود در انبار"
                    }
                </div>

                <div class="price-area">

                    ${
                        product.discount > 0
                        ? `<span class="old-price">${toman(product.price)}</span>`
                        : ""
                    }

                    <span class="new-price">
                        ${toman(price)}
                    </span>

                </div>


                <div class="product-buttons">

                    <button
                        class="add-cart"
                        data-action="cart"
                        data-id="${product.id}"
                    >
                        افزودن به سبد
                    </button>

                    <button
                        class="quick-buy"
                        data-action="buy"
                        data-id="${product.id}"
                        title="خرید سریع"
                    >
                        ⚡
                    </button>

                </div>

            </div>

        </article>
    `;
}


/* =========================================================
   FILTER
========================================================= */

function getFilteredProducts() {

    let result = [...products];

    if (searchTerm) {
        const term = searchTerm.toLowerCase();

        result = result.filter(p =>
            p.name.toLowerCase().includes(term) ||
            p.category.toLowerCase().includes(term) ||
            p.brand.toLowerCase().includes(term)
        );
    }

    if (activeCategory !== "all") {
        result = result.filter(p => p.category === activeCategory);
    }

    const min = Number($("#minPrice")?.value || 0);
    const max = Number($("#maxPrice")?.value || 0);

    if (min > 0) {
        result = result.filter(p => discountedPrice(p) >= min);
    }

    if (max > 0) {
        result = result.filter(p => discountedPrice(p) <= max);
    }

    const ratingFilters = $$(".rating-filter:checked");

    if (ratingFilters.length) {
        const minimum = Math.max(
            ...ratingFilters.map(input => Number(input.value))
        );

        result = result.filter(p => p.rating >= minimum);
    }

    if ($("#discountFilter")?.checked) {
        result = result.filter(p => p.discount > 0);
    }

    if ($("#stockFilter")?.checked) {
        result = result.filter(p => p.stock > 0);
    }

    switch (currentSort) {

        case "cheap":
            result.sort((a, b) =>
                discountedPrice(a) - discountedPrice(b)
            );
            break;

        case "expensive":
            result.sort((a, b) =>
                discountedPrice(b) - discountedPrice(a)
            );
            break;

        case "rating":
            result.sort((a, b) => b.rating - a.rating);
            break;

        case "discount":
            result.sort((a, b) => b.discount - a.discount);
            break;

        case "newest":
            result.sort((a, b) => b.id - a.id);
            break;

        default:
            break;
    }

    return result;
}


/* =========================================================
   RENDER MAIN PRODUCTS
========================================================= */

function renderProducts() {

    const grid = $("#productsGrid");
    if (!grid) return;

    const filtered = getFilteredProducts();

    const totalPages = Math.max(
        1,
        Math.ceil(filtered.length / perPage)
    );

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    const start = (currentPage - 1) * perPage;
    const pageProducts = filtered.slice(start, start + perPage);

    grid.innerHTML = pageProducts.length
        ? pageProducts.map(productCard).join("")
        : `<div class="compare-empty">محصولی پیدا نشد.</div>`;

    $("#productsResultCount").textContent =
        `${new Intl.NumberFormat("fa-IR").format(filtered.length)} محصول`;

    renderPagination(totalPages);
}


/* =========================================================
   PAGINATION
========================================================= */

function renderPagination(totalPages) {

    const box = $("#pagination");
    if (!box) return;

    let html = "";

    if (totalPages <= 1) {
        box.innerHTML = "";
        return;
    }

    const start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);

    if (currentPage > 1) {
        html += `
            <button data-page="${currentPage - 1}">
                ‹
            </button>
        `;
    }

    for (let i = start; i <= end; i++) {
        html += `
            <button
                class="${i === currentPage ? "active" : ""}"
                data-page="${i}"
            >
                ${i}
            </button>
        `;
    }

    if (currentPage < totalPages) {
        html += `
            <button data-page="${currentPage + 1}">
                ›
            </button>
        `;
    }

    box.innerHTML = html;
}


/* =========================================================
   CATEGORIES
========================================================= */

function renderCategories() {

    const grid = $("#categoriesGrid");
    if (!grid) return;

    grid.innerHTML = categories.map(([name, icon]) => `
        <button
            class="category-card"
            data-category-card="${escapeHTML(name)}"
        >
            <span class="category-icon">${icon}</span>
            <strong>${escapeHTML(name)}</strong>
        </button>
    `).join("");

    const filters = $("#categoryFilters");

    if (filters) {
        filters.innerHTML = `
            <button
                class="${activeCategory === "all" ? "active" : ""}"
                data-filter-category="all"
            >
                همه محصولات
            </button>
        ` + categories.map(([name]) => `
            <button
                class="${activeCategory === name ? "active" : ""}"
                data-filter-category="${escapeHTML(name)}"
            >
                ${escapeHTML(name)}
            </button>
        `).join("");
    }
}


/* =========================================================
   SPECIAL PRODUCT SECTIONS
========================================================= */

function renderSectionProducts() {

    const discountProducts = [...products]
        .filter(p => p.discount > 0)
        .sort((a, b) => b.discount - a.discount)
        .slice(0, 8);

    $("#flashProducts").innerHTML =
        discountProducts.map(productCard).join("");


    const best = [...products]
        .sort((a, b) => b.sold - a.sold)
        .slice(0, 8);

    $("#bestSellerProducts").innerHTML =
        best.map(productCard).join("");


    const rated = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 8);

    $("#topRatedProducts").innerHTML =
        rated.map(productCard).join("");


    const newest = [...products]
        .filter(p => p.isNew)
        .slice(0, 8);

    $("#newProductsGrid").innerHTML =
        newest.map(productCard).join("");


    renderRecentlyViewed();
}


/* =========================================================
   RECENT
========================================================= */

function addRecent(id) {

    id = Number(id);

    recent = recent.filter(x => x !== id);
    recent.unshift(id);

    recent = recent.slice(0, 8);

    save(STORAGE.recent, recent);
}

function renderRecentlyViewed() {

    const grid = $("#recentlyViewedGrid");
    if (!grid) return;

    const list = recent
        .map(id => findProduct(id))
        .filter(Boolean);

    if (!list.length) {
        grid.innerHTML = `
            <div class="compare-empty">
                هنوز محصولی مشاهده نکرده‌اید.
            </div>
        `;
        return;
    }

    grid.innerHTML = list.map(productCard).join("");
}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

    id = Number(id);

    if (favorites.includes(id)) {
        favorites = favorites.filter(x => x !== id);
        showToast("از علاقه‌مندی‌ها حذف شد");
    } else {
        favorites.push(id);
        showToast("به علاقه‌مندی‌ها اضافه شد", "success");
    }

    save(STORAGE.favorites, favorites);
    updateCounts();
    refreshVisibleCards();
}

function showFavorites() {

    const list = favorites
        .map(id => findProduct(id))
        .filter(Boolean);

    $("#productsGrid").innerHTML =
        list.length
        ? list.map(productCard).join("")
        : `<div class="compare-empty">هنوز محصولی در علاقه‌مندی‌ها نیست.</div>`;

    $("#productsTitle").textContent = "علاقه‌مندی‌های من";
    $("#productsKicker").textContent = "ذخیره‌شده‌ها";
    $("#productsResultCount").textContent =
        `${list.length} محصول`;
}


/* =========================================================
   COMPARE
========================================================= */

function toggleCompare(id) {

    id = Number(id);

    if (compareList.includes(id)) {
        compareList = compareList.filter(x => x !== id);
        showToast("از مقایسه حذف شد");
    } else {

        if (compareList.length >= 4) {
            showToast("حداکثر ۴ محصول قابل مقایسه است", "error");
            return;
        }

        compareList.push(id);
        showToast("به مقایسه اضافه شد", "success");
    }

    save(STORAGE.compare, compareList);
    updateCounts();
    refreshVisibleCards();
}

function renderCompare() {

    const box = $("#compareContent");

    const list = compareList
        .map(id => findProduct(id))
        .filter(Boolean);

    if (!list.length) {
        box.innerHTML = `
            <div class="compare-empty">
                محصولی برای مقایسه انتخاب نشده است.
            </div>
        `;
        return;
    }

    box.innerHTML = `
        <table class="compare-table">

            <tr>
                <th>ویژگی</th>
                ${list.map(p => `<th>${escapeHTML(p.name)}</th>`).join("")}
            </tr>

            <tr>
                <td>دسته</td>
                ${list.map(p => `<td>${p.category}</td>`).join("")}
            </tr>

            <tr>
                <td>برند</td>
                ${list.map(p => `<td>${p.brand}</td>`).join("")}
            </tr>

            <tr>
                <td>امتیاز</td>
                ${list.map(p => `<td>★ ${p.rating}</td>`).join("")}
            </tr>

            <tr>
                <td>تخفیف</td>
                ${list.map(p => `<td>${p.discount}%</td>`).join("")}
            </tr>

            <tr>
                <td>قیمت</td>
                ${list.map(p => `<td>${toman(discountedPrice(p))}</td>`).join("")}
            </tr>

        </table>
    `;
}


/* =========================================================
   CART
========================================================= */

function addToCart(id, quantity = 1) {

    id = Number(id);

    const product = findProduct(id);
    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({
            id,
            quantity
        });
    }

    save(STORAGE.cart, cart);
    updateCounts();
    renderCart();

    showToast(
        `${product.name} به سبد خرید اضافه شد`,
        "success"
    );
}

function changeQuantity(id, amount) {

    const item = cart.find(x => x.id === Number(id));
    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {
        cart = cart.filter(x => x.id !== Number(id));
    }

    save(STORAGE.cart, cart);
    updateCounts();
    renderCart();
}

function cartSubtotal() {

    return cart.reduce((sum, item) => {

        const product = findProduct(item.id);

        if (!product) return sum;

        return sum +
            discountedPrice(product) * item.quantity;

    }, 0);
}

function calculateDiscount(subtotal) {

    if (!appliedCoupon) return 0;

    if (appliedCoupon === "NOVA10") {
        return subtotal * .10;
    }

    if (appliedCoupon === "NOVA5") {
        return subtotal * .05;
    }

    return 0;
}

function selectedShipping() {

    const selected =
        $('input[name="shipping"]:checked');

    return Number(selected?.value || 0);
}

function calculateCartTotal() {

    const subtotal = cartSubtotal();
    const discount = calculateDiscount(subtotal);
    const shipping = cart.length ? selectedShipping() : 0;

    return Math.max(
        0,
        subtotal - discount + shipping
    );
}

function renderCart() {

    const box = $("#cartItems");
    const empty = $("#cartEmpty");

    if (!cart.length) {

        box.innerHTML = "";
        empty.classList.add("show");

    } else {

        empty.classList.remove("show");

        box.innerHTML = cart.map(item => {

            const p = findProduct(item.id);
            if (!p) return "";

            return `
                <div class="cart-item">

                    <div class="cart-item-image">
                        ${p.icon}
                    </div>

                    <div>

                        <div class="cart-item-name">
                            ${escapeHTML(p.name)}
                        </div>

                        <div class="cart-item-price">
                            ${toman(discountedPrice(p))}
                        </div>

                        <div class="quantity-control">

                            <button
                                data-cart-action="plus"
                                data-id="${p.id}"
                            >
                                +
                            </button>

                            <span>${item.quantity}</span>

                            <button
                                data-cart-action="minus"
                                data-id="${p.id}"
                            >
                                −
                            </button>

                        </div>

                    </div>

                    <button
                        class="remove-item"
                        data-cart-action="remove"
                        data-id="${p.id}"
                    >
                        ×
                    </button>

                </div>
            `;

        }).join("");
    }

    const subtotal = cartSubtotal();
    const discount = calculateDiscount(subtotal);
    const shipping = cart.length ? selectedShipping() : 0;
    const total = subtotal - discount + shipping;

    $("#cartSubtotal").textContent = toman(subtotal);
    $("#cartDiscount").textContent = discount
        ? `− ${toman(discount)}`
        : "۰ تومان";
    $("#cartShipping").textContent = toman(shipping);
    $("#cartTotal").textContent = toman(total);
}


/* =========================================================
   COUPON
========================================================= */

function applyCoupon() {

    const input = $("#couponInput");
    const code = input.value.trim().toUpperCase();

    if (code === "NOVA10" || code === "NOVA5") {

        appliedCoupon = code;

        showToast(
            code === "NOVA10"
                ? "کد ۱۰٪ با موفقیت اعمال شد"
                : "کد ۵٪ با موفقیت اعمال شد",
            "success"
        );

        renderCart();

    } else {

        appliedCoupon = null;
        showToast(
            "کد تخفیف معتبر نیست",
            "error"
        );
    }
}


/* =========================================================
   QUICK VIEW
========================================================= */

function openQuickView(id) {

    const p = findProduct(id);
    if (!p) return;

    addRecent(p.id);

    $("#quickViewContent").innerHTML = `

        <div class="quick-product">

            <div class="quick-product-image">
                ${p.icon}
            </div>

            <div class="quick-product-info">

                <span class="section-kicker">
                    ${escapeHTML(p.category)}
                </span>

                <h2>
                    ${escapeHTML(p.name)}
                </h2>

                <div class="rating">
                    ★ ${p.rating}
                </div>

                <p>
                    این محصول یک نمونه نمایشی در فروشگاه
                    Nova Shop است.
                </p>

                <div class="quick-specs">
                    برند: ${p.brand}<br>
                    موجودی: ${p.stock} عدد<br>
                    فروش: ${p.sold} عدد
                </div>

                <div class="price-area">
                    ${
                        p.discount
                        ? `<span class="old-price">${toman(p.price)}</span>`
                        : ""
                    }

                    <span class="new-price">
                        ${toman(discountedPrice(p))}
                    </span>
                </div>

                <button
                    class="primary-button full-button"
                    data-action="cart"
                    data-id="${p.id}"
                >
                    افزودن به سبد خرید
                </button>

            </div>

        </div>
    `;

    openModal("quickViewModal");
    renderRecentlyViewed();
}


/* =========================================================
   QUICK BUY
========================================================= */

function quickBuy(id) {

    cart = [{
        id: Number(id),
        quantity: 1
    }];

    save(STORAGE.cart, cart);

    appliedCoupon = null;

    renderCart();
    openDrawer("cartDrawer");
}


/* =========================================================
   PAYMENT
========================================================= */

function openPayment() {

    if (!cart.length) {
        showToast("سبد خرید شما خالی است", "error");
        return;
    }

    currentPaymentTotal = calculateCartTotal();

    $("#paymentAmount").textContent =
        toman(currentPaymentTotal);

    createCaptcha();

    $("#paymentError").textContent = "";

    closeDrawer("cartDrawer");
    openModal("paymentModal");
}

function createCaptcha() {

    captcha =
        String(Math.floor(10000 + Math.random() * 90000));

    $("#captchaCode").textContent = captcha;
    $("#captchaInput").value = "";
}

function validatePayment() {

    const card =
        $("#cardNumber").value.replace(/\s/g, "");

    const expiry =
        $("#cardExpiry").value.trim();

    const cvv =
        $("#cardCvv").value.trim();

    const entered =
        $("#captchaInput").value.trim();

    if (!/^\d{16}$/.test(card)) {
        return "شماره کارت باید ۱۶ رقم باشد.";
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
        return "تاریخ انقضا را به شکل MM/YY وارد کنید.";
    }

    if (!/^\d{3,4}$/.test(cvv)) {
        return "CVV2 صحیح نیست.";
    }

    if (entered !== captcha) {
        return "کد تأیید اشتباه است.";
    }

    return "";
}

function completePayment() {

    const error = validatePayment();

    if (error) {
        $("#paymentError").textContent = error;
        return;
    }

    const orderNumber =
        "NOVA-" +
        String(Date.now()).slice(-8);

    const order = {
        orderNumber,
        date: new Date().toLocaleString("fa-IR"),
        status: "ثبت موفق",
        total: currentPaymentTotal,
        items: cart.map(item => {

            const p = findProduct(item.id);

            return {
                id: p.id,
                name: p.name,
                icon: p.icon,
                price: discountedPrice(p),
                quantity: item.quantity
            };

        })
    };

    purchases.unshift(order);

    save(STORAGE.purchases, purchases);

    cart = [];

    save(STORAGE.cart, cart);

    appliedCoupon = null;

    $("#cardNumber").value = "";
    $("#cardExpiry").value = "";
    $("#cardCvv").value = "";
    $("#captchaInput").value = "";

    $("#successOrderNumber").textContent =
        orderNumber;

    $("#successOrderTotal").textContent =
        toman(order.total);

    closeModal("paymentModal");
    renderCart();
    updateCounts();

    openModal("successModal");
}


/* =========================================================
   PURCHASES
========================================================= */

function renderPurchases() {

    const box = $("#purchasesList");

    if (!purchases.length) {

        box.innerHTML = `
            <div class="compare-empty">
                هنوز سفارشی ثبت نشده است.
            </div>
        `;

        return;
    }

    box.innerHTML = purchases.map(order => `

        <div class="purchase-card">

            <div class="purchase-top">

                <span class="purchase-number">
                    ${order.orderNumber}
                </span>

                <span class="purchase-status">
                    ${order.status}
                </span>

            </div>

            ${order.items.map(item => `

                <div class="purchase-product">

                    <div class="purchase-product-icon">
                        ${item.icon}
                    </div>

                    <div>
                        <strong>
                            ${escapeHTML(item.name)}
                        </strong>

                        <small>
                            × ${item.quantity}
                        </small>
                    </div>

                </div>

            `).join("")}

            <div class="purchase-total">
                ${toman(order.total)}
            </div>

        </div>

    `).join("");
}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function renderNotifications() {

    const box = $("#notificationsList");

    const defaults = [
        {
            icon: "⚡",
            title: "پیشنهاد ویژه",
            text: "تخفیف‌های ویژه Nova هر چند ساعت تغییر می‌کنند."
        },
        {
            icon: "🛒",
            title: "سبد خرید",
            text: "محصولات مورد علاقه‌ات را به سبد اضافه کن."
        },
        {
            icon: "🎟️",
            title: "کد تخفیف",
            text: "کد NOVA10 برای نسخه نمایشی فعال است."
        }
    ];

    box.innerHTML = defaults.map(n => `

        <div class="notification-item">

            <div class="notification-icon">
                ${n.icon}
            </div>

            <div>
                <h4>${n.title}</h4>
                <p>${n.text}</p>
            </div>

        </div>

    `).join("");
}


/* =========================================================
   MODALS
========================================================= */

function openModal(id) {

    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeModal(id) {

    const modal = document.getElementById(id);
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    if (!document.querySelector(".modal.open") &&
        !document.querySelector(".drawer.open")) {

        document.body.style.overflow = "";
    }
}

function openDrawer(id) {

    const drawer = document.getElementById(id);
    if (!drawer) return;

    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeDrawer(id) {

    const drawer = document.getElementById(id);
    if (!drawer) return;

    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");

    if (!document.querySelector(".modal.open")) {
        document.body.style.overflow = "";
    }
}


/* =========================================================
   COUNTS
========================================================= */

function updateCounts() {

    $("#cartCount").textContent =
        cart.reduce((sum, item) => sum + item.quantity, 0);

    $("#mobileCartCount").textContent =
        cart.reduce((sum, item) => sum + item.quantity, 0);

    $("#favoritesCount").textContent =
        favorites.length;

    $("#compareCount").textContent =
        compareList.length;
}


/* =========================================================
   REFRESH
========================================================= */

function refreshVisibleCards() {

    renderProducts();
    renderSectionProducts();
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message, type = "") {

    const container = $("#toastContainer");

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.textContent = message;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";

        setTimeout(() => toast.remove(), 250);
    }, 2500);
}


/* =========================================================
   HERO
========================================================= */

function setupHero() {

    const slides = $$(".hero-slide");
    const dots = $("#sliderDots");

    dots.innerHTML = slides.map((_, i) => `
        <button
            class="${i === 0 ? "active" : ""}"
            data-slide="${i}"
        ></button>
    `).join("");

    function showSlide(index) {

        currentHero =
            (index + slides.length) % slides.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle(
                "active",
                i === currentHero
            );
        });

        $$("#sliderDots button").forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === currentHero
            );
        });
    }

    $("#heroNext").addEventListener(
        "click",
        () => showSlide(currentHero + 1)
    );

    $("#heroPrev").addEventListener(
        "click",
        () => showSlide(currentHero - 1)
    );

    dots.addEventListener("click", e => {

        const button = e.target.closest("[data-slide]");

        if (!button) return;

        showSlide(Number(button.dataset.slide));
    });

    heroTimer = setInterval(() => {
        showSlide(currentHero + 1);
    }, 6000);
}


/* =========================================================
   COUNTDOWN
========================================================= */

function setupCountdown() {

    function tick() {

        const interval =
            4 * 60 * 60 * 1000;

        const now = Date.now();

        const next =
            Math.ceil(now / interval) * interval;

        let remaining = next - now;

        const hours =
            Math.floor(remaining / 3600000);

        remaining %= 3600000;

        const minutes =
            Math.floor(remaining / 60000);

        const seconds =
            Math.floor((remaining % 60000) / 1000);

        $("#countdownHours").textContent =
            String(hours).padStart(2, "0");

        $("#countdownMinutes").textContent =
            String(minutes).padStart(2, "0");

        $("#countdownSeconds").textContent =
            String(seconds).padStart(2, "0");

        if (remaining <= 1000) {
            products = generateProducts();
            renderSectionProducts();
        }
    }

    tick();

    setInterval(tick, 1000);
}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const input = $("#searchInput");
    const suggestions = $("#searchSuggestions");
    const clear = $("#clearSearch");

    input.addEventListener("input", () => {

        searchTerm = input.value.trim();

        clear.style.display =
            searchTerm ? "block" : "none";

        if (!searchTerm) {
            suggestions.classList.remove("show");
            currentPage = 1;
            renderProducts();
            return;
        }

        const matches = products
            .filter(p =>
                p.name.toLowerCase()
                    .includes(searchTerm.toLowerCase())
            )
            .slice(0, 6);

        suggestions.innerHTML =
            matches.map(p => `
                <div
                    class="suggestion"
                    data-suggestion="${p.id}"
                >
                    <div class="suggestion-icon">
                        ${p.icon}
                    </div>

                    <div>
                        <strong>
                            ${escapeHTML(p.name)}
                        </strong>

                        <small>
                            ${p.category}
                        </small>
                    </div>
                </div>
            `).join("");

        suggestions.classList.toggle(
            "show",
            matches.length > 0
        );
    });

    clear.addEventListener("click", () => {
        input.value = "";
        searchTerm = "";
        clear.style.display = "none";
        suggestions.classList.remove("show");
        currentPage = 1;
        renderProducts();
    });

    $("#searchForm").addEventListener("submit", e => {
        e.preventDefault();

        searchTerm = input.value.trim();

        currentPage = 1;

        renderProducts();

        suggestions.classList.remove("show");

        $("#productsTitle").textContent =
            searchTerm
            ? `نتایج جستجو برای «${searchTerm}»`
            : "همه محصولات";

        document
            .querySelector(".products-section")
            ?.scrollIntoView({ behavior: "smooth" });
    });
}


/* =========================================================
   EVENTS
========================================================= */

document.addEventListener("click", e => {

    /* Product actions */

    const action = e.target.closest("[data-action]");

    if (action) {

        const id = Number(action.dataset.id);

        switch (action.dataset.action) {

            case "favorite":
                toggleFavorite(id);
                break;

            case "compare":
                toggleCompare(id);
                break;

            case "quick":
                openQuickView(id);
                break;

            case "cart":
                addToCart(id);
                break;

            case "buy":
                quickBuy(id);
                break;
        }

        return;
    }


    /* Cart actions */

    const cartAction =
        e.target.closest("[data-cart-action]");

    if (cartAction) {

        const id =
            Number(cartAction.dataset.id);

        const type =
            cartAction.dataset.cartAction;

        if (type === "plus") {
            changeQuantity(id, 1);
        }

        if (type === "minus") {
            changeQuantity(id, -1);
        }

        if (type === "remove") {
            cart = cart.filter(x => x.id !== id);
            save(STORAGE.cart, cart);
            updateCounts();
            renderCart();
        }

        return;
    }


    /* Pagination */

    const page =
        e.target.closest("[data-page]");

    if (page) {

        currentPage =
            Number(page.dataset.page);

        renderProducts();

        document
            .querySelector(".products-section")
            ?.scrollIntoView({ behavior: "smooth" });
    }


    /* Category */

    const category =
        e.target.closest("[data-category-card]");

    if (category) {

        activeCategory =
            category.dataset.categoryCard;

        currentPage = 1;

        renderCategories();
        renderProducts();

        $("#productsTitle").textContent =
            activeCategory;

        document
            .querySelector(".products-section")
            ?.scrollIntoView({ behavior: "smooth" });
    }


    const filterCategory =
        e.target.closest("[data-filter-category]");

    if (filterCategory) {

        activeCategory =
            filterCategory.dataset.filterCategory;

        currentPage = 1;

        renderCategories();
        renderProducts();
    }


    /* Suggestion */

    const suggestion =
        e.target.closest("[data-suggestion]");

    if (suggestion) {

        const product =
            findProduct(suggestion.dataset.suggestion);

        if (product) {
            openQuickView(product.id);
        }

        $("#searchSuggestions").classList.remove("show");
    }


    /* Scroll */

    const scroll =
        e.target.closest("[data-scroll]");

    if (scroll) {

        const target =
            document.querySelector(scroll.dataset.scroll);

        target?.scrollIntoView({
            behavior: "smooth"
        });
    }


    /* Modal close */

    const close =
        e.target.closest("[data-close]");

    if (close) {

        const id =
            close.dataset.close;

        if (id === "cartDrawer") {
            closeDrawer(id);
        } else {
            closeModal(id);
        }
    }


    /* Modal overlay */

    if (e.target.classList.contains("modal-overlay")) {

        const modal =
            e.target.closest(".modal");

        if (modal) {
            closeModal(modal.id);
        }
    }

    if (e.target.classList.contains("drawer-overlay")) {

        const drawer =
            e.target.closest(".drawer");

        if (drawer) {
            closeDrawer(drawer.id);
        }
    }


    /* Dashboard */

    const dashboard =
        e.target.closest("[data-dashboard]");

    if (dashboard) {

        const type =
            dashboard.dataset.dashboard;

        if (type === "purchases") {
            closeModal("dashboardModal");
            renderPurchases();
            openModal("purchasesModal");
        }

        if (type === "favorites") {
            closeModal("dashboardModal");
            showFavorites();
            document
                .querySelector(".products-section")
                ?.scrollIntoView({ behavior: "smooth" });
        }

        if (type === "compare") {
            closeModal("dashboardModal");
            renderCompare();
            openModal("compareModal");
        }

        if (type === "recent") {
            closeModal("dashboardModal");
            $("#recentlySection")
                ?.scrollIntoView({ behavior: "smooth" });
        }

        if (type === "notifications") {
            closeModal("dashboardModal");
            renderNotifications();
            openModal("notificationsModal");
        }

        if (type === "orders") {
            closeModal("dashboardModal");
            renderPurchases();
            openModal("purchasesModal");
        }

        if (type === "coupons") {
            showToast("کدهای فعال: NOVA10 و NOVA5", "success");
        }

        if (type === "profile") {
            showToast("بخش اطلاعات حساب نمایشی است");
        }
    }


    /* Brands */

    const brand =
        e.target.closest("[data-brand]");

    if (brand) {

        searchTerm = brand.dataset.brand;

        $("#searchInput").value =
            searchTerm;

        currentPage = 1;

        renderProducts();

        $("#productsTitle").textContent =
            `محصولات ${searchTerm}`;

        document
            .querySelector(".products-section")
            ?.scrollIntoView({ behavior: "smooth" });
    }


    /* Mobile navigation */

    const mobile =
        e.target.closest("[data-mobile-nav]");

    if (mobile) {

        const type =
            mobile.dataset.mobileNav;

        if (type === "home") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if (type === "categories") {
            $("#megaMenu").classList.toggle("open");
        }

        if (type === "search") {
            $("#searchInput").focus();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if (type === "favorites") {
            showFavorites();
            document
                .querySelector(".products-section")
                ?.scrollIntoView({ behavior: "smooth" });
        }

        if (type === "cart") {
            renderCart();
            openDrawer("cartDrawer");
        }
    }
});


/* =========================================================
   HEADER BUTTONS
========================================================= */

$("#cartButton").addEventListener("click", () => {
    renderCart();
    openDrawer("cartDrawer");
});

$("#favoritesButton").addEventListener("click", () => {
    showFavorites();
    document
        .querySelector(".products-section")
        ?.scrollIntoView({ behavior: "smooth" });
});

$("#compareButton").addEventListener("click", () => {
    renderCompare();
    openModal("compareModal");
});

$("#accountButton").addEventListener("click", () => {

    const account =
        load(STORAGE.account, null);

    if (account) {
        $("#dashboardUser").textContent =
            account.email;

        openModal("dashboardModal");
    } else {
        openModal("accountModal");
    }
});

$("#categoriesButton").addEventListener("click", () => {
    $("#megaMenu").classList.toggle("open");
});

$("#heroShopButton").addEventListener("click", () => {
    document
        .querySelector(".products-section")
        ?.scrollIntoView({ behavior: "smooth" });
});

$("#allCategoriesButton").addEventListener("click", () => {
    activeCategory = "all";
    currentPage = 1;
    renderCategories();
    renderProducts();

    document
        .querySelector(".products-section")
        ?.scrollIntoView({ behavior: "smooth" });
});

$("#openFilters").addEventListener("click", () => {
    $("#filtersPanel").classList.add("open");
});

$("#closeFilters").addEventListener("click", () => {
    $("#filtersPanel").classList.remove("open");
});


/* =========================================================
   FILTER EVENTS
========================================================= */

$("#sortSelect").addEventListener("change", e => {

    currentSort = e.target.value;
    currentPage = 1;

    renderProducts();
});

["minPrice", "maxPrice"].forEach(id => {

    $("#" + id).addEventListener("input", () => {
        currentPage = 1;
        renderProducts();
    });

});

$("#discountFilter").addEventListener("change", () => {
    currentPage = 1;
    renderProducts();
});

$("#stockFilter").addEventListener("change", () => {
    currentPage = 1;
    renderProducts();
});

$$(".rating-filter").forEach(input => {

    input.addEventListener("change", () => {
        currentPage = 1;
        renderProducts();
    });

});

$("#resetFilters").addEventListener("click", () => {

    activeCategory = "all";

    $("#minPrice").value = "";
    $("#maxPrice").value = "";

    $("#discountFilter").checked = false;
    $("#stockFilter").checked = false;

    $$(".rating-filter").forEach(x => {
        x.checked = false;
    });

    $("#sortSelect").value = "default";

    currentSort = "default";
    currentPage = 1;

    renderCategories();
    renderProducts();
});


/* =========================================================
   CART EVENTS
========================================================= */

$("#applyCoupon").addEventListener(
    "click",
    applyCoupon
);

$$('input[name="shipping"]').forEach(input => {

    input.addEventListener("change", renderCart);

});

$("#checkoutButton").addEventListener(
    "click",
    openPayment
);


/* =========================================================
   PAYMENT EVENTS
========================================================= */

$("#refreshCaptcha").addEventListener(
    "click",
    createCaptcha
);

$("#paymentForm").addEventListener(
    "submit",
    e => {
        e.preventDefault();
        completePayment();
    }
);


/* =========================================================
   ACCOUNT
========================================================= */

$("#accountForm").addEventListener(
    "submit",
    e => {

        e.preventDefault();

        const email =
            $("#accountEmail").value.trim();

        save(STORAGE.account, {
            email
        });

        $("#dashboardUser").textContent =
            email;

        closeModal("accountModal");

        openModal("dashboardModal");

        showToast(
            "ورود نمایشی با موفقیت انجام شد",
            "success"
        );
    }
);


/* =========================================================
   PURCHASES
========================================================= */

$("#viewPurchasesButton").addEventListener(
    "click",
    () => {

        closeModal("successModal");

        renderPurchases();

        openModal("purchasesModal");
    }
);


/* =========================================================
   NEWSLETTER
========================================================= */

$("#newsletterForm").addEventListener(
    "submit",
    e => {

        e.preventDefault();

        showToast(
            "ایمیل شما در نسخه نمایشی ثبت شد",
            "success"
        );

        $("#newsletterEmail").value = "";
    }
);


/* =========================================================
   FOOTER
========================================================= */

$("#footerAccount").addEventListener(
    "click",
    () => $("#accountButton").click()
);

$("#footerPurchases").addEventListener(
    "click",
    () => {

        renderPurchases();
        openModal("purchasesModal");
    }
);

$("#footerFavorites").addEventListener(
    "click",
    () => {

        showFavorites();

        document
            .querySelector(".products-section")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    }
);

$("#footerCart").addEventListener(
    "click",
    () => {

        renderCart();
        openDrawer("cartDrawer");
    }
);


/* =========================================================
   HELP
========================================================= */

$$('[data-open="helpModal"]').forEach(button => {

    button.addEventListener("click", () => {
        openModal("helpModal");
    });

});

$$('[data-open="notificationsModal"]').forEach(button => {

    button.addEventListener("click", () => {
        renderNotifications();
        openModal("notificationsModal");
    });

});

$$('[data-open="ordersModal"]').forEach(button => {

    button.addEventListener("click", () => {
        renderPurchases();
        openModal("purchasesModal");
    });

});


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", e => {

    if (e.key !== "Escape") return;

    $$(".modal.open").forEach(modal => {
        closeModal(modal.id);
    });

    $$(".drawer.open").forEach(drawer => {
        closeDrawer(drawer.id);
    });

    $("#megaMenu").classList.remove("open");
});


/* =========================================================
   INIT
========================================================= */

function init() {

    products = generateProducts();

    renderCategories();

    renderProducts();

    renderSectionProducts();

    renderCart();

    renderPurchases();

    renderNotifications();

    updateCounts();

    setupHero();

    setupCountdown();

    setupSearch();

    /*
       جلوگیری از نمایش Loading طولانی
    */
    setTimeout(() => {
        $("#loadingScreen")?.classList.add("hidden");
    }, 700);

    console.log(
        "Nova Shop initialized:",
        products.length,
        "products"
    );
}

init();
