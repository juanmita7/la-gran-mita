document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu-link");
    const menuSections = document.querySelectorAll(".menu-section");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Función para activar una sección
    const activateSection = (menuId) => {
        const targetSection = document.getElementById(menuId);
        if (!targetSection) {
            console.error(`No se encontró la sección con ID: ${menuId}`);
            return;
        }

        menuSections.forEach(section => section.classList.remove("active"));
        menuLinks.forEach(link => link.classList.remove("active-link"));
        targetSection.classList.add("active");
        document.querySelector(`[data-menu="${menuId}"]`).classList.add("active-link");
        targetSection.scrollIntoView({ behavior: "smooth" });

        // Cerrar el menú en móvil después de hacer clic
        if (window.innerWidth <= 768) {
            navLinks.classList.remove("active");
        }
    };

    // Evento para los enlaces del menú
    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const menuId = link.getAttribute("data-menu");
            activateSection(menuId);
        });
    });

    // Evento para el botón hamburguesa
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Sección inicial
    if (!document.querySelector(".menu-section.active")) {
        activateSection("pizzas");
    }
});