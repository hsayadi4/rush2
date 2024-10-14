function searchProducts() {
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card'); // Sélectionne tous les produits

  productCards.forEach(product => {
      const productName = product.querySelector('h4').textContent.toLowerCase();
      const productCategory = product.querySelector('h5').textContent.toLowerCase();

      // Vérifie si le terme recherché est dans le nom ou la catégorie
      if (productName.includes(searchTerm) || productCategory.includes(searchTerm)) {
          product.style.display = 'block'; // Affiche le produit s'il correspond
      } else {
          product.style.display = 'none'; // Cache le produit s'il ne correspond pas
      }
  });
}

// Écouteur d'événements pour la barre de recherche
document.getElementById('search-input').addEventListener('input', searchProducts);


const rangeMin = document.getElementById('range-min');
const rangeMax = document.getElementById('range-max');
const priceMinOutput = document.getElementById('price-min');
const priceMaxOutput = document.getElementById('price-max');

rangeMin.addEventListener('input', function() {
    if (parseInt(rangeMin.value) > parseInt(rangeMax.value) - 10) {
        rangeMin.value = rangeMax.value - 10; // Garde un écart minimum
    }
    priceMinOutput.textContent = rangeMin.value;
});

rangeMax.addEventListener('input', function() {
    if (parseInt(rangeMax.value) < parseInt(rangeMin.value) + 10) {
        rangeMax.value = rangeMin.value + 10; // Garde un écart minimum
    }
    priceMaxOutput.textContent = rangeMax.value;
});
