// ================= MODAL =================
const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close-btn");

const openBtns = document.querySelectorAll(".car-card button");

openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
    });
});

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ESC KEY CLOSE
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
    }
});

// ================= FILTER =================
const filterButtons = document.querySelectorAll(".filters button");
const cars = document.querySelectorAll(".car-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        const filter = button.dataset.filter;

        cars.forEach(car => {
            if (filter === "all" || car.classList.contains(filter)) {
                car.style.display = "block";
            } else {
                car.style.display = "none";
            }
        });
    });
});

// ================= MOBILE MENU =================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// CLOSE MENU ON LINK CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ================= ACTIVE NAV =================
const currentPage = location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});
// ================= DARK MODE =================
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    }
});

// LOAD SAVED MODE
window.addEventListener("load", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "☀️";
    }
});