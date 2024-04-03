document.addEventListener('DOMContentLoaded', function() {
  const productsSection = document.getElementById('products');
  const cartItems = document.getElementById('cart-items');
  const checkoutButton = document.getElementById('checkout');
  const deliveryForm = document.getElementById('delivery-form');

  productsSection.addEventListener('click', function(event) {
      if (event.target.classList.contains('add-to-cart')) {
          const product = event.target.closest('.product');
          const productId = product.getAttribute('data-product-id');
          const productName = product.querySelector('h3').textContent;

          const cartItem = document.createElement('li');
          cartItem.textContent = productName;
          cartItems.appendChild(cartItem);
      }
  });

  checkoutButton.addEventListener('click', function() {
      document.getElementById('delivery').scrollIntoView({ behavior: 'smooth' });
  });

  deliveryForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const address = document.getElementById('address').value;
      alert(`Order placed! Delivery address: ${address}`);
  });
});





