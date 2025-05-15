let cart = document.querySelector(".cart")
let cart_item =document.querySelector(".cart_item")
let price = document.querySelector(".price")
let item_name = document.querySelector(".item_name")
let add_to_cart = document.querySelector(".add_to_cart")
cart =[]
add_to_cart.addEventListener('click', function(){
   cart.push({item_name,price}) 
   alert(`${item_name}} додано в кошик`)
   let li =document.createElement("li")
   li.textContent(`${item_name}  -  ${price}`)
})