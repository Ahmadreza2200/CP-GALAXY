const products = [
  {
    id: 1,
    name: "80 CP",
    price: 49000,
    category: "cheap",
    icon: "🟣",
    tag: "اقتصادی"
  },
  {
    id: 2,
    name: "160 CP",
    price: 89000,
    category: "cheap",
    icon: "🔵",
    tag: "اقتصادی"
  },
  {
    id: 3,
    name: "420 CP",
    price: 219000,
    category: "popular",
    icon: "💎",
    tag: "پرفروش"
  },
  {
    id: 4,
    name: "500 CP",
    price: 259000,
    category: "popular",
    icon: "💠",
    tag: "محبوب"
  },
  {
    id: 5,
    name: "880 CP",
    price: 429000,
    category: "popular",
    icon: "💎",
    tag: "پرفروش"
  },
  {
    id: 6,
    name: "1080 CP",
    price: 519000,
    category: "special",
    icon: "🌌",
    tag: "ویژه"
  },
  {
    id: 7,
    name: "2400 CP",
    price: 1099000,
    category: "special",
    icon: "🔥",
    tag: "ویژه"
  },
  {
    id: 8,
    name: "3200 CP",
    price: 1449000,
    category: "special",
    icon: "🚀",
    tag: "ویژه"
  },
  {
    id: 9,
    name: "5000 CP",
    price: 2199000,
    category: "special",
    icon: "👑",
    tag: "VIP"
  },
  {
    id: 10,
    name: "8000 CP",
    price: 3399000,
    category: "special",
    icon: "💜",
    tag: "VIP"
  },
  {
    id: 11,
    name: "10000 CP",
    price: 4199000,
    category: "special",
    icon: "⚡",
    tag: "VIP"
  },
  {
    id: 12,
    name: "12600 CP",
    price: 5199000,
    category: "special",
    icon: "👑",
    tag: "بالاترین"
  }
];


let currentFilter = "all";
let selectedOrder = null;

let orders = JSON.parse(
  localStorage.getItem("cpGalaxyOrders") || "[]"
);


/* PAGE */

function showPage(pageName) {

  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  const page = document.getElementById(pageName);

  if (page) {
    page.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  if (pageName === "orders") {
    renderOrders();
  }

  if (pageName === "shop") {
    renderProducts();
  }

  if (pageName === "checkout") {
    renderCheckout();
  }
}


/* PRODUCTS */

function renderProducts() {

  const container = document.getElementById("products");

  if (!container) return;

  const searchInput = document.getElementById("search");

  const search = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  let filtered = products.filter(product => {

    const matchesSearch =
      product.name.toLowerCase().includes(search);

    const matchesFilter =
      currentFilter === "all" ||
      product.category === currentFilter;

    return matchesSearch && matchesFilter;
  });


  if (filtered.length === 0) {

    container.innerHTML = `
      <div class="empty">
        محصولی پیدا نشد.
      </div>
    `;

    return;
  }


  container.innerHTML = filtered.map(product => {

    return `
      <article class="product">

        <div class="product-tag">
          ${product.tag}
        </div>

        <div class="product-icon">
          ${product.icon}
        </div>

        <h3>${product.name}</h3>

        <p>
          بسته CP کالاف دیوتی موبایل
        </p>

        <div class="product-price">
          ${product.price.toLocaleString("fa-IR")}
          <small>تومان</small>
        </div>

        <button
          class="primary"
          onclick="addOrder(${product.id})"
        >
          افزودن به سفارشات
        </button>

      </article>
    `;

  }).join("");
}


/* FILTER */

function filterProducts(filter) {

  currentFilter = filter;

  showPage("shop");

  document.querySelectorAll(".filter").forEach(button => {
    button.classList.remove("active");
  });

  const activeButton =
    document.getElementById("filter-" + filter);

  if (activeButton) {
    activeButton.classList.add("active");
  }

  renderProducts();
}


/* ADD ORDER */

function addOrder(productId) {

  const product =
    products.find(item => item.id === productId);

  if (!product) return;


  const order = {
    id: Date.now(),
    productId: product.id,
    name: product.name,
    price: product.price,
    date: new Date().toLocaleString("fa-IR")
  };


  orders.push(order);

  saveOrders();

  updateOrderCount();

  showToast(
    `${product.name} به سفارشات اضافه شد`
  );
}


/* SAVE */

function saveOrders() {

  localStorage.setItem(
    "cpGalaxyOrders",
    JSON.stringify(orders)
  );
}


/* ORDER COUNT */

function updateOrderCount() {

  const count =
    document.getElementById("orderCount");

  if (count) {
    count.textContent = orders.length;
  }
}


/* ORDERS */

function renderOrders() {

  const container =
    document.getElementById("ordersList");

  if (!container) return;


  if (orders.length === 0) {

    container.innerHTML = `
      <div class="empty">
        <div style="font-size:45px;margin-bottom:15px;">
          🛒
        </div>

        <h2>هنوز سفارشی نداری</h2>

        <p style="margin:15px 0;">
          از فروشگاه یک بسته CP انتخاب کن.
        </p>

        <button
          class="primary"
          onclick="showPage('shop')"
        >
          رفتن به فروشگاه
        </button>
      </div>
    `;

    return;
  }


  container.innerHTML = orders.map((order, index) => {

    return `
      <div class="order">

        <div class="order-info">

          <h3>${order.name}</h3>

          <p>
            مبلغ:
            ${order.price.toLocaleString("fa-IR")}
            تومان
          </p>

          <p>
            تاریخ سفارش:
            ${order.date}
          </p>

        </div>

        <div class="order-actions">

          <button
            class="pay"
            onclick="openCheckout(${index})"
          >
            پرداخت
          </button>

          <button
            class="delete"
            onclick="removeOrder(${index})"
          >
            حذف
          </button>

        </div>

      </div>
    `;

  }).join("");
}


/* REMOVE */

function removeOrder(index) {

  orders.splice(index, 1);

  saveOrders();

  updateOrderCount();

  renderOrders();

  showToast("سفارش حذف شد");
}


/* CHECKOUT */

function openCheckout(index) {

  if (!orders[index]) return;

  selectedOrder = index;

  showPage("checkout");

  renderCheckout();
}


/* CHECKOUT SUMMARY */

function renderCheckout() {

  const summary =
    document.getElementById("checkoutSummary");

  if (!summary) return;

  if (
    selectedOrder === null ||
    !orders[selectedOrder]
  ) {

    summary.innerHTML = `
      <h2>سفارشی انتخاب نشده</h2>
      <p style="color:#9998b7;line-height:2;">
        ابتدا از قسمت سفارشات، یک سفارش را انتخاب کن.
      </p>
    `;

    return;
  }


  const order = orders[selectedOrder];


  summary.innerHTML = `

    <h2>خلاصه سفارش</h2>

    <div class="summary-item">
      <span>بسته</span>
      <strong>${order.name}</strong>
    </div>

    <div class="summary-item">
      <span>نوع</span>
      <span>CP کالاف دیوتی موبایل</span>
    </div>

    <div class="summary-item">
      <span>وضعیت</span>
      <span>در انتظار پرداخت</span>
    </div>

    <div class="summary-total">
      <span>مبلغ</span>
      <span>
        ${order.price.toLocaleString("fa-IR")}
        تومان
      </span>
    </div>

  `;
}


/* PAYMENT */

function completePayment() {

  if (
    selectedOrder === null ||
    !orders[selectedOrder]
  ) {
    showToast("سفارشی برای پرداخت وجود ندارد");
    return;
  }


  const card =
    document.getElementById("cardNumber").value
      .replace(/\s/g, "");

  const otp =
    document.getElementById("otp").value;


  if (card.length !== 16) {

    showToast(
      "برای حالت نمایشی 16 رقم وارد کن"
    );

    return;
  }


  if (otp.length !== 5) {

    showToast(
      "رمز نمایشی باید 5 رقم باشد"
    );

    return;
  }


  orders.splice(selectedOrder, 1);

  saveOrders();

  updateOrderCount();

  selectedOrder = null;


  document.getElementById("cardNumber").value = "";
  document.getElementById("cvv").value = "";
  document.getElementById("expire").value = "";
  document.getElementById("otp").value = "";


  showPage("success");
}


/* CARD FORMAT */

document.addEventListener("DOMContentLoaded", () => {

  const card =
    document.getElementById("cardNumber");

  if (card) {

    card.addEventListener("input", () => {

      let value =
        card.value
          .replace(/\D/g, "")
          .slice(0, 16);

      value =
        value.match(/.{1,4}/g)?.join(" ") || "";

      card.value = value;
    });

  }

});


/* TOAST */

function showToast(message) {

  const toast =
    document.getElementById("toast");

  if (!toast) return;

  toast.textContent = message;

  toast.classList.add("show");


  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* MOBILE MENU */

function toggleMenu() {

  const nav =
    document.querySelector("nav");

  if (!nav) return;

  if (nav.style.display === "flex") {

    nav.style.display = "";

  } else {

    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.top = "65px";
    nav.style.right = "12px";
    nav.style.background = "#111027";
    nav.style.padding = "10px";
    nav.style.borderRadius = "15px";
    nav.style.border = "1px solid rgba(255,255,255,.08)";
  }
}


/* START */

document.addEventListener("DOMContentLoaded", () => {

  updateOrderCount();

  renderProducts();

});
