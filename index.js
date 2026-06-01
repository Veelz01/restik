let articles_carts  = [
    { img_title: "resource/img-article/1.png", 
    title: 'Spaghetti', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    { img_title: "resource/img-article/2.png", 
    title: 'Gnocchi', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    { img_title: "resource/img-article/3.png", 
    title: 'Rovioli', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    { img_title: "resource/img-article/4.png", 
    title: 'Penne Alla Vodak', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    { img_title: "resource/img-article/5.png", 
    title: 'Risoto', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},

    { img_title: "resource/img-article/6.png", 
    title: 'Splitza Signature', 
    rating: "resource/Rating.svg" , 
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. ', 
    price: '$12.05', 
    button_text: 'Order now'},
]

const article = document.getElementById('articlePeperoni')

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