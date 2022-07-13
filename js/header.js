const home = document.querySelector('#home');
const instagram = document.querySelector('#instagram');
const twitter = document.querySelector('#twitter');
const tiktok = document.querySelector('#tiktok');


home.addEventListener('click', () => {
  window.open("/index.html", "_self"); 
});

instagram.addEventListener('click', () => {
window.open("https://www.instagram.com/arirub_music/", '_blank')
});

twitter.addEventListener('click', () => {
window.open("https://twitter.com/ArirubMusic", '_blank')
});

tiktok.addEventListener('click', () => {
window.open("https://www.tiktok.com/@arirubmusic", '_blank')
});
