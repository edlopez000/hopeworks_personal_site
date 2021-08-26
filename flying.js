window.addEventListener("load", function () {

  let flightLink = document.getElementById("flight-sim");
  let drone = document.getElementById("flying-drone-gif");
  let flightInstructions = document.getElementById("drone-instructions")

  let windowWidth = window.innerWidth;

  flightLink.addEventListener("click", function (event) {
    drone.style.display = "block";
    drone.style.visibility = "visible";
    flightInstructions.style.display = "block";
    flightInstructions.style.visibility = "visible";
  })


  drone.style.position = "absolute";
  drone.style.left = (windowWidth/2) + 'px';
  drone.style.bottom = "40px";

  function powerCheck () {
    if (parseInt(drone.style.bottom) >= 40) {
      drone.setAttribute("src", "/assets/drone_gif.gif");
    }
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      powerCheck();
      movement = parseInt(drone.style.bottom) + 15 + "px";
      drone.style.bottom = movement;
    }

    if (event.key === "ArrowDown" && parseInt(drone.style.bottom) > 40) {
      powerCheck();
      movement = parseInt(drone.style.bottom) - 15 + "px";
      console.log("Bottom: " + movement);
      drone.style.bottom = movement;
    }

    if (event.key === "ArrowLeft") {
      movement = parseInt(drone.style.left) - 15 + "px";
      drone.style.left = movement;
    }

    if (event.key === "ArrowRight" && parseInt(drone.style.left) < 1290) {
      movement = parseInt(drone.style.left) + 15 + "px";
      console.log(typeof drone.style.left);
      console.log("Left: " + movement);
      drone.style.left = movement;
    }
  });
});
