document.addEventListener("DOMContentLoaded", () => {
    // Initialize Typed.js for the typing animation
    const typed = new Typed('#element', {
        strings: ['Web Developer.', 'Programmer.', 'Tech Enthusiast.'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    });

    // Scroll-to-top Button Logic
    const scrollBtn = document.getElementById("scrollToTopBtn");
    window.onscroll = () => {
        scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
    };
    scrollBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Sidebar Menu Toggle Logic
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("main-content");
    const navLinks = document.querySelectorAll(".nav-links a");

    const closeSidebar = () => {
        sidebar.classList.remove("active");
        document.body.classList.remove("sidebar-open");
        menuToggle.classList.remove("hide");
    };

    const openSidebar = () => {
        sidebar.classList.add("active");
        document.body.classList.add("sidebar-open");
        menuToggle.classList.add("hide");
    };

    menuToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents click from bubbling up to the document
        if (sidebar.classList.contains("active")) {
            closeSidebar();
        } else {
            openSidebar();
        }
    });

    // Close sidebar when a navigation link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // Close sidebar when clicking outside of it
    document.addEventListener("click", (e) => {
        if (sidebar.classList.contains("active") && !sidebar.contains(e.target)) {
            closeSidebar();
        }
    });

    // Close sidebar with the 'Escape' key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && sidebar.classList.contains("active")) {
            closeSidebar();
        }
    });
});