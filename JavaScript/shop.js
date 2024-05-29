document.addEventListener("partialsLoaded", () => {
  import("./burgerMenu.js");
});

const products = [
  {
    id: "1",
    title: "Eternal Circles Ring",
    description:
      "Unveil timeless elegance with our 'Eternal Circles Ring'. Symbolizing infinite connection, this enchanting piece adds a touch of mystique to any ensemble. Embrace eternal beauty today!",
    price: 49.99,
    image: 'img/MagicEternalCirclesRing.jpg"',
  },
  {
    id: "2",
    title: "Magic Forest Ring",
    description:
      "Step into a mystical realm with our 'Magic Forest Ring'. Inspired by nature's wonder, this enchanting piece captures the whimsical allure of an enchanted forest. Embrace its magic today!",
    price: 50,
    image: "img/MAgicForestRing.jpg",
  },
  {
    id: "3",
    title: "Magic Lion Flash Ring",
    description:
      "Channel the fierce elegance of the jungle with our 'Magic Lion Flash Ring'. Crafted with intricate detail, this ring exudes regal power and mystical allure.",
    price: 75,
    image: "img/MagicLionFlashRing.jpg",
  },
  {
    id: "4",
    title: "Magic Sun Ring",
    description:
      "Bask in the radiant glow of our 'Magic Sun Ring'. Inspired by celestial beauty, this enchanting piece captures the warmth and brilliance of the sun, bringing light to your ensemble.",
    price: 55,
    image: "img/MagicSunRing.jpg",
  },
  {
    id: "5",
    title: "Magic Wood Ring",
    description:
      "Embrace the enchantment of nature with our 'Magic Wood Ring'. Crafted from organic materials, this mystical piece embodies the essence of the forest, bringing its wisdom and serenity to your style.",
    price: 69.99,
    image: "img/MagicWoodRing.jpg",
  },
  {
    id: "6",
    title: "Magic Winter Ring",
    description:
      "Embrace the enchantment of the season with our 'Magic Winter Ring'. Inspired by frosty beauty, this captivating piece brings the sparkle and magic of winter to your fingertips.",
    price: 99.99,
    image: "img/MagicWinterRing.jpg",
  },
  {
    id: "7",
    title: "Magic Moonstone",
    description:
      "Illuminate your style with our 'Magic Moonstone' necklace. Crafted with ethereal beauty, this enchanting piece captures the mystique of the moon, adding celestial charm to any ensemble.",
    price: 100.99,
    image: "img/RainbowMoonstoneGemstone.jpg",
  },
  {
    id: "8",
    title: "Magic Crystal Necklace",
    description:
      "Elevate your aura with our 'Magic Crystal Necklace'. Crafted to capture ethereal energies, this enchanting piece exudes mystical allure, adding a touch of magic to your everyday style.",
    price: 150.99,
    image: "img/MagicCrystalNecklaceSmall.jpg",
  },
];

function renderProducts(products) {
  let productsHtml = "";
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
  const productsContainer = document.querySelector(".products__list");
  productsContainer.innerHTML = productsHtml;
}

function createOrderForm(product) {
  const form = document.createElement("form");
  form.setAttribute("action", "https://formspree.io/f/xzbnqopz");
  form.setAttribute("method", "POST");

  form.innerHTML = `
  <div class="order__form">
        <h2 class="form__title">Order ${product.title}</h2>
          <input type="text" id="name" name="name" 
              placeholder="Enter your name*"
                required class="form__item">
          <input type="email" id="email" name="email"
              placeholder="Enter your e-mail*"
                  required class="form__item">
          <input type="text" id="quantity" name="quantity" 
              placeholder="Enter quantity of product*"
                  required class="form__item">
          <input type="hidden" name="product_id" value="${product.id}">
          <input type="hidden" name="product_name" value="${product.title}">

        <div class="form__buttons">
          <button type="submit" class="form__button">Submit</button>
          <button type="undo" class="form__button__undo">Undo</button>
        </div>
        </div>
    `;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(form.getAttribute("action"), {
        method: form.getAttribute("method"),
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thanks for your submission!");
        form.remove();
      } else {
        alert("Form submission failed!");
      }
    } catch (error) {
      alert("Error submitting form:", error);
    }
  });

  const undoButton = form.querySelector(".form__button__undo");
  undoButton.addEventListener("click", () => {
    form.remove();
    alert("order cancelled");
  });

  return form;
}

// function handleOrderButtonClick(event) {
//   event.preventDefault();
//   const productId = event.target.dataset.productId;
//   const product = products.find((item) => item.id === productId);
//   if (product) {
//     const orderForm = createOrderForm(product);
//     document.body.appendChild(orderForm);
//   }
// }

function handleOrderButtonClick(event) {
  event.preventDefault();
  const productId = event.target.dataset.productId;
  const product = products.find((item) => item.id === productId);
  if (product) {
    const orderForm = createOrderForm(product);
    const firstChild = document.body.firstChild;
    document.body.insertBefore(orderForm, firstChild);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);

  const orderButtons = document.querySelectorAll(".product-card__buttons-buy");
  orderButtons.forEach((button) => {
    button.addEventListener("click", handleOrderButtonClick);
  });
});
