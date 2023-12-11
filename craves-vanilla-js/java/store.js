
const closeCartBtn = document.querySelector('.close-cart-js');
const overlayCart = document.querySelector('.overlay-cart-js');
const cartArea = document.querySelector('.cart-js');
const cartIcon = document.querySelector('.cart-icon-js');
const innerCartHTML = document.querySelector('.cart-content');
const cartItemDiv = document.querySelector('.cart-item');
const magnifyGlass = document.querySelector('.magnify-glass-js');
const checkoutScreen = document.querySelector('.checkout-screen');

magnifyGlass.addEventListener('click', () => {
    document.querySelector('.search-input-js').classList.toggle('search-input-visible');
});


let productsHTML = '';

products.forEach((product) => {
    productsHTML += `
    <div class="product-container">
        <figure>
            <div><img onclick="addToCart(${product.id})" src="${product.image}"></div>
        </figure>
        <p>${product.name}</p>
        <div class="price">$${(product.priceCents / 100).toFixed(2)}</div>
        <button onclick="addToCart(${product.id})" class="addBtn">Add To Cart</button>
    </div>
    `;
});

document.querySelector('.product-grid').innerHTML = productsHTML;

closeCartBtn.addEventListener('click', () => {
    overlayCart.classList.toggle('transparent-bcg');
    cartArea.classList.toggle('showCart');
});

cartIcon.addEventListener('click', () => {
    overlayCart.classList.toggle('transparent-bcg');
    cartArea.classList.toggle('showCart');
});



updateCart()

function addToCart(id) {
    if (cart.some((item) => item.id === id)) {
        changeUnitNumber('plus', item.id)
    } else {
        const item = products.find(product => product.id === id)
        
        cart.push({
            ...item,
            quantity: 1
        })
    }

    updateCart()
}

function updateCart() {
    renderCartItems()
    renderCartTotals()

    localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCartItems() {
    cartItemDiv.innerHTML = "";

    cart.forEach((item) => {
        cartItemDiv.innerHTML += `
        <img src="${item.image}">
        <div>
            <h4>${item.name}</h4>
            <h5 class="item-money-amount">$${(item.priceCents / 100).toFixed(2)}</h5>
            <span onclick="removeItem(${item.id})" class="remove-item">remove</span>
        </div>
        <div>
            <i class="fas fa-chevron-up" onclick="changeUnitNumber('plus', ${item.id})"></i>
            <p class="item-amount">${item.quantity}</p>
            <i class="fas fa-chevron-down" onclick="changeUnitNumber('minus', ${item.id})"></i>
        </div>
        `;
    })
}

function renderCartTotals() {
    let cartSubtotal = 0;
    let cartAmount = 0;
    let taxTotal = 0;
    let cartTotal = 0;
    cart.forEach((item) => {
        cartSubtotal += item.priceCents * item.quantity;
        cartAmount += item.quantity;
        taxTotal += cartSubtotal * 0.0625;
        cartTotal= cartSubtotal + taxTotal + 1000;
    })
    console.log()
    document.querySelector('.cart-total').innerHTML = (cartSubtotal / 100).toFixed(2);
    document.querySelector('.cart-items').innerHTML = cartAmount;
    document.querySelector('.cart-total1').innerHTML = (cartSubtotal / 100).toFixed(2);
    document.querySelector('.tax').innerHTML = (taxTotal / 100).toFixed(2)
    document.querySelector('.final-total').innerHTML = (cartTotal / 100).toFixed(2)
}


function changeUnitNumber(action, id) {
    cart = cart.map((item) => {
        quantity = item.quantity;
        
        if (item.id === id) {
            if (action === 'minus' && quantity > 1) {
                quantity--
            } else if (action === 'plus' && quantity < item.instock) {
                quantity++
            }
        }

        return {
            ...item,
            quantity
        }
    })
    updateCart()
}

function removeItem(id) {
    cart = cart.filter((item) => item.id !== id) 
    
    updateCart()
}

document.querySelector('.clear-cart').addEventListener('click', () => {
    cart = [];
    updateCart()
})

document.querySelector('.cart-checkout').addEventListener('click', () => {
    checkoutScreen.classList.toggle('no-show-checkout');
})

document.querySelector('.x-checkout').addEventListener('click', () => {
    checkoutScreen.classList.toggle('no-show-checkout');
})




