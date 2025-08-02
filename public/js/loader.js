window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const video = document.getElementById("loader-video");
  const content = document.getElementById("main-content");

  if (video) {
    video.addEventListener("ended", () => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
      }, 0);
    });
  }
});
