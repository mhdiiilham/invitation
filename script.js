document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const rsvpForm = document.getElementById('rsvp-form');
    const rsvpFormContainer = document.getElementById('rsvp-form-container');
    const passContainer = document.getElementById('pass-container');
    const guestNameElement = document.getElementById('guest-name');
    const guestCountElement = document.getElementById('guest-count');
    const savePassBtn = document.getElementById('save-pass-btn');
    const attendingYes = document.getElementById('attending-yes');
    const attendingNo = document.getElementById('attending-no');
    const guestsContainer = document.getElementById('guests-container');
    const viewMapBtn = document.querySelector('.view-map-btn');
    
    // Music player elements
    const backgroundMusic = document.getElementById('background-music');
    const musicToggle = document.getElementById('music-toggle');
    let isMusicPlaying = false;

    // Initialize music (will play on first user interaction)
    function initMusic() {
        // Play music on first user interaction
        document.body.addEventListener('click', function musicHandler() {
            backgroundMusic.play().then(() => {
                isMusicPlaying = true;
                document.body.removeEventListener('click', musicHandler);
            }).catch(error => {
                console.error("Audio play failed:", error);
            });
        }, { once: true });

        // Music toggle button
        musicToggle.addEventListener('click', function() {
            if (isMusicPlaying) {
                backgroundMusic.pause();
                musicToggle.classList.add('muted');
            } else {
                backgroundMusic.play();
                musicToggle.classList.remove('muted');
            }
            isMusicPlaying = !isMusicPlaying;
        });
    }

    // Initialize music
    initMusic();

    // Smooth scroll for sections
    document.querySelectorAll('.scroll-indicator').forEach(indicator => {
        indicator.addEventListener('click', function() {
            const currentSection = this.closest('.section');
            const nextSection = currentSection.nextElementSibling;
            
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Show/hide guests dropdown based on attendance
    attendingYes.addEventListener('change', function() {
        guestsContainer.style.display = 'block';
    });

    attendingNo.addEventListener('change', function() {
        guestsContainer.style.display = 'none';
    });

    // Handle form submission
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(rsvpForm);
        const name = formData.get('name');
        const attending = formData.get('attending');
        
        if (attending === 'yes') {
            const guests = formData.get('guests');
            
            // Generate a unique code for the barcode
            const uniqueCode = generateUniqueCode(name);
            
            // Display the pass
            guestNameElement.textContent = name;
            guestCountElement.textContent = `Number of Guests: ${guests}`;
            
            // Generate barcode
            JsBarcode("#barcode", uniqueCode, {
                format: "CODE128",
                lineColor: "#000",
                width: 2,
                height: 50,
                displayValue: true
            });
            
            // Show pass container, hide form
            rsvpFormContainer.style.display = 'none';
            passContainer.style.display = 'block';
        } else {
            // If not attending, show a thank you message
            rsvpFormContainer.innerHTML = `
                <h2 class="script-heading">Thank You</h2>
                <p>Thank you for letting us know. We're sorry you won't be able to join us, but we appreciate your response.</p>
            `;
        }
    });

    // Handle save pass button
    savePassBtn.addEventListener('click', function() {
        // Create a canvas from the pass card
        html2canvas(document.querySelector('.pass-card')).then(canvas => {
            // Create a download link
            const link = document.createElement('a');
            link.download = 'wedding-pass.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });

    // View map button
    viewMapBtn.addEventListener('click', function() {
        // Replace with actual map coordinates
        window.open('https://maps.google.com/?q=Evergreen+Gardens,New+York', '_blank');
    });

    // Function to generate a unique code for the barcode
    function generateUniqueCode(name) {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000);
        return `WED-${name.substring(0, 3).toUpperCase()}-${timestamp.toString().substring(7)}-${randomNum}`;
    }
});