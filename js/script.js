document.addEventListener("DOMContentLoaded", () => {
    const dropdownProjects = document.querySelector(".dropdown-projects");
    const dropdownMenu = document.querySelector('.dropdown-projects-menu');

    dropdownProjects.addEventListener('mouseover', () => {
        dropdownMenu.classList.add('dropdown-projects-menu-hover');
    });
    dropdownMenu.addEventListener('mouseleave', (event) => {
        console.log(event);
        dropdownMenu.classList.add('close');
            setTimeout(()=>{
        dropdownMenu.classList.remove('close');
        dropdownMenu.classList.remove('dropdown-projects-menu-hover');
            },150)
    });
});