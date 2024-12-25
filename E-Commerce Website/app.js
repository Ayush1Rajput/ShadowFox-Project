document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById("productContainer");
    const productTemplate = document.getElementById("productTemplate").content;
  
    // Fetch data from the external JSON file
    fetch('./API/data.json')
      .then(response => response.json())
      .then(data => {
        // Iterate over the categories and products
        data.categories.forEach((category) => {
          category.products.forEach((product) => {
            const card = createCard(product);
            productContainer.appendChild(card);
          });
        });
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  
    function createCard(product) {
      const cardClone = document.importNode(productTemplate, true);
  
      cardClone.querySelector(".productName").textContent = product.name;
      cardClone.querySelector(".productDescription").textContent = product.description;
      cardClone.querySelector(".productPrice").textContent = `₹${product.price.toFixed(2)}`;
      cardClone.querySelector(".productImg").src = product.image;
      // Add the stock information
      cardClone.querySelector(".productStock").textContent = `${product.total_stock}`;
      
      // Add event listener for "Add to Cart" button (optional)
      cardClone.querySelector(".add-to-cart-button").addEventListener("click", () => {
        // Handle "Add to Cart" logic here
        console.log(`${product.name} added to cart!`);
      });
  
      return cardClone;
    }
  });
  