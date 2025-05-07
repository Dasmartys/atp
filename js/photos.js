
const photos = [
    "akce1.jpg",
    "akce2.jpg",
    "akce3.jpg"
];

const gallery = document.getElementById("gallery");

photos.forEach(photo => {
    const img = document.createElement("img");
    img.src = "fotky/akce/" + photo;
    img.alt = "Akce";
    gallery.appendChild(img);
});
