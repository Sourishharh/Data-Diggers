// Add event listeners to sidebar links
document.getElementById('dashboard').addEventListener('click', function() {
    loadContent('dashboard.html', 'dashboard');
});

document.getElementById('hostel').addEventListener('click', function() {
    loadContent('hostel.html', 'hostel');
});

document.getElementById('canteen').addEventListener('click', function() {
    loadContent('canteen.html', 'canteen');
});

document.getElementById('library').addEventListener('click', function() {
    loadContent('library.html', 'library');
});

// Load content function to update the main area and highlight active menu item
function loadContent(page, menuItemId) {
    // Remove active class from all sidebar items
    const menuItems = document.querySelectorAll('#sidebar a');
    menuItems.forEach(item => item.classList.remove('active'));
    
    // Add active class to clicked item
    document.getElementById(menuItemId).classList.add('active');
    
    // Fetch the content and load into main-content
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('main-content').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}
