"use strict";
// document.getElementById("music").src =
//   `./music/YeuEmRatNhieu.mp3?a=` + Math.random();

// const playMusic = async () => {
//   const music = await new Audio("./music/YeuEmRatNhieu.mp3");
//   music.play();
//   music.loop = true;
// };

// document.addEventListener("DOMContentLoaded", playMusic());
// playMusic();

const leftPart = document.getElementsByClassName("left-part")[0];

const gif = document.createElement("img");
gif.src = `./images/biubiu_once_loop.gif?a=` + Math.random();
gif.draggable = false;
leftPart.appendChild(gif);

const music = document.createElement("audio");
music.src = `./music/YeuEmRatNhieu.mp3?a=` + Math.random();
const container = document.getElementsByClassName("container")[0];
container.appendChild(music);
music.autoplay = "true";
music.preload = "auto";
music.loop = "true";
console.log(music);
