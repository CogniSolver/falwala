const listItems = document.querySelectorAll("nav ul li");
const navLinks = document.querySelectorAll("nav ul li a");
const menuToggler = document.querySelector(".navbar-toggler");


navLinks.forEach(a => {
    a.addEventListener("click", () => {
        removeActiveClassFromListItem();
        a.parentElement.classList.add("active");
    });
});

function removeActiveClassFromListItem(){
    listItems.forEach(li => {
        if(li.classList.contains("active")){
            li.classList.remove("active");
        }
    });
}