const h2 = document.getElementById("songName");
const p = document.getElementById("artistName");
const backward = document.querySelector(".backward");
const playButton = document.querySelector(".playbutton");
const forward = document.querySelector(".forward");


function playSong() {
    let audiotag = document.createElement("audio");
    audiotag.setAttribute('src', 'music/regardless.mp3');
    document.body.appendChild(audiotag);
    audiotag.play();
    h2.innerHTML = "Regardless"
    p.innerHTML = "Asim Azhar"
}

playButton.addEventListener('click', (e) => {
    playSong();
})


function previousSong() {
}

backward.addEventListener('click', (e) => {
  
})


function nextSong() {


}

forward.addEventListener('click', (e) => {
   
})