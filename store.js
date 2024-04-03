let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} added to cart.`);
}

function buyNow(productName, price) {
    addToCart(productName, price);
    proceedToCheckout();
}

function proceedToCheckout() {
    const cartList = document.getElementById('cartList');
    cartList.innerHTML = '';

    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.productName} - $${item.price}`;
        cartList.appendChild(li);
    });

    openModal();
}

function openModal() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}
// ... (previous JavaScript code) ...

function proceedToCheckout() {
  const cartList = document.getElementById('cartList');
  const addressInput = document.getElementById('address');
  const phoneInput = document.getElementById('phone');

  // Validate address and phone number
  if (!addressInput.checkValidity() || !phoneInput.checkValidity()) {
      alert('Please enter valid delivery information.');
      return;
  }

  const deliveryInfo = {
      address: addressInput.value,
      phone: phoneInput.value
  };

  cartList.innerHTML = '';

  if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
  }

  cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.productName} - $${item.price}`;
      cartList.appendChild(li);
  });

  // You can now use the 'deliveryInfo' object to send the information to the server

  openModal();
}
