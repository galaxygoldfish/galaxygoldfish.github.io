window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 70) {
        navbar.classList.add("backdrop-blur-lg", "bg-white/30", "shadow-xs", "pb-7", "pt-7");
    } else {
        navbar.classList.remove("backdrop-blur-lg", "bg-white/30", "shadow-xs", "pb-7", "pt-7");
    }
});