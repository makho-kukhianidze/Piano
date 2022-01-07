// Variable block - Start.
var DO_f = document.getElementById('DO_f');
var re = document.getElementById('re');
var mi = document.getElementById('mi');
var fa = document.getElementById('fa');
var sol = document.getElementById('sol');
var la = document.getElementById('la');
var se = document.getElementById('se');
var do_s = document.getElementById('do_s');
var keyNotes = document.querySelectorAll('button');
// Variable block - End.

// Keyboard keys block - Start.
for (var i = 0; i < keyNotes.length; i++) {
  keyNotes[i];
}
document.addEventListener("keypress", (e) => {
  if (e.key == "a" || e.key == "A") keyNotes[0].click();
});
document.addEventListener("keypress", (e) => {
  if (e.key == "s" || e.key == "S") keyNotes[1].click();
});
document.addEventListener("keypress", (e) => {
  if (e.key == "d" || e.key == "D") keyNotes[2].click();
});
document.addEventListener("keypress", (e) => {
  if (e.key == "f" || e.key == "F") keyNotes[3].click();
});
document.addEventListener("keypress", (e) => {
  if (e.key == "g" || e.key == "G") keyNotes[4].click();
});
document.addEventListener("keypress", (e) => {
  if (e.key == "h" || e.key == "H") keyNotes[5].click();
});
document.addEventListener("keypress", (e) => {
  if (e.key == "j" || e.key == "J") keyNotes[6].click();
});
document.addEventListener("keypress", (e) => {
  if (e.key == "k" || e.key == "K") keyNotes[7].click();
});
// Keyboard keys block - End.

// Musical notes block - Start.
var DOmusic = new Audio();
DOmusic.src = "assets/sound/DO_1.wav";
var remusic = new Audio();
remusic.src = "assets/sound/re.wav";
var mimusic = new Audio();
mimusic.src = "assets/sound/mi.wav";
var famusic = new Audio();
famusic.src = "assets/sound/fa.wav";
var solmusic = new Audio();
solmusic.src = "assets/sound/sol.wav";
var lamusic = new Audio();
lamusic.src = "assets/sound/la.wav";
var selmusic = new Audio();
selmusic.src = "assets/sound/se.wav";
var do_slmusic = new Audio();
do_slmusic.src = "assets/sound/do.wav";
// Musical notes block - End.

// Musical notes click number and text notes block - Start.
var DO_f_text = document.getElementById('DO_f_text');
var DO_f_number = 0;
var re_text = document.getElementById('re_text');
var re_number = 0;
var mi_text = document.getElementById('mi_text');
var mi_number = 0;
var fa_text = document.getElementById('fa_text');
var fa_number = 0;
var sol_text = document.getElementById('sol_text');
var sol_number = 0;
var la_text = document.getElementById('la_text');
var la_number = 0;
var se_text = document.getElementById('se_text');
var se_number = 0;
var do_s_text = document.getElementById('do_s_text');
var do_s_number = 0;
// Musical notes click number and text notes block - End.

// Musical notes - Buttons block - Start.
DO_f.addEventListener('click', function () {
  DOmusic.play();
  DO_f_number += 1;
  DO_f_text.innerHTML = "do" + '<br>' + DO_f_number;
});
re.addEventListener('click', function () {
  remusic.play();
  re_number += 1;
  re_text.innerHTML = "re" + '<br>' + re_number;
});
mi.addEventListener('click', function () {
  mimusic.play();
  mi_number += 1;
  mi_text.innerHTML = "mi" + '<br>' + mi_number;
});
fa.addEventListener('click', function () {
  famusic.play();
  fa_number += 1;
  fa_text.innerHTML = "fa" + '<br>' + fa_number;
});
sol.addEventListener('click', function () {
  solmusic.play();
  sol_number += 1;
  sol_text.innerHTML = "sol" + '<br>' + sol_number;
});
la.addEventListener('click', function () {
  lamusic.play();
  la_number += 1;
  la_text.innerHTML = "la" + '<br>' + la_number;
});
se.addEventListener('click', function () {
  selmusic.play();
  se_number += 1;
  se_text.innerHTML = "se" + '<br>' + se_number;
});
do_s.addEventListener('click', function () {
  do_slmusic.play();
  do_s_number += 1;
  do_s_text.innerHTML = "do" + '<br>' + do_s_number;
});
// Musical notes - Buttons block - End.