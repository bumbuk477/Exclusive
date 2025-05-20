// let product = document.querySelectorAll(".product")
// let cart = document.querySelectorAll(".cart")
let item_name = document.querySelectorAll(".item_name")
let price = document.querySelectorAll(".price")
let add_to_cart = document.querySelectorAll(".add_to_cart")
// let product_in_cart = document.querySelectorAll(".product_in_cart")
let cardItems = []
let search = document.querySelector(".search")

// let products = getCookieObject('product')

// function add_to_cart1(){
//     product_in_cart = document.createAttribute("li") in cart
// product_in_cart = document.textContent(`${item_name} - ${price}`)
// }
// add_to_cart = document.addEventListener("click",add_to_cart1)

const cart = document.getElementById('cart');
const openCartBtn = document.getElementById('open-cart-btn');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const cartItemsList = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

function searchbyname() {
    let filter = search.value.toUpperCase();
    let products = document.querySelectorAll(".product");
    for (let i = 0; i < products.length; i++) {
        let name = products[i].querySelector(".item_name").textContent;
        if (name.toUpperCase().indexOf(filter) > -1) {
            products[i].style.display = "";
        } else {
            products[i].style.display = "none";
        }
    }
}
if (search) {
    search.addEventListener("keyup", searchbyname);
}
let cookie = false
let cookies = document.cookie.split('; ')

for (let i = 0; i < cookies.length; i += 1) {
    if (cookies[i].split('=')[0] == 'product') {
        cookie = cookies[i].split('=')[1]
        break
    }
}
if (cookie) {
  // let data = cookies.split('/')
  console.log(cookies)
}

function updateCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    cardItems.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="cart-item-name">${item.name}</span>
        <span class="cart-item-price">₴${item.price}</span>
        <button class="remove-item-btn" data-id="${item.name}" aria-label="Видалити товар">&times;</button>
      `;
      cartItemsList.appendChild(li);
      total += +item.price;
    });
    cartTotal.textContent = `₴${total}`;
    cart.style.display = 'block';
  }

  
  // Видалити товар з кошика
  cartItemsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item-btn')){
    for (let i = 0; i < cardItems.length; i++) {
      if (cardItems[i].name === e.target.dataset.id) {
        delete cardItems[i]
        break
      }
    }
      updateCart();
    }})

  
  // Відкриття/закриття кошика
  openCartBtn.addEventListener('click', () => {
    // cart.classList.remove('hidden');
    cart.style.display = 'block';
  });
  
  closeCartBtn.addEventListener('click', () => {
    // cart.classList.add('hidden');
    cart.style.display = 'none';
  });
  
  // Додавання товарів із каталогу та слайдшоу
for (let i = 0; i < add_to_cart.length; i++) {
    add_to_cart[i].addEventListener("click", function() {
      name = item_name[i].textContent;
      suma = price[i].textContent;
    if (name != "" && suma != "") {
      const product = {
        name: name,
        price: suma,
      };
      cardItems.push(product);
      let new_cookie = `product=${cardItems}; max-age=10000000000`
      document.cookie = new_cookie
      console.log(document.cookie)
      updateCart();
    }})}

  // --- Кнопка Сплатити ---
  checkoutBtn.addEventListener('click', () => {
    window.location.href = 'checkout.html';
  });


