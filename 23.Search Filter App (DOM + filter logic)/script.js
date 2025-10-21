const searchInput = document.getElementById("search-item");
const categoryFilter = document.getElementById("category-filter");
const minPriceInput = document.getElementById("min-price");
const maxPriceInput = document.getElementById("max-price");
const filterBtn = document.getElementById("filter-btn");
const products = document.querySelectorAll(".product");

function filterProducts() {
  const searchBox = searchInput.value.toUpperCase();
  const selectedCategory = categoryFilter.value;
  const minPrice = Number(minPriceInput.value) || 0;
  const maxPrice = Number(maxPriceInput.value) || Infinity;

  products.forEach(product => {
    const name = product.getElementsByTagName("h2")[0].textContent.toUpperCase();
    const category = product.getAttribute("data-category");
    const price = Number(product.getAttribute("data-price"));

    const matchesSearch = name.indexOf(searchBox) > -1;
    const matchesCategory = selectedCategory === "all" || category === selectedCategory;
    const matchesPrice = price >= minPrice && price <= maxPrice;

    if (matchesSearch && matchesCategory && matchesPrice) {
      product.style.display = "";
    } else {
      product.style.display = "none";
    }
  });
}

// Live search and category filter
searchInput.addEventListener("keyup", filterProducts);
categoryFilter.addEventListener("change", filterProducts);
filterBtn.addEventListener("click", filterProducts);
