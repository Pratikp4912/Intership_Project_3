document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".slider img");
    let currentIndex = 0;

    function updateSlider() {
        images.forEach((img, index) => {
            img.classList.toggle("active", index === currentIndex);
        });
    }

    document.getElementById("next").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    document.getElementById("prev").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    updateSlider();
});
