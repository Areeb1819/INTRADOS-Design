// Navbar scroll script same rahegi
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNavbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled', 'shadow-sm');
        navbar.classList.remove('custom-navbar');
    } else {
        navbar.classList.remove('navbar-scrolled', 'shadow-sm');
        navbar.classList.add('custom-navbar');
    }
});

// Naya Updated Video Toggle Function
function toggleVideo() {
    var video = document.getElementById("customVideo");
    var btn = document.getElementById("playBtn");

    if (video.paused) {
        video.play();
        btn.style.display = "none"; // Video chalne par button chup jayega
    } else {
        video.pause();
        btn.style.display = "flex"; // Video rukne par button wapis aa jayega
    }
}

// Yeh line add karein taake video ke upar click karne se bhi video pause ho sakay
document.getElementById("customVideo").addEventListener('click', function () {
    var video = document.getElementById("customVideo");
    var btn = document.getElementById("playBtn");

    if (!video.paused) {
        video.pause();
        btn.style.display = "flex"; // Button wapis show ho jayega
    }
});

function openLightbox(imageSrc) {
    var modal = document.getElementById("customLightbox");
    var modalImg = document.getElementById("lightboxImage");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

function closeLightbox() {
    var modal = document.getElementById("customLightbox");
    modal.style.display = "none";
}

window.onclick = function (event) {
    var modal = document.getElementById("customLightbox");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Counter Animation Script
document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter-number");
    let speed = 200; // Jitna kam number hoga, counting utni tez hogi

    const startCounting = (counter) => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(() => startCounting(counter), 15);
        } else {
            counter.innerText = target;
        }
    };

    // Jab user scroll kar ke is section par aaye ga tab counter shuru hoga
    window.addEventListener("scroll", () => {
        const section = document.querySelector(".stats-section");
        if (section) {
            const sectionPos = section.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;

            if (sectionPos < screenPos) {
                counters.forEach(counter => {
                    if (counter.innerText === "0") {
                        startCounting(counter);
                    }
                });
            }
        }
    });
});

// Scroll to Top Click Function
const scrollTopBtn = document.getElementById("scrollTopBtn");
if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Theme Toggle Function
const themeToggleBtn = document.getElementById("themeToggle");
const bodyElement = document.body;

if (themeToggleBtn) {
    const themeIcon = themeToggleBtn.querySelector("i");

    // Check if user has selected dark mode previously
    if (localStorage.getItem("theme") === "dark") {
        bodyElement.classList.add("dark-mode");
        if (themeIcon) {
            themeIcon.classList.remove("bi-moon");
            themeIcon.classList.add("bi-sun");
        }
    }

    themeToggleBtn.addEventListener("click", function () {
        bodyElement.classList.toggle("dark-mode");

        if (bodyElement.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            if (themeIcon) {
                themeIcon.classList.remove("bi-moon");
                themeIcon.classList.add("bi-sun");
            }
        } else {
            localStorage.setItem("theme", "light");
            if (themeIcon) {
                themeIcon.classList.remove("bi-sun");
                themeIcon.classList.add("bi-moon");
            }
        }
    });
}
// Search Handler Function (Redirects to 404.html)
function handleSearch(event) {
    event.preventDefault();
    const keyword = document.getElementById('searchInputKeyword').value.trim();

    if (keyword !== "") {
        // Seedha 404 page par le jaye ga
        window.location.href = '404.html';
    }
}        
