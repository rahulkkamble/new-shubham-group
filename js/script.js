document.addEventListener("DOMContentLoaded", () => {
    const dropdownProjects = document.querySelector(".hover-dropdown");
    const dropdownMenu = document.querySelector('.dropdown-projects-menu');
    const menuItems = document.querySelectorAll('.menu .menu-item');

    dropdownProjects.addEventListener('mouseover', () => {
        dropdownMenu.classList.add('dropdown-projects-menu-hover');
    });

    dropdownProjects.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!dropdownProjects.matches(':hover')) {
                dropdownMenu.classList.remove('dropdown-projects-menu-hover');
            }
        }, 100);
    });

    menuItems.forEach((item) => {
        item.addEventListener('mouseover', () => {
            if (!item.classList.contains('hover-dropdown')) {
                dropdownMenu.classList.remove('dropdown-projects-menu-hover');
            }
        });
    });
});