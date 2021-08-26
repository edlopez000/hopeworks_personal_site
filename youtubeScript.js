// Loads the Youtube iFrame API into the page, target: <div> with id="player"
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("player", {
    height: "648",
    width: "1152",
    videoId: "6whHTP6L2Is",

    playerVars: {
      controls: 0,
      enablejsapi: 1,
      modestbranding: 1,
      start: 22,
      rel: 0,
      showinfo: 0
    },
    events: {
      OnReady: onPlayerReady,
    },
  });
}

function onPlayerReady() {
  playVideo();
}

function pauseVideo() {
  player.pauseVideo();
}

function playVideo() {
  player.playVideo();
}

function stopVideo() {
  player.stopVideo();
}

function getPlayerState() {
  return player.getPlayerState();
}

function playerMute() {
  player.mute();
}

window.addEventListener("load", function () {
  playerMute(); //Still deciding on wether the video should be muted or not

  let playerWindow = document.querySelector("#player");

  playerWindow.addEventListener("mouseover", function () {
    playVideo();
  });

  playerWindow.addEventListener("mouseout", function() {
    pauseVideo();
  })
});
