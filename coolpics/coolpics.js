document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navigation = document.querySelector(".navigation");

    navigation.classList.add("hidden");

    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("hidden");
    });
});

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
      menu.classList.remove("hide");
    } else {
      menu.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);

  
  function viewerTemplate(imagePath, altText) {
    return `
        <div class="viewer">
            <button class="close-viewer">X</button>
            <img src="${imagePath}" alt="${altText}">
        </div>
    `;
}

function viewHandler(event) {
    
    const clickedElement = event.target;

    if (clickedElement.tagName === "IMG") {
        
        const srcParts = clickedElement.src.split("-");
        
        const newImagePath = srcParts[0] + "-full.jpeg";

        closeViewer();

        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImagePath, clickedElement.alt));

        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    gallery.addEventListener("click", viewHandler);
});
