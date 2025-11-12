/* --- Star Rating Functions --- */
const stars = document.querySelectorAll('#star-rating i');
const message = document.getElementById('rating-message');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const ratingValue = star.getAttribute('data-rating');
        
        // Set the status of all stars
        stars.forEach(s => {
            s.classList.remove('fas', 'rated');
            s.classList.add('far');
        });
        
        // Color the selected stars and those before it
        for (let i = 0; i < ratingValue; i++) {
            stars[i].classList.remove('far');
            stars[i].classList.add('fas', 'rated');
        }

        // Display a feedback message
        message.textContent = `ขอบคุณสำหรับ ${ratingValue} ดาว!`;
        
        // In a real application, you would send this ratingValue to a server here.
        console.log('User rated:', ratingValue);
    });
    
    // Optional: Add hover effect (visual feedback)
    star.addEventListener('mouseover', () => {
        const hoverValue = star.getAttribute('data-rating');
        stars.forEach((s, index) => {
            if (index < hoverValue) {
                s.style.color = '#ffd700'; // Gold on hover
            } else {
                s.style.color = '';
            }
        });
    });
    
    star.addEventListener('mouseout', () => {
        stars.forEach(s => {
            s.style.color = ''; // Reset color if not rated
        });
    });
});

/* --- Modal Functions --- */
function showModal() {
    document.getElementById('updateModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('updateModal').style.display = 'none';
}

// เรียกใช้ Modal ทันทีที่หน้าเว็บโหลดเสร็จ
window.onload = showModal; 

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
            darkModeToggle.style.backgroundColor = '#ffaa00';
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
            darkModeToggle.style.backgroundColor = '#1976d2';
        }
    }

    // Check localStorage for previous preference on load
    (function checkDarkModePreference() {
        if (localStorage.getItem('dark-mode') === 'true') {
            body.classList.add('dark-mode');
            // Manually update button state when the window finishes loading
            window.addEventListener('load', () => {
                if (darkModeToggle) { // Check again in case load fires after other scripts run
                    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
                    darkModeToggle.style.backgroundColor = '#ffaa00';
                }
            });
        }
    })();

    // Attach event listener to the button
    darkModeToggle.addEventListener('click', toggleDarkMode);
}
