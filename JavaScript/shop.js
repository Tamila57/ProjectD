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
                <button class="product-card__buttons-buy button button-card">
                    Buy 
                </button>
            </div>
        </article>`;
    }
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsHtml;
}

renderProducts(products);