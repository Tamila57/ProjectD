document.addEventListener("partialsLoaded", () => {
    import("./burgerMenu.js");
  });

const products = [
    {
        id: '1',
        title: 'Eternal Circles Ring',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 49.99,
        image: 'img/MagicEternalCirclesRing.jpg"'
    },
    {
        id: '2',
        title: 'Magic Forest Ring',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 50,
        image: 'img/MAgicForestRing.jpg'
    },
    {
        id: '3',
        title: 'Magic Lion Flash Ring',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 75,
        image: 'img/MagicLionFlashRing.jpg'
    },
    {
        id: '4',
        title: 'Magic Sun Ring',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 55,
        image: 'img/MagicSunRing.jpg'
    },
    {
        id: '5',
        title: 'Magic Wood Ring',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 69.99,
        image: 'img/MagicWoodRing.jpg'
    },
    {
        id: '6',
        title: 'Magic Winter Ring',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati, tenetur recusandae, corporis itaque suscipit. Vero illo nulla asperiores laudantium tempore porro!',
        price: 99.99,
        image: 'img/MagicWinterRing.jpg'
    },
    
];

function renderProducts(products) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
        <article class="product-card">
            <img src="${product.image}" alt="${product.title}">
            <h3 class="product-card__h3">${product.title}</h3>
            <p class="product-card__description">${product.description}
            </p>
            <p class="product__price">${product.price} USD</p>
            <div class="product-card__buttons">
                <a href="#" class="product-card__buttons-buy" data-product-id="${product.id}">
                    Order 
                </a>
            </div>
        </article>`;
    }
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsHtml;
}

// function handleOrderButtonClick(event) {
//     event.preventDefault();
//     const productId = event.target.dataset.productId;
//     const product = products.find(item => item.id === productId);
//     if (product) {
        
//         console.log(`Ordering ${product.title}`);
//     }
// }

function createOrderForm(product) {
    // Створення форми для замовлення
    const form = document.createElement('form');
    form.innerHTML = `
        <h2>Order ${product.title}</h2>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <input type="hidden" name="product_id" value="${product.id}">
        <button type="submit">Submit</button>
    `;

    // Обробник події для відправки форми замовлення
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const formDataObject = Object.fromEntries(formData.entries());
        console.log('Order:', formDataObject); // Тут ви можете відправити дані форми на сервер або виконати інші дії з ними
        // Очищення форми після відправки
        form.remove();
    });

    return form;
}

function handleOrderButtonClick(event) {
    event.preventDefault();
    const productId = event.target.dataset.productId;
    const product = products.find(item => item.id === productId);
    if (product) {
        // Створення та відображення форми замовлення
        const orderForm = createOrderForm(product);
        document.body.appendChild(orderForm);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);

    const orderButtons = document.querySelectorAll('.product-card__buttons-buy');
    orderButtons.forEach(button => {
        button.addEventListener('click', handleOrderButtonClick);
    });
});
