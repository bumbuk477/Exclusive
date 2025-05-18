let product = document.querySelectorAll(".product")
let cart = document.querySelectorAll(".cart")
let item_name = document.querySelectorAll(".item_name")
let price = document.querySelectorAll(".price")
let add_to_cart = document.querySelectorAll(".add_to_cart")
let product_in_cart = document.querySelectorAll(".product_in_cart")
cart = []
function add_to_cart1(){
    product_in_cart = document.createAttribute("li") in cart
product_in_cart = document.textContent(`${item_name} - ${price}`)
}
add_to_cart = document.addEventListener("click",add_to_cart1)
