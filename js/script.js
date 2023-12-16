// =============== Adding functionalities to navbar ============== //

const listItems = document.querySelectorAll("nav ul li");
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    removeActiveClassFromListItem();
    a.parentElement.classList.add("active");
  });
});

function removeActiveClassFromListItem() {
  listItems.forEach((li) => {
    if (li.classList.contains("active")) {
      li.classList.remove("active");
    }
  });
}

// =============== Adding images in gallery dynamically ============== //

const galleryGrid = document.querySelector("#gallery .container .grid");
const baseDir = "./assets/";
const images = [
  "gallery1.png",
  "gallery2.png",
  "gallery3.png",
  "gallery4.png",
  "gallery5.png",
  "gallery6.png",
];

function loadGalleryImages() {

    images.forEach(image => {
        var div = document.createElement("div");
        var img = document.createElement("img");
    
        div.classList.add("image");
        img.src = baseDir+image;
        div.appendChild(img);

        galleryGrid.appendChild(div);
    });
    
}

loadGalleryImages();
