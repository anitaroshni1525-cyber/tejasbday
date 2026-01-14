const screens = document.querySelectorAll(".screen");

const video1 = document.getElementById("video1");
const video2 = document.getElementById("video2");
const video3 = document.getElementById("video3");

const bgMusic = document.getElementById("bgMusic");
const song2 = document.getElementById("song2");
const song3 = document.getElementById("song3");

let imgIndex = 1;
const totalImages = 5;

/* SCREEN SWITCH */
function show(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* STOP ALL MUSIC */
function stopAllMusic() {
  [bgMusic, song2, song3].forEach(m => {
    m.pause();
    m.currentTime = 0;
  });
}

/* START EXPERIENCE (KEY FIX) */
function startExperience() {
  stopAllMusic();
  bgMusic.play();
  show("screen-video1");
  video1.play();
}

/* VIDEO FLOW */
video1.onended = () => {
  stopAllMusic();
  show("screen-video2");
  song2.play();
  video2.play();
};

video2.onended = () => {
  stopAllMusic();
  bgMusic.play();
  show("menu");
};

/* MENU */
function openMessages() {
  stopAllMusic();
  bgMusic.play();
  show("messages");
}

function openGuest() {
  stopAllMusic();
  bgMusic.play();
  show("guest");
  video3.currentTime = 0;
  video3.play();
}

function openGifts() {
  stopAllMusic();
  bgMusic.play();
  show("gifts");
}

function openPlaylist() {
  stopAllMusic();
  bgMusic.play();
  show("playlist");
}

function openUs() {
  stopAllMusic();
  song3.play();
  show("us");
}

function backToVideo2() {
  stopAllMusic();
  show("screen-video2");
  song2.play();
  video2.play();
}

function goMenu() {
  stopAllMusic();
  bgMusic.play();
  show("menu");
}

/* GALLERY */
function nextImg() {
  if (imgIndex < totalImages) imgIndex++;
  document.getElementById("galleryImg").src = `images/img${imgIndex}.jpg`;
}

function prevImg() {
  if (imgIndex > 1) imgIndex--;
  document.getElementById("galleryImg").src = `images/img${imgIndex}.jpg`;
}

/* GUEST */
function replayGuest() {
  video3.currentTime = 0;
  video3.play();
}
