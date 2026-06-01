let articles_carts  = [
    {img_title: "resource/pasta/1.png", 
    title: 'Spaghetti', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pasta/2.png", 
    title: 'Linguine', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pasta/3.png", 
    title: 'Capellini', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pasta/4.png", 
    title: 'Fettuccine', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pasta/5.png", 
    title: 'Bucatini', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pasta/6.png", 
    title: 'Tortellini', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pasta/7.png", 
    title: 'Fusilli', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pasta/8.png", 
    title: 'Farfalle', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pasta/9.png", 
    title: 'Penne Alla Vodak', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

]

let articles_carts2  = [
    {img_title: "resource/pizza/1.png", 
    title: 'Splitza Signature', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pizza/2.png", 
    title: 'Super Supreme', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pizza/3.png", 
    title: 'Veggie Garden', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pizza/4.png", 
    title: 'Double Beef Burger', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pizza/5.png", 
    title: 'Meat Lovers', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pizza/6.png", 
    title: 'Extravaganzza', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

     {img_title: "resource/pizza/7.png", 
    title: 'Meat & Meat', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pizza/8.png", 
    title: 'Meatzza', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    {img_title: "resource/pizza/9.png", 
    title: 'Tuna Delight', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

]


const article = document.getElementById('articlePeperoni')
const article2 = document.getElementById('articlePeperoni2')

article.innerHTML = articles_carts.map(
    item => `<div class="pizza_article">
                <img src="${item.img_title}" alt="" class="pizza_img">
                <h2>${item.title}</h2>
                <img src="${item.rating}" alt="" class="stars_img">
                <p class="just_text">${item.text}</p>
                <div class="yoy">
                    <p class="price_text">${item.price}</p>
                    <button class="yellow_butt">${item.button_text}</button>
                </div>

            </div>`,
).join('');

article2.innerHTML = articles_carts2.map(
    item => `<div class="pizza_article">
                <img src="${item.img_title}" alt="" class="pizza_img">
                <h2>${item.title}</h2>
                <img src="${item.rating}" alt="" class="stars_img">
                <p class="just_text">${item.text}</p>
                <div class="yoy">
                    <p class="price_text">${item.price}</p>
                    <button class="yellow_butt">${item.button_text}</button>
                </div>

            </div>`,
).join('');

const minus1 = document.getElementById('minus1')
const plus1 = document.getElementById('plus1')
const minus2 = document.getElementById('minus2')
const plus2 = document.getElementById('plus2')
const minus3 = document.getElementById('minus3')
const plus3 = document.getElementById('plus3')


let first_number = document.getElementById('first_number')
let second_number = document.getElementById('second_num')
let thir_number = document.getElementById('third_num')

let price_menu = document.getElementById('price_menu')
let price_menu2 = document.getElementById('price_menu2')
let price_menu3 = document.getElementById('price_menu3')

let price_pr1 = 24
let price_pr2 = 24
let price_pr3 = 24

let price_f = 1
let price_second = 1
let price_th = 1

// minus
minus1.addEventListener('click', () => {
    console.log('click minus1')

    if (first_number.textContent == "0"){
        first_number.textContent == 0
    }
    else{
        price_f -= 1
        price_pr1 -= 24

        first_number.textContent = price_f
        price_menu.textContent = "$" + price_pr1
    }
    

})

// plus
plus1.addEventListener('click', () => {
    console.log('click plus1')

    price_f += 1
    price_pr1 += 24

    first_number.textContent = price_f
    price_menu.textContent = "$" + price_pr1
    

})

// minus
minus2.addEventListener('click', () => {
    console.log('click minus2')

    if (second_number.textContent == "0"){
        second_number.textContent == 0
    }
    else{
        price_second -= 1
        price_pr2 -= 24

        second_number.textContent = price_second
        price_menu2.textContent = "$" + price_pr2
    }
    

})

// plus
plus2.addEventListener('click', () => {
    console.log('click plus2')

    price_second += 1
    price_pr2 += 24

    second_number.textContent = price_second
    price_menu2.textContent = "$" + price_pr
    

})