// Sample Images Data
const images = [
    { src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8MXwwfHx8MA%3D%3D', title: 'Architecture 1', category: 'Architecture' },
    { src: 'https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D', title: 'Nature 1', category: 'Nature' },
    { src: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5pbWFsfGVufDB8MXwwfHx8MA%3D%3D', title: 'Animal 1', category: 'Animals' },
    { src: 'https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFydmVsfGVufDB8MXwwfHx8MA%3D%3D', title: 'Marvel 1', category: 'Marvels' },
    { src: 'https://plus.unsplash.com/premium_photo-1684445035564-c98efbe1fb7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJjaGl0ZWN0dXJlfGVufDB8MXwwfHx8MA%3D%3D', title: 'Architecture 2', category: 'Architecture' },
    { src: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D', title: 'Nature 2', category: 'Nature' },
    { src: 'https://images.unsplash.com/photo-1562569633-622303bafef5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YW5pbWFsfGVufDB8MXwwfHx8MA%3D%3D', title: 'Animal 2', category: 'Animals' },
    { src: 'https://images.unsplash.com/photo-1534809027769-b00d750a6bac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFydmVsfGVufDB8MXwwfHx8MA%3D%3D', title: 'Marvel 2', category: 'Marvels' },
    { src: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFyY2hpdGVjdHVyZXxlbnwwfDF8MHx8fDA%3D', title: 'Architecture 3', category: 'Architecture' },
    { src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D', title: 'Nature 3', category: 'Nature' },
    { src: 'https://images.unsplash.com/photo-1564166174574-a9666f590437?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFuaW1hbHxlbnwwfDF8MHx8fDA%3D', title: 'Animal 3', category: 'Animals' },
    { src: 'https://images.unsplash.com/photo-1587270613304-4cc9ef012b92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1hcnZlbHxlbnwwfDF8MHx8fDA%3D', title: 'Marvel 3', category: 'Marvels' },
    { src: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFyY2hpdGVjdHVyZXxlbnwwfDF8MHx8fDA%3D', title: 'Architecture 4', category: 'Architecture' },
    { src: 'https://plus.unsplash.com/premium_photo-1675827055620-24d540e0892a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmF0dXJlfGVufDB8MXwwfHx8MA%3D%3D', title: 'Nature 4', category: 'Nature' },
    { src: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1hbHxlbnwwfDF8MHx8fDA%3D', title: 'Animal 4', category: 'Animals' },
    { src: 'https://images.unsplash.com/photo-1636840438199-9125cd03c3b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fG1hcnZlbHxlbnwwfDF8MHx8fDA%3D', title: 'Marvel 4', category: 'Marvels' },
];


// Function to display images in the gallery
function displayImages(filteredImages) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    filteredImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.title}">
            <div class="overlay">${image.title}</div>
        `;
        gallery.appendChild(galleryItem);
    });
}

// Function to filter images by category
function filterImages(category) {
    return images.filter(image => category === 'all' || image.category === category);
}

// Function to search images by title
function searchImages(query) {
    const category = document.getElementById('filter').value;
    const filteredImages = filterImages(category);
    return filteredImages.filter(image => image.title.toLowerCase().includes(query.toLowerCase()));
}

// Event Listener for Search Input
document.getElementById('search').addEventListener('input', (e) => {
    const query = e.target.value;
    const searchedImages = searchImages(query);
    displayImages(searchedImages);
});

// Event Listener for Filter Dropdown
document.getElementById('filter').addEventListener('change', (e) => {
    const category = e.target.value;
    const filteredImages = filterImages(category);
    displayImages(filteredImages);
});

// Display all images on initial load
displayImages(images);
