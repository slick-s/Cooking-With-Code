document.addEventListener('DOMContentLoaded', () => {
    const cuisineList = document.getElementById('cuisine-list');

    // Array of cuisines for demonstration purposes
    const cuisines = [
        { name: 'American', image: 'https://www.themealdb.com/images/icons/american.png', page: 'american.html' },
        { name: 'Chinese', image: 'https://www.themealdb.com/images/icons/chinese.png', page: 'chinese.html' },
        { name: 'French', image: 'https://www.themealdb.com/images/icons/french.png', page: 'french.html' },
        { name: 'Italian', image: 'https://www.themealdb.com/images/icons/italian.png', page: 'italian.html' }
    ];

    // Function to create cuisine items
    cuisines.forEach(cuisine => {
        const cuisineDiv = document.createElement('div');
        cuisineDiv.className = 'cuisine';

        const cuisineImage = document.createElement('img');
        cuisineImage.src = cuisine.image;
        cuisineImage.alt = cuisine.name;

        const cuisineTitle = document.createElement('h3');
        cuisineTitle.textContent = cuisine.name;

        const cuisineButton = document.createElement('button');
        cuisineButton.textContent = `Explore ${cuisine.name}`;
        cuisineButton.onclick = () => {
            window.location.href = cuisine.page;
        };

        cuisineDiv.appendChild(cuisineImage);
        cuisineDiv.appendChild(cuisineTitle);
        cuisineDiv.appendChild(cuisineButton);
        cuisineList.appendChild(cuisineDiv);
    });
});