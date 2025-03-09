// Example: Search functionality handler
document.getElementById('searchForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value;
    // Implement search logic (e.g., filter components from a JSON list)
    console.log("Searching for:", query);
    // Display search results in the #results div.
  });
  document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully.');
  });
  fetch('components.json')
  .then(response => response.json())
  .then(components => {
    const container = document.getElementById('componentsContainer');
    components.forEach(comp => {
      const card = document.createElement('div');
      card.className = 'component-card';
      card.innerHTML = `
        <img src="${comp.image}" alt="${comp.model}">
        <h3>${comp.brand} ${comp.model}</h3>
        <p>Type: ${comp.type}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));
  