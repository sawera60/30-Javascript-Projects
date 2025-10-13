const h2 = document.getElementById("songName");
const p = document.getElementById("artistName");
const backward = document.querySelector(".backward");
const playButton = document.querySelector(".playbutton");
const forward = document.querySelector(".forward");




function playSong() {



}


playButton.addEventListener('click', (e) => {
    let audiotag = document.createElement("audio");
    audiotag.setAttribute('src', 'music/');
    audiotag.play();
    h2.innerHTML = "Regardless"
    p.innerHTML = "Asim Azhar"


})

function previousSong() {


}

backward.addEventListener('click', (e) => {
    alert("hey")
})


function nextSong() {


}

forward.addEventListener('click', (e) => {
    alert("hey")
})