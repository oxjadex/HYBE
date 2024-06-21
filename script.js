document.getElementById("overlay").addEventListener("click", function () {
  var videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML =
    '<iframe src="https://www.youtube.com/embed/m6pTbEz4w3o?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;"></iframe>';
  videoContainer.style.display = "flex";
  videoContainer.style.justifyContent = "center";
  videoContainer.style.alignItems = "center";
  videoContainer.style.height = "80vh";

  var backgroundContainer = document.getElementById("background-container");
  backgroundContainer.style.display = "none";
});

document.querySelectorAll(".nav-item").forEach(function (menuItem) {
  menuItem.addEventListener("mouseenter", function () {
    var dropdown = menuItem.querySelector(".dropdown");
    if (dropdown) {
      dropdown.style.display = "flex";
    }
  });

  menuItem.addEventListener("mouseleave", function () {
    var dropdown = menuItem.querySelector(".dropdown");
    if (dropdown) {
      dropdown.style.display = "none";
    }
  });
});

document.querySelectorAll(".dropdown").forEach(function (dropdown) {
  dropdown.addEventListener("mouseenter", function () {
    this.style.display = "flex";
  });

  dropdown.addEventListener("mouseleave", function () {
    this.style.display = "none";
  });
});
