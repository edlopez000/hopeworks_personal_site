window.addEventListener("load", function () {
  //Didn't come up with a cleaner setup for loading JS for specific pages
  if (document.title === "Droning About - Tools of the Trade") {
    let img = document.getElementById("transmitter-image");

    img.addEventListener("mouseenter", function () {
      img.setAttribute("src", "/assets/gamepad_remote.jpg");
    });

    img.addEventListener("mouseleave", function () {
      img.setAttribute("src", "/assets/remote.jpg");
    });
  }
});
