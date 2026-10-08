const products = [

    {
        id:1,
        cp:80,
        name:"80 CP",
        price:"۹۹,۰۰۰ تومان",
        type:"cheap",
        tag:"اقتصادی",
        desc:"بسته کوچک و اقتصادی."
    },

    {
        id:2,
        cp:420,
        name:"420 CP",
        price:"۴۹۹,۰۰۰ تومان",
        type:"popular",
        tag:"محبوب",
        desc:"یکی از بسته‌های محبوب."
    },

    {
        id:3,
        cp:880,
        name:"880 CP",
        price:"۹۴۹,۰۰۰ تومان",
        type:"popular",
        tag:"محبوب",
        desc:"انتخاب مناسب برای خرید بیشتر."
    },

    {
        id:4,
        cp:1280,
        name:"1280 CP",
        price:"۱,۲۹۹,۰۰۰ تومان",
        type:"popular",
        tag:"محبوب",
        desc:"بسته متوسط برای کاربران فعال."
    },

    {
        id:5,
        cp:1600,
        name:"1600 CP",
        price:"۱,۵۹۹,۰۰۰ تومان",
        type:"special",
        tag:"ویژه",
        desc:"بسته ویژه CP Galaxy."
    },

    {
        id:6,
        cp:2400,
        name:"2400 CP",
        price:"۲,۳۹۹,۰۰۰ تومان",
        type:"special",
        tag:"ویژه",
        desc:"بسته بزرگ برای خرید بیشتر."
    },

    {
        id:7,
        cp:3200,
        name:"3200 CP",
        price:"۳,۱۹۹,۰۰۰ تومان",
        type:"special",
        tag:"ویژه",
        desc:"بسته بزرگ کاربران حرفه‌ای."
    },

    {
        id:8,
        cp:5000,
        name:"5000 CP",
        price:"۴,۸۹۹,۰۰۰ تومان",
        type:"special",
        tag:"ویژه",
        desc:"بسته بزرگ CP."
    },

    {
        id:9,
        cp:6500,
        name:"6500 CP",
        price:"۶,۱۹۹,۰۰۰ تومان",
        type:"special",
        tag:"ویژه",
        desc:"بسته بسیار بزرگ."
    },

    {
        id:10,
        cp:8000,
        name:"8000 CP",
        price:"۷,۶۹۹,۰۰۰ تومان",
        type:"special",
        tag:"ویژه",
        desc:"برای خریدهای سنگین."
    },

    {
        id:11,
        cp:10000,
        name:"10000 CP",
        price:"۹,۱۹۹,۰۰۰ تومان",
        type:"special",
        tag:"بزرگ",
        desc:"بسته بسیار بزرگ."
    },

    {
        id:12,
        cp:10800,
        name:"10800 CP",
        price:"۹,۹۹۹,۰۰۰ تومان",
        type:"special",
        tag:"بزرگ‌ترین",
        desc:"بزرگ‌ترین بسته فروشگاه."
    }

];


let orders =
    JSON.parse(
        localStorage.getItem("cpGalaxyOrders")
        || "[]"
    );


let currentFilter = "all";

let paymentIndex = null;


/* =========================
   SAVE
========================= */

function saveOrders(){

    localStorage.setItem(
        "cpGalaxyOrders",
        JSON.stringify(orders)
    );

    updateOrderCount();

}


/* =========================
   COUNT
========================= */

function updateOrderCount(){

    document
        .getElementById("orderCount")
        .textContent =
        orders.length;

}


/* =========================
   PAGE SYSTEM
========================= */

function showPage(page){

    const pages = [

        "home",
        "shop",
        "orders",
        "checkout",
        "success"

    ];


    pages.forEach(name => {

        const element =
            document.getElementById(
                name + "Page"
            );

        if(element){

            element.classList.add("hidden");

        }

    });


    const active =
        document.getElementById(
            page + "Page"
        );


    if(active){

        active.classList.remove("hidden");

    }


    if(page === "shop"){

        renderProducts();

    }


    if(page === "orders"){

        renderOrders();

    }


    if(page === "checkout"){

        renderCheckout();

    }


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* =========================
   HOME
========================= */

function goHome(){

    showPage("home");

}


function scrollToSection(id){

    showPage("home");


    setTimeout(() => {

        const element =
            document.getElementById(id);

        if(element){

            element.scrollIntoView({

                behavior:"smooth"

            });

        }

    },100);

}


/* =========================
   HOME FILTER
========================= */

function setFilterFromHome(filter){

    showPage("shop");

    setTimeout(() => {

        setFilter(
            filter,
            document.querySelector(
                `[data-filter="${filter}"]`
            )
        );

    },100);

}


/* =========================
   PRODUCTS
========================= */

function renderProducts(){

    const grid =
        document.getElementById(
            "productsGrid"
        );


    const search =
        document
        .getElementById(
            "searchInput"
        )
        .value
        .trim()
        .toLowerCase();


    const filtered =
        products.filter(product => {


            const matchesSearch =

                !search

                ||

                product.name
                .toLowerCase()
                .includes(search)

                ||

                String(product.cp)
                .includes(search);


            const matchesFilter =

                currentFilter === "all"

                ||

                product.type === currentFilter;


            return (
                matchesSearch
                &&
                matchesFilter
            );

        });


    if(filtered.length === 0){

        grid.innerHTML = `

            <div
                class="empty"
                style="grid-column:1/-1">

                <strong>
                    بسته‌ای پیدا نشد
                </strong>

                عبارت دیگری را امتحان کن.

            </div>

        `;

        return;

    }


    grid.innerHTML =

        filtered.map(product => `

            <article class="product">

                <span class="product-tag">

                    ${product.tag}

                </span>


                <div class="product-icon">

                    💎

                </div>


                <h3>

                    ${product.name}

                </h3>


                <p>

                    ${product.desc}

                </p>


                <div class="product-bottom">


                    <div class="product-price">

                        ${product.price}

                        <small>
                            قیمت نمایشی
                        </small>

                    </div>


                    <button
                        class="add-btn"
                        onclick="
                        addOrder(${product.id})
                        ">

                        +

                    </button>


                </div>

            </article>

        `).join("");

}


/* =========================
   FILTER
========================= */

function setFilter(

    filter,

    button

){

    currentFilter =
        filter;


    document
        .querySelectorAll(".filter")
        .forEach(item => {

            item.classList.remove(
                "active"
            );

        });


    if(button){

        button.classList.add(
            "active"
        );

    }


    renderProducts();

}


/* =========================
   ADD ORDER
========================= */

function addOrder(productId){

    const product =
        products.find(
            item =>
            item.id === productId
        );


    if(!product){

        return;

    }


    orders.push({

        id:Date.now(),

        name:product.name,

        cp:product.cp,

        price:product.price

    });


    saveOrders();


    showToast(

        `${product.name} به سفارشات اضافه شد 💜`

    );

}


/* =========================
   ORDERS
========================= */

function renderOrders(){

    const list =
        document.getElementById(
            "ordersList"
        );


    if(!orders.length){

        list.innerHTML = `

            <div class="empty">

                <strong>
                    هنوز سفارشی نداری
                </strong>

                ابتدا از فروشگاه
                یک بسته انتخاب کن.

                <br><br>

                <button
                    class="btn primary"
                    onclick="
                    showPage('shop')
                    ">

                    مشاهده بسته‌ها

                </button>

            </div>

        `;

        return;

    }


    list.innerHTML =

        orders.map(
            (order,index) => `

            <article class="order-item">


                <div class="order-main">

                    <div class="order-icon">

                        💎

                    </div>


                    <div>

                        <h3>

                            ${order.name}

                        </h3>


                        <p>

                            سفارش شماره
                            ${index + 1}

                            •
                            ${order.cp}
                            CP

                        </p>

                    </div>

                </div>


                <div class="order-price">

                    ${order.price}

                    <span
                        class="order-status">

                        آماده پرداخت

                    </span>

                </div>


                <div>

                    <button
                        class="btn primary"
                        onclick="
                        openCheckout(${index})
                        ">

                        پرداخت

                    </button>


                    <button
                        class="btn secondary"
                        onclick="
                        removeOrder(${index})
                        ">

                        حذف

                    </button>

                </div>


            </article>

        `

        ).join("");

}


/* =========================
   REMOVE
========================= */

function removeOrder(index){

    orders.splice(
        index,
        1
    );


    saveOrders();

    renderOrders();

}


/* =========================
   CHECKOUT
========================= */

function openCheckout(index){

    paymentIndex =
        index;


    showPage(
        "checkout"
    );

}


/* =========================
   CHECKOUT DATA
========================= */

function renderCheckout(){

    if(

        paymentIndex === null

        ||

        !orders[paymentIndex]

    ){

        return;

    }


    const order =
        orders[paymentIndex];


    document
        .getElementById(
            "checkoutAmount"
        )
        .textContent =
        order.price;


    document
        .getElementById(
            "summaryCount"
        )
        .textContent =
        "1";


    document
        .getElementById(
            "checkoutItems"
        )
        .innerHTML = `

            <div class="summary-row">

                <span>

                    ${order.name}

                </span>

                <span>

                    ${order.price}

                </span>

            </div>

        `;

}


/* =========================
   CARD FORMAT
========================= */

function formatCard(input){

    let value =

        input.value
        .replace(/\D/g,"")
        .slice(0,16);


    let result = "";


    for(

        let i = 0;

        i < value.length;

        i++

    ){

        if(

            i > 0

            &&

            i % 4 === 0

        ){

            result += " ";

        }


        result += value[i];

    }


    input.value =
        result;

}


/* =========================
   PAYMENT
========================= */

function completePayment(){

    if(

        paymentIndex === null

        ||

        !orders[paymentIndex]

    ){

        return;

    }


    const card =

        document
        .getElementById(
            "cardNumber"
        )
        .value
        .replace(/\s/g,"");


    const otp =

        document
        .getElementById(
            "otp"
        )
        .value
        .replace(/\D/g,"");


    if(card.length < 16){

        alert(
            "برای نسخه نمایشی، شماره کارت ۱۶ رقمی وارد کن."
        );

        return;

    }


    if(otp.length !== 5){

        alert(
            "کد پنج رقمی را وارد کن."
        );

        return;

    }


    orders.splice(
        paymentIndex,
        1
    );


    paymentIndex =
        null;


    saveOrders();


    document
        .getElementById(
            "cardNumber"
        )
        .value = "";


    document
        .getElementById(
            "otp"
        )
        .value = "";


    showPage(
        "success"
    );

}


/* =========================
   TOAST
========================= */

let toastTimer;


function showToast(message){

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =

        setTimeout(() => {

            toast.classList.remove(
                "show"
            );

        },2200);

}


/* =========================
   START
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateOrderCount();

        renderProducts();

    }
);
