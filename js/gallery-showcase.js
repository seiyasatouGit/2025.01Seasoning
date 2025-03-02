document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const items = document.querySelectorAll(".item");
    let currentIndex = 0;

    function updateGallery() {
        items.forEach((item, index) => {
            let distance = index - currentIndex;
            let scale = Math.max(0.7, 1 - Math.abs(distance) * 0.2);
            let opacity = Math.max(0.5, 1 - Math.abs(distance) * 0.3);
            item.style.transform = `scale(${scale}) translateX(${distance * 150}px)`;
            item.style.opacity = opacity;
        });
    }

    document.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            currentIndex = Math.min(currentIndex + 1, items.length - 1);
        } else {
            currentIndex = Math.max(currentIndex - 1, 0);
        }
        updateGallery();
    });

    updateGallery();
});
