/* --- Dark Mode Functions --- */
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

if (darkModeToggle) {
    function toggleDarkMode() {
        body.classList.toggle('dark-mode');
        
        // Save preference to localStorage
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);

        // Update button icon/text
        if (isDarkMode) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
            darkModeToggle.style.backgroundColor = 'var(--primary-dark)'; // Adjust button color in dark mode
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            darkModeToggle.style.backgroundColor = 'var(--secondary-color)';
        }
    }

    // Check localStorage for previous preference on load
    (function checkDarkModePreference() {
        if (localStorage.getItem('dark-mode') === 'true') {
            body.classList.add('dark-mode');
            // Manually update button state when the window finishes loading
            window.addEventListener('load', () => {
                if (darkModeToggle) {
                    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
                    darkModeToggle.style.backgroundColor = 'var(--primary-dark)'; // Adjust button color in dark mode
                }
            });
        }
    })();

    // Attach event listener to the button
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

/* --- Star Rating Functions --- */
const stars = document.querySelectorAll('#star-rating i');
const message = document.getElementById('rating-message');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const ratingValue = star.getAttribute('data-rating');
        
        // Set the status of
