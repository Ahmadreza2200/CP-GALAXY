
"use strict";

/*
  VELORA SHOP
  قیمت‌ها به تومان هستند.
  قیمت‌ها به جز موردی که در توضیحات محصول مشخص شده،
  نمونه اولیه‌اند و قبل از فروش باید بررسی شوند.

  پرداخت واقعی:
  آدرس سرور امن را پس از راه‌اندازی درگاه تنظیم کنید.
  کلید محرمانه درگاه هرگز نباید در این فایل قرار بگیرد.
*/

const PAYMENT_START_URL = ""; // آدرس API سرور خودت را بعداً وارد کن
const STORAGE = {
  cart: "velora_cart_v1",
  favorites: "velora_favorites_v1",
  orders: "velora_orders_v1",
  reviews: "velora_reviews_v1"
};

const products = [
  {
    id: 1, name: "Xiaomi Redmi Note 14 4G",
    category: "موبایل", price: 89000000, oldPrice: 92000000,
    icon: "📱", discount: 3,
    specs: ["رم: ۸ گیگابایت", "حافظه: ۲۵۶ گیگابایت", "نمایشگر AMOLED با نرخ نوسازی ۱۲۰ هرتز", "باتری ۵۵۰۰ میلی‌آمپرساعت"],
    description: "گوشی میان‌رده شیائومی؛ نسخه، گارانتی و قیمت نهایی را پیش از خرید بررسی کنید.",
    note: "قیمت نمونه بر اساس یک فهرست فروشگاهی مشاهده‌شده؛ موجودی و قیمت روز را بررسی کنید."
  },
  {
    id: 2, name: "Xiaomi Redmi Note 14 Pro 4G",
    category: "موبایل", price: 105000000, oldPrice: 112000000,
    icon: "📱", discount: 6,
    specs: ["رم: ۸ گیگابایت", "حافظه: ۲۵۶ گیگابایت", "دوربین اصلی ۲۰۰ مگاپیکسل", "نمایشگر AMOLED"],
    description: "گوشی سری Redmi Note Pro. مشخصات می‌تواند با نسخه و بازار عرضه تفاوت داشته باشد.",
    note: "قیمت نمونه؛ پیش از فروش تأیید شود."
  },
  {
    id: 3, name: "Xiaomi Redmi Note 14 Pro 5G",
    category: "موبایل", price: 135000000, oldPrice: 145000000,
    icon: "📱", discount: 7,
    specs: ["رم: ۱۲ گیگابایت", "حافظه: ۲۵۶ گیگابایت", "اتصال 5G", "نمایشگر AMOLED"],
    description: "نسخه 5G با مشخصات وابسته به بازار عرضه و پیکربندی انتخابی.",
    note: "قیمت نمونه؛ نسخه دقیق محصول را مشخص کنید."
  },
  {
    id: 4, name: "Samsung Galaxy A56 5G",
    category: "موبایل", price: 155000000, oldPrice: 165000000,
    icon: "📱", discount: 6,
    specs: ["رم و حافظه: وابسته به نسخه", "نمایشگر Super AMOLED", "دوربین چندگانه", "اتصال 5G"],
    description: "گوشی سری Galaxy A سامسونگ.",
    note: "قیمت نمونه؛ نسخه حافظه و گارانتی باید تأیید شود."
  },
  {
    id: 5, name: "Apple iPhone 16",
    category: "موبایل", price: 190000000, oldPrice: 199000000,
    icon: "📱", discount: 5,
    specs: ["حافظه: ۱۲۸ گیگابایت در این پیکربندی نمونه", "تراشه سری A", "Face ID", "دوربین اصلی دوگانه"],
    description: "آیفون ۱۶؛ وضعیت رجیستری، پارت‌نامبر و گارانتی را قبل از فروش مشخص کنید.",
    note: "قیمت نمونه؛ قیمت واقعی می‌تواند اختلاف زیادی داشته باشد."
  },
  {
    id: 6, name: "Samsung Galaxy S25",
    category: "موبایل", price: 240000000, oldPrice: 255000000,
    icon: "📱", discount: 6,
    specs: ["حافظه نمونه: ۲۵۶ گیگابایت", "نمایشگر Dynamic AMOLED", "دوربین چندگانه", "اتصال 5G"],
    description: "گوشی پرچم‌دار سامسونگ.",
    note: "قیمت نمونه؛ مشخصات و موجودی روز بررسی شود."
  },
  {
    id: 7, name: "Xiaomi Redmi 14C",
    category: "موبایل", price: 48000000, oldPrice: 51000000,
    icon: "📱", discount: 6,
    specs: ["رم و حافظه: وابسته به نسخه", "نمایشگر بزرگ", "باتری پرظرفیت", "دو سیم‌کارت"],
    description: "گوشی اقتصادی شیائومی.",
    note: "قیمت نمونه؛ نسخه دقیق را مشخص کنید."
  },
  {
    id: 8, name: "Apple iPhone 15",
    category: "موبایل", price: 145000000, oldPrice: 155000000,
    icon: "📱", discount: 6,
    specs: ["حافظه نمونه: ۱۲۸ گیگابایت", "نمایشگر OLED", "Face ID", "USB-C"],
    description: "آیفون ۱۵؛ پارت‌نامبر، رجیستری و وضعیت دستگاه باید مشخص باشد.",
    note: "قیمت نمونه؛ قبل از فروش بررسی شود."
  },
  {
    id: 9, name: "Samsung Galaxy Buds FE",
    category: "لوازم دیجیتال", price: 8500000, oldPrice: 9500000,
    icon: "🎧", discount: 10,
    specs: ["هدفون بی‌سیم", "حذف نویز فعال", "کیس شارژ", "اتصال بلوتوث"],
    description: "هدفون بی‌سیم سامسونگ.",
    note: "قیمت نمونه؛ اصالت و گارانتی بررسی شود."
  },
  {
    id: 10, name: "Apple AirPods 4",
    category: "لوازم دیجیتال", price: 15000000, oldPrice: 16500000,
    icon: "🎧", discount: 9,
    specs: ["هدفون بی‌سیم", "کیس شارژ USB-C", "اتصال به دستگاه‌های سازگار"],
    description: "ایرپاد اپل؛ نسخه معمولی و نسخه دارای حذف نویز قیمت متفاوت دارند.",
    note: "قیمت نمونه؛ نسخه محصول را دقیق انتخاب کنید."
  },
  {
    id: 11, name: "Samsung 25W USB-C Charger",
    category: "لوازم دیجیتال", price: 1800000, oldPrice: 2200000,
    icon: "🔌", discount: 18,
    specs: ["خروجی USB-C", "شارژ سریع سازگار", "کابل ممکن است جداگانه باشد"],
    description: "شارژر USB-C؛ سازگاری و اصل بودن کالا را بررسی کنید.",
    note: "قیمت نمونه."
  },
  {
    id: 12, name: "Anker Power Bank 20000mAh",
    category: "لوازم دیجیتال", price: 7500000, oldPrice: 8200000,
    icon: "🔋", discount: 8,
    specs: ["ظرفیت اسمی ۲۰۰۰۰ میلی‌آمپرساعت", "مدل و توان خروجی وابسته به نسخه", "پورت‌های شارژ متعدد"],
    description: "پاوربانک انکر؛ مدل دقیق و توان خروجی باید مشخص شود.",
    note: "قیمت نمونه."
  },
  {
    id: 13, name: "Logitech M185 Mouse",
    category: "لوازم دیجیتال", price: 1400000, oldPrice: 1600000,
    icon: "🖱️", discount: 12,
    specs: ["ماوس بی‌سیم", "گیرنده USB", "مناسب استفاده روزمره"],
    description: "ماوس بی‌سیم لاجیتک.",
    note: "قیمت نمونه."
  },
  {
    id: 14, name: "Mechanical Keyboard",
    category: "لوازم دیجیتال", price: 4500000, oldPrice: 5200000,
    icon: "⌨️", discount: 13,
    specs: ["نوع سوییچ وابسته به مدل", "اتصال USB", "چیدمان باید هنگام سفارش مشخص شود"],
    description: "کیبورد مکانیکی؛ مدل دقیق را قبل از عرضه تعیین کنید.",
    note: "قیمت نمونه."
  },
  {
    id: 15, name: "Smart Watch",
    category: "لوازم دیجیتال", price: 6500000, oldPrice: 7500000,
    icon: "⌚", discount: 13,
    specs: ["نمایش اعلان‌ها", "پایش فعالیت", "باتری و امکانات وابسته به مدل"],
    description: "ساعت هوشمند؛ برند و مدل هنوز باید مشخص شوند.",
    note: "قیمت نمونه برای محصول عمومی؛ پیش از فروش نام مدل را تکمیل کنید."
  },
  {
    id: 16, name: "Portable Bluetooth Speaker",
    category: "لوازم دیجیتال", price: 3200000, oldPrice: 3700000,
    icon: "🔊", discount: 13,
    specs: ["اتصال بلوتوث", "باتری داخلی", "توان و مقاومت در برابر آب وابسته به مدل"],
    description: "بلندگوی قابل حمل؛ مدل دقیق را مشخص کنید.",
    note: "قیمت نمونه."
  },
  {
    id: 17, name: "هودی مشکی ساده",
    category: "پوشاک", price: 1250000, oldPrice: 1500000,
    icon: "🧥", discount: 17,
    specs: ["رنگ: مشکی", "سایز: S تا XXL، در صورت موجودی", "جنس باید توسط فروشنده تأیید شود"],
    description: "هودی روزمره؛ سایز و جنس واقعی را هنگام ثبت کالا وارد کنید.",
    note: "قیمت نمونه."
  },
  {
    id: 18, name: "تی‌شرت سفید ساده",
    category: "پوشاک", price: 450000, oldPrice: 550000,
    icon: "👕", discount: 18,
    specs: ["رنگ: سفید", "سایزهای قابل انتخاب", "جنس: نیازمند تأیید فروشنده"],
    description: "تی‌شرت ساده برای استفاده روزمره.",
    note: "قیمت نمونه."
  },
  {
    id: 19, name: "کتانی روزمره",
    category: "پوشاک", price: 2200000, oldPrice: 2600000,
    icon: "👟", discount: 15,
    specs: ["سایز و رنگ باید انتخاب شوند", "جنس و برند وابسته به مدل"],
    description: "کفش روزمره؛ برند و مشخصات واقعی را قبل از فروش ثبت کنید.",
    note: "قیمت نمونه."
  },
  {
    id: 20, name: "کوله‌پشتی روزمره",
    category: "پوشاک", price: 1350000, oldPrice: 1600000,
    icon: "🎒", discount: 15,
    specs: ["چند محفظه", "مناسب مدرسه یا استفاده روزمره", "ابعاد وابسته به مدل"],
    description: "کوله‌پشتی روزمره.",
    note: "قیمت نمونه."
  },
  {
    id: 21, name: "شکلات تلخ",
    category: "خوراکی", price: 180000, oldPrice: 200000,
    icon: "🍫", discount: 10,
    specs: ["وزن و درصد کاکائو باید مشخص شوند", "تاریخ انقضا را بررسی کنید"],
    description: "شکلات؛ برند، وزن و اطلاعات بسته‌بندی باید تکمیل شوند.",
    note: "قیمت نمونه."
  },
  {
    id: 22, name: "بیسکویت بسته‌ای",
    category: "خوراکی", price: 85000, oldPrice: 95000,
    icon: "🍪", discount: 10,
    specs: ["وزن و برند باید مشخص شوند", "تاریخ تولید و انقضا بررسی شود"],
    description: "بیسکویت بسته‌ای.",
    note: "قیمت نمونه."
  },
  {
    id: 23, name: "ماگ سرامیکی مشکی",
    category: "خانه", price: 250000, oldPrice: 300000,
    icon: "☕", discount: 16,
    specs: ["جنس: سرامیک", "رنگ: مشکی", "ظرفیت باید مشخص شود"],
    description: "ماگ سرامیکی ساده.",
    note: "قیمت نمونه."
  },
  {
    id: 24, name: "چراغ رومیزی",
    category: "خانه", price: 950000, oldPrice: 1150000,
    icon: "💡", discount: 17,
    specs: ["نوع لامپ وابسته به مدل", "برق یا USB بسته به محصول", "ابعاد باید مشخص شود"],
    description: "چراغ رومیزی؛ مدل و مشخصات واقعی را تکمیل کنید.",
    note: "قیمت نمونه."
  }
];

const demoReviews = [
  ["کاربر نمونه ۱", 5, "ظاهر فروشگاه مرتب و استفاده از دسته‌بندی‌ها ساده است."],
  ["کاربر نمونه ۲", 5, "دیدن قیمت و مشخصات کنار محصول خیلی کاربردی است."],
  ["کاربر نمونه ۳", 4, "جست‌وجوی محصولات باعث می‌شود سریع‌تر گزینه‌ها را پیدا کنم."],
  ["کاربر نمونه ۴", 5, "نمایش جزئیات محصول برای مقایسه مفید است."],
  ["کاربر نمونه ۵", 4, "سبد خرید ساده و قابل فهم طراحی شده است."],
  ["کاربر نمونه ۶", 5, "ظاهر تیره و مینیمال فروشگاه را دوست دارم."],
  ["کاربر نمونه ۷", 4, "دسته‌بندی محصولات پیدا کردن کالا را آسان می‌کند."],
  ["کاربر نمونه ۸", 5, "نمایش مبلغ نهایی سفارش ایده خوبی است."],
  ["کاربر نمونه ۹", 4, "بخش مشخصات می‌تواند به انتخاب محصول کمک کند."],
  ["کاربر نمونه ۱۰", 5, "طراحی سایت روی موبایل هم قابل استفاده است."],
  ["کاربر نمونه ۱۱", 4, "فیلتر قیمت برای بررسی گزینه‌ها مفید است."],
  ["کاربر نمونه ۱۲", 5, "صفحه محصول اطلاعات را یکجا نشان می‌دهد."],
  ["کاربر نمونه ۱۳", 4, "امکان ذخیره علاقه‌مندی‌ها کاربردی است."],
  ["کاربر نمونه ۱۴", 5, "فرایند آزمایشی سفارش واضح است."],
  ["کاربر نمونه ۱۵", 4, "طراحی ساده باعث شده بخش‌های اصلی گم نشوند."],
  ["کاربر نمونه ۱۶", 5, "مشخصات فنی گوشی‌ها در انتخاب کمک می‌کند."],
  ["کاربر نمونه ۱۷", 4, "مرتب‌سازی قیمت‌ها ویژگی مفیدی است."],
  ["کاربر نمونه ۱۸", 5, "رنگ‌بندی تیره و یکدست است."],
  ["کاربر نمونه ۱۹", 4, "بخش نظرات و امتیازدهی ظاهر مناسبی دارد."],
  ["کاربر نمونه ۲۰", 5, "فروشگاه ساختار قابل فهمی دارد."]
];

const $ = (selector) => document.querySelector(selector);
const money = (amount) =>
  `${Math.round(Number(amount) || 0).toLocaleString("fa-IR")} تومان`;

function readStore(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}
function writeStore(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

let cart = readStore(STORAGE.cart, []);
let favorites = readStore(STORAGE.favorites, []);
let orders = readStore(STORAGE.orders, []);
let customerReviews = readStore(STORAGE.reviews, []);
let selectedCategory = "همه";
let searchTerm = "";
let couponApplied = false;
let currentOrder = null;

function toast(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
}

function safeText(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;",
    '"': "&quot;", "'": "&#39;"
  })[char]);
}

function renderProducts() {
  let list = products.filter((p) => {
    const matchesCategory = selectedCategory === "همه" || p.category === selectedCategory;
    const matchesSearch = `${p.name} ${p.category} ${p.specs.join(" ")}`
      .toLowerCase().includes(searchTerm.toLowerCase());
    const max = $("#priceFilter").value;
    const matchesPrice = max === "all" || p.price <= Number(max);
    return matchesCategory && matchesSearch && matchesPrice;
  });

  const sort = $("#sortSelect").value;
  if (sort === "low") list.sort((a, b) => a.price - b.price);
  if (sort === "high") list.sort((a, b) => b.price - a.price);
  if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name));

  $("#emptyState").classList.toggle("hidden", list.length > 0);
  $("#productGrid").innerHTML = list.map((p) => `
    <article class="product-card">
      ${p.discount ? `<span class="discount-badge">${p.discount.toLocaleString("fa-IR")}٪ تخفیف نمونه</span>` : ""}
      <button class="fav-btn ${favorites.includes(p.id) ? "active" : ""}"
        data-fav="${p.id}" aria-label="افزودن به علاقه‌مندی‌ها">${favorites.includes(p.id) ? "♥" : "♡"}</button>
      <div class="product-visual"><span aria-hidden="true">${p.icon}</span></div>
      <div class="product-info">
        <span class="product-category">${safeText(p.category)}</span>
        <h3>${safeText(p.name)}</h3>
        <div class="product-spec">${safeText(p.specs.slice(0, 2).join(" · "))}</div>
        <div class="price-line">
          <span class="price">${money(p.price)}</span>
          ${p.oldPrice ? `<span class="old-price">${Number(p.oldPrice).toLocaleString("fa-IR")}</span>` : ""}
        </div>
        <div class="card-actions">
          <button class="add-btn" data-add="${p.id}">افزودن به سبد</button>
          <button class="detail-btn" data-details="${p.id}">جزئیات</button>
        </div>
      </div>
    </article>
  `).join("");
}

function getProduct(id) {
  return products.find((p) => p.id === Number(id));
}

function addToCart(id) {
  const product = getProduct(id);
  if (!product) return;
  const item = cart.find((x) => x.id === product.id);
  if (item) item.qty += 1;
  else cart.push({ id: product.id, qty: 1 });
  writeStore(STORAGE.cart, cart);
  renderCart();
  toast("محصول به سبد خرید اضافه شد.");
}

function cartSubtotal() {
  return cart.reduce((sum, item) => {
    const p = getProduct(item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function shippingCost() {
  const method = $("#shippingMethod")?.value || "standard";
  return method === "pickup" ? 0 : method === "express" ? 300000 : 150000;
}

function discountAmount() {
  return couponApplied ? Math.round(cartSubtotal() * 0.10) : 0;
}

function grandTotal() {
  return Math.max(0, cartSubtotal() - discountAmount()) + shippingCost();
}

function renderCart() {
  $("#cartCount").textContent = cart.reduce((n, item) => n + item.qty, 0).toLocaleString("fa-IR");

  if (!cart.length) {
    $("#cartItems").innerHTML = '<p class="muted">سبد خرید شما خالی است.</p>';
  } else {
    $("#cartItems").innerHTML = cart.map((item) => {
      const p = getProduct(item.id);
      if (!p) return "";
      return `
        <div class="cart-item">
          <div>
            <h3>${safeText(p.name)}</h3>
            <p>${money(p.price)} · جمع: ${money(p.price * item.qty)}</p>
            <div class="qty-controls">
              <button data-qty="${p.id}" data-change="1" aria-label="افزایش تعداد">+</button>
              <span>${item.qty.toLocaleString("fa-IR")}</span>
              <button data-qty="${p.id}" data-change="-1" aria-label="کاهش تعداد">−</button>
              <button class="remove-btn" data-remove="${p.id}">حذف</button>
            </div>
          </div>
          <span>${p.icon}</span>
        </div>`;
    }).join("");
  }

  $("#subtotal").textContent = money(cartSubtotal());
  $("#discountTotal").textContent = money(discountAmount());
  $("#shippingTotal").textContent = money(shippingCost());
  $("#grandTotal").textContent = money(grandTotal());
  $("#checkoutTotal").textContent = money(grandTotal());
  $("#paymentTotal").textContent = money(grandTotal());
}

function showOverlay() {
  $("#overlay").classList.remove("hidden");
}
function hideAll() {
  $("#overlay").classList.add("hidden");
  $("#cartDrawer").classList.remove("open");
  document.querySelectorAll(".modal").forEach((el) => el.classList.add("hidden"));
}
function openCart() {
  hideAll();
  showOverlay();
  $("#cartDrawer").classList.add("open");
}
function openModal(id) {
  hideAll();
  showOverlay();
  $(id).classList.remove("hidden");
}

function showDetails(id) {
  const p = getProduct(id);
  if (!p) return;
  $("#detailsContent").innerHTML = `
    <div class="detail-layout">
      <div class="detail-image">${p.icon}</div>
      <div>
        <p class="eyebrow">${safeText(p.category)}</p>
        <h2>${safeText(p.name)}</h2>
        <p class="price">${money(p.price)}</p>
        <p class="muted small">${safeText(p.note)}</p>
        <p>${safeText(p.description)}</p>
        <h3>مشخصات محصول</h3>
        <ul class="spec-list">${p.specs.map((s) => `<li>${safeText(s)}</li>`).join("")}</ul>
        <button class="primary-btn full-btn" data-add="${p.id}">افزودن به سبد خرید</button>
      </div>
    </div>`;
  openModal("#detailsModal");
}

function applyCategory(category) {
  selectedCategory = category;
  document.querySelectorAll(".category-chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  renderProducts();
}

function renderReviews() {
  const samples = demoReviews.map(([name, rating, text]) => ({
    name, rating, text, sample: true
  }));
  const reviews = [...customerReviews, ...samples];

  $("#reviewGrid").innerHTML = reviews.map((r) => `
    <article class="review-card">
      <h3>${safeText(r.name)}</h3>
      <div class="stars" aria-label="${r.rating} از ۵ ستاره">${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}</div>
      <p>${safeText(r.text)}</p>
      <span class="review-tag">${r.sample ? "نمونه نمایشی" : "ثبت‌شده در این مرورگر؛ تأییدنشده"}</span>
    </article>
  `).join("");
}

function renderOrders() {
  if (!orders.length) {
    $("#orderList").innerHTML = '<p class="muted">هنوز سفارشی در این مرورگر ثبت نشده است.</p>';
    return;
  }
  $("#orderList").innerHTML = orders.map((order) => `
    <div class="order-row">
      <strong>سفارش ${safeText(order.id)}</strong>
      <p>مبلغ: ${money(order.total)}</p>
      <p>وضعیت: ${safeText(order.status)}</p>
      <p class="muted">${safeText(order.date)}</p>
    </div>
  `).join("");
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  if (target.dataset.add) addToCart(target.dataset.add);

  if (target.dataset.details) showDetails(target.dataset.details);

  if (target.dataset.fav) {
    const id = Number(target.dataset.fav);
    favorites = favorites.includes(id)
      ? favorites.filter((x) => x !== id)
      : [...favorites, id];
    writeStore(STORAGE.favorites, favorites);
    renderProducts();
    toast(favorites.includes(id) ? "به علاقه‌مندی‌ها اضافه شد." : "از علاقه‌مندی‌ها حذف شد.");
  }

  if (target.dataset.qty) {
    const id = Number(target.dataset.qty);
    const item = cart.find((x) => x.id === id);
    if (item) {
      item.qty += Number(target.dataset.change);
      if (item.qty <= 0) cart = cart.filter((x) => x.id !== id);
      writeStore(STORAGE.cart, cart);
      renderCart();
    }
  }

  if (target.dataset.remove) {
    cart = cart.filter((x) => x.id !== Number(target.dataset.remove));
    writeStore(STORAGE.cart, cart);
    renderCart();
  }

  if (target.hasAttribute("data-close")) hideAll();
});

$("#overlay").addEventListener("click", hideAll);
$("#cartBtn").addEventListener("click", openCart);

$("#accountBtn").addEventListener("click", () => {
  renderOrders();
  openModal("#accountModal");
});

$("#searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  searchTerm = $("#searchInput").value.trim();
  renderProducts();
  $("#products").scrollIntoView({ behavior: "smooth" });
});

$("#searchInput").addEventListener("input", () => {
  searchTerm = $("#searchInput").value.trim();
  renderProducts();
});

$("#sortSelect").addEventListener("change", renderProducts);
$("#priceFilter").addEventListener("change", renderProducts);

$("#categoryList").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (button) applyCategory(button.dataset.category);
});

document.querySelectorAll("[data-category-link]").forEach((link) => {
  link.addEventListener("click", () => applyCategory(link.dataset.categoryLink));
});

$("#couponBtn").addEventListener("click", () => {
  const code = $("#couponInput").value.trim().toUpperCase();
  if (code === "VELORA10" && cart.length) {
    couponApplied = true;
    $("#couponMessage").textContent = "تخفیف نمونه ۱۰٪ اعمال شد؛ پیش از فروش واقعی تنظیم شود.";
  } else {
    couponApplied = false;
    $("#couponMessage").textContent = "کد معتبر نیست یا سبد خرید خالی است.";
  }
  renderCart();
});

$("#checkoutBtn").addEventListener("click", () => {
  if (!cart.length) {
    toast("سبد خرید خالی است.");
    return;
  }
  $("#shippingMethod").value = "standard";
  renderCart();
  openModal("#checkoutModal");
});

$("#shippingMethod").addEventListener("change", renderCart);

$("#checkoutForm").addEventListener("submit", (event) => {
  event.preventDefault();
  if (!cart.length) {
    toast("سبد خرید خالی است.");
    return;
  }

  /*
    نسخه نمایشی:
    برای سفارش واقعی، اطلاعات سفارش باید به سرور ارسال شود.
    اطلاعات کارت بانکی را هرگز در اینجا درخواست نکنید.
  */
  currentOrder = {
    id: `VLR-${Date.now().toString().slice(-8)}`,
    total: grandTotal(),
    date: new Date().toLocaleDateString("fa-IR"),
    status: "در انتظار اتصال به درگاه",
    items: cart.map((item) => ({ ...item }))
  };

  $("#paymentTotal").textContent = money(currentOrder.total);
  $("#gatewayMessage").textContent =
    "سفارش نمایشی ساخته شد؛ تا زمان اتصال سرور و درگاه، پرداخت واقعی فعال نیست.";

  openModal("#paymentModal");
});

$("#gatewayBtn").addEventListener("click", async () => {
  if (!currentOrder) {
    toast("ابتدا اطلاعات سفارش را ثبت کنید.");
    return;
  }

  if (!PAYMENT_START_URL) {
    toast("درگاه هنوز متصل نشده؛ هیچ پولی دریافت نشده است.");
    return;
  }

  /*
    این API باید متعلق به سرور خودتان باشد.
    سرور باید مبلغ را خودش محاسبه کند، درخواست پرداخت بسازد
    و URL امن درگاه را برگرداند. کلید درگاه فقط روی سرور باشد.
  */
  try {
    const response = await fetch(PAYMENT_START_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: currentOrder.id,
        items: currentOrder.items,
        shippingMethod: $("#shippingMethod").value,
        customer: {
          name: $("#customerName").value.trim(),
          phone: $("#customerPhone").value.trim(),
          city: $("#customerCity").value.trim(),
          address: $("#customerAddress").value.trim()
        }
      })
    });

    if (!response.ok) throw new Error("payment_start_failed");
    const result = await response.json();

    if (!result.paymentUrl || !result.orderId) {
      throw new Error("invalid_payment_response");
    }

    currentOrder.id = result.orderId;
    currentOrder.status = "در انتظار پرداخت";
    orders.unshift(currentOrder);
    writeStore(STORAGE.orders, orders);

    window.location.assign(result.paymentUrl);
  } catch (error) {
    toast("اتصال پرداخت برقرار نشد؛ تنظیمات سرور را بررسی کنید.");
  }
});

$("#reviewForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = $("#reviewName").value.trim();
  const text = $("#reviewText").value.trim();
  const rating = Number($("#reviewRating").value);

  if (!name || !text || rating < 1 || rating > 5) {
    toast("لطفاً اطلاعات نظر را کامل کنید.");
    return;
  }

  customerReviews.unshift({
    name,
    text,
    rating,
    sample: false,
    date: new Date().toISOString()
  });
  writeStore(STORAGE.reviews, customerReviews);
  renderReviews();
  $("#reviewForm").reset();
  toast("نظر فقط در همین مرورگر ذخیره شد.");
});

$("#newsletterForm").addEventListener("submit", (event) => {
  event.preventDefault();
  toast("فرم نمایشی است و هنوز ایمیلی ارسال نمی‌شود.");
  event.target.reset();
});

renderProducts();
renderCart();
renderReviews();
