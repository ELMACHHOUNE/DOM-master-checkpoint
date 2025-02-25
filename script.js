document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.getElementById("cart-container");

  const cartItems = [
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
    { id: 2, name: "Product 2", price: 20, quantity: 2 },
    { id: 3, name: "Product 3", price: 30, quantity: 3 },
    { id: 6, name: "Product 4", price: 25, quantity: 1 },
    { id: 4, name: "Product 5", price: 15, quantity: 2 },
    { id: 5, name: "Product 6", price: 40, quantity: 1 },
  ];

  function renderCart() {
    cartContainer.innerHTML = "";

    cartItems.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className =
        "flex items-center justify-between bg-white shadow-lg p-4 rounded-lg mb-4";

      const nameSpan = document.createElement("span");
      nameSpan.textContent = item.name;
      nameSpan.className = "font-semibold text-lg w-32";

      // Like button
      const likeBtn = document.createElement("button");
      likeBtn.innerHTML = "🖤"; // Default is black heart (unliked)
      likeBtn.className =
        "text-gray-500 hover:text-red-500 transition duration-300 text-xl";
      likeBtn.addEventListener("click", () => {
        if (likeBtn.innerHTML === "🖤") {
          likeBtn.innerHTML = "❤️"; // Change to red heart (liked)
        } else {
          likeBtn.innerHTML = "🖤"; // Change back to black heart (unliked)
        }
      });

      // Minus button
      const minusBtn = document.createElement("button");
      minusBtn.textContent = "-";
      minusBtn.className =
        "bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-lg";
      minusBtn.addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
          updateCart();
        }
      });

      const quantitySpan = document.createElement("span");
      quantitySpan.textContent = item.quantity;
      quantitySpan.className = "text-lg font-semibold mx-3";

      // Plus button
      const plusBtn = document.createElement("button");
      plusBtn.textContent = "+";
      plusBtn.className =
        "bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded text-lg";
      plusBtn.addEventListener("click", () => {
        item.quantity++;
        updateCart();
      });

      // Price span
      const priceSpan = document.createElement("span");
      priceSpan.textContent = `$${item.price * item.quantity}`;
      priceSpan.className = "font-semibold text-gray-800 w-20 text-center";

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "🗑️";
      deleteBtn.className =
        "text-gray-500 hover:text-red-500 transition duration-300 text-xl";
      deleteBtn.addEventListener("click", () => {
        cartItems.splice(index, 1);
        updateCart();
      });

      // Append elements to cartItem
      cartItem.appendChild(nameSpan);
      cartItem.appendChild(likeBtn);
      cartItem.appendChild(minusBtn);
      cartItem.appendChild(quantitySpan);
      cartItem.appendChild(plusBtn);
      cartItem.appendChild(priceSpan);
      cartItem.appendChild(deleteBtn);

      // Append cartItem to cartContainer
      cartContainer.appendChild(cartItem);
    });

    const totalPrice = document.createElement("h2");
    totalPrice.innerHTML =
      "Total Price: $" +
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    totalPrice.className = "text-xl font-bold text-center mt-4";
    cartContainer.appendChild(totalPrice);
  }

  function updateCart() {
    renderCart();
  }

  renderCart();
});
