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

document.addEventListener("DOMContentLoaded", function () {
  const headerWrapper = document.querySelector(".header-wrapper");
  let timeoutId;

  headerWrapper.addEventListener("mouseenter", function () {
    clearTimeout(timeoutId);
    headerWrapper.classList.add("active");
  });

  headerWrapper.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(function () {
      headerWrapper.classList.remove("active");
    }, 200); // 200ms의 지연 시간을 줍니다. 필요에 따라 조정 가능합니다.
  });
});

const mediaItems = [
  {
    type: "image",
    url: "https://img.youtube.com/vi/m6pTbEz4w3o/maxresdefault.jpg",
    videoId: "m6pTbEz4w3o",
  },
  {
    type: "image",
    url: "https://img.youtube.com/vi/bZPQImItCEg/maxresdefault.jpg",
    videoId: "bZPQImItCEg",
  },
  {
    type: "image",
    url: "https://img.youtube.com/vi/p6w64hIPloI/maxresdefault.jpg",
    videoId: "p6w64hIPloI",
  },
];

let currentIndex = 0;


function updatePageInfo() {
  const pageInfo = document.getElementById("pageInfo");
  pageInfo.textContent = `${currentIndex + 1} / ${mediaItems.length}`;

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === mediaItems.length - 1;

  prevBtn.style.opacity = prevBtn.disabled ? "0.5" : "1";
  nextBtn.style.opacity = nextBtn.disabled ? "0.5" : "1";
}
function updateBackground() {
  const backgroundContainer = document.getElementById("background-container");
  backgroundContainer.style.backgroundImage = `url(${mediaItems[currentIndex].url})`;
  updatePageInfo();
}

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex -- + mediaItems.length) % mediaItems.length;
  updateBackground();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex ++ ) % mediaItems.length;
  updateBackground();
});

updateBackground();

function playVideo() {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = `<iframe src="https://www.youtube.com/embed/${mediaItems[currentIndex].videoId}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%; height: 100%;"></iframe>`;
  videoContainer.style.display = "flex";
  videoContainer.style.justifyContent = "center";
  videoContainer.style.alignItems = "center";
  videoContainer.style.height = "80vh";

  const backgroundContainer = document.getElementById("background-container");
  backgroundContainer.style.display = "none";
}

document.getElementById("overlay").addEventListener("click", playVideo);

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
  updateBackground();
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % mediaItems.length;
  updateBackground();
});

updateBackground();

document.getElementById("logo-link").addEventListener("click", function (e) {
  e.preventDefault(); // 기본 링크 동작 방지

  // 비디오 컨테이너 숨기기
  const videoContainer = document.getElementById("video-container");
  videoContainer.style.display = "none";

  // 배경 컨테이너 다시 표시
  const backgroundContainer = document.getElementById("background-container");
  backgroundContainer.style.display = "block";

  // 첫 번째 이미지로 돌아가기
  currentIndex = 0;
  updateBackground();

  // 오버레이 다시 표시
  document.getElementById("overlay").style.display = "flex";
});