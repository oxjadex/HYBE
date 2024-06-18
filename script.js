function showVideo() {
  var wrapper = document.getElementById("video-wrapper");
  var thumbnail = document.getElementById("thumbnail");

  var iframe = document.createElement("iframe");
  iframe.setAttribute(
    "src",
    "https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
  );
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  iframe.setAttribute("allowfullscreen", true);

  thumbnail.style.display = "none";
  wrapper.appendChild(iframe);
}
