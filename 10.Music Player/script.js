const h2 = document.getElementById("songName");
const p = document.getElementById("artistName");
const backward = document.querySelector(".backward");
const playButton = document.querySelector(".playbutton");
const forward = document.querySelector(".forward");
const img = document.querySelector(".img-container img")
const progressContainer = document.querySelector(".progress-container");
const progressBar = document.querySelector(".progress-bar");
const currentTimeEl = document.getElementById("current-time");
const totalTimeEl = document.getElementById("total-time");

let songIndex = 0;
// create audio element only once
const audio = new Audio();

//Array of songs
const songs = [
    {
        songName: "Despacito",
        artistName: "Lious Fonsi",
        img: "https://media.istockphoto.com/id/463214829/photo/handsome-young-man-posing.jpg?s=1024x1024&w=is&k=20&c=WpJsa4yDzstXXRTYNRsoGVVJ2vzpF3XcCTCCdNhnas8=",
        src: "music/despacito.mp3"
    },

    {
        songName: "Aura",
        artistName: "Shubh",
        img: "https://i.pinimg.com/736x/f8/cf/7b/f8cf7b7948fc291322e98e18d74a6040.jpg",
        src: "music/aura.mp3"
    },

    {
        songName: "Regardless",
        artistName: "Asim Azhar",
        img: "https://i.pinimg.com/1200x/43/0b/8e/430b8ed8b6f64d4196a025c082340c0d.jpg",
        src: "music/regardless.mp3"
    },

    {
        songName: "Sada Ashna",
        artistName: "Tahir Khan",
        img: "https://i.pinimg.com/736x/82/7b/43/827b43675e6d5626c16fac2aff0a5a85.jpg",
        src: "music/sadaashna.mp3"
    },
    {
        songName: "Snowman",
        artistName: "Sia",
        img: "https://i.pinimg.com/1200x/be/a8/34/bea8347df2a65c004aa8852200af9244.jpg",
        src: "music/snowman.mp3"
    }
]


function playSong(index) {
    let song = songs[index];
    h2.textContent = song.songName;
    p.textContent = song.artistName;
    img.src = song.img;
    audio.src = song.src;
    audio.play();
    playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    img.style.animationPlayState = "running"; // keep rotating on song change
}

// Format seconds → mm:ss
function formatTime(time) {
    let minutes = Math.floor(time / 60); //jo b time hoga in secongs uslo 60 py divide krny sy hi minutes pta lgengy e.g time= 165 then 165 / 60 = 2.75 → Math.floor(2.75) gives 2 means 2 minutes
    let seconds = Math.floor(time % 60);  //👉 % gives the remainder (whatever seconds are left after removing full minutes).example: 165 % 60 = 45. So seconds = 45.
    if (seconds < 10) seconds = `0${seconds}`; //👉 This just adds a 0 in front for single-digit seconds (to look cleaner). So instead of 2:5, you’ll get 2:05.
    return `${minutes}:${seconds}`; //e.g. "2:45".
}


// Update progress bar +  time as song plays
audio.addEventListener("timeupdate", () => {
    console.log(audio.currentTime); // gives how many seconds of the song have already played like 45 seconds.
    console.log(audio.duration); //gives the total song length in seconds.
    //here we find “how much % of the song is done  means 45/180 = 0.25 That means 25% of the song has been played.
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`; //update CSS
    //update time alongWith progressbar
    currentTimeEl.textContent = formatTime(audio.currentTime);
    totalTimeEl.textContent = formatTime(audio.duration || 0);
});

// Click to change progressbar manually & jump to specific position in song
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth; //👉 This gets the total width (in pixels) of your progress bar e.g If your progress bar is 300px wide, then width= 300
    const clickX = e.offsetX; //👉 This gets how far from the left the user clicked — in pixels. as we know progressbar starts from left e.g If user clicks near the middle of the bar: clickX = 150. If they click near the end of the bar then: clickX = 270
    const duration = audio.duration; //👉Total length of the song (in seconds). Let’s say your song is 180 seconds → duration = 180.
    audio.currentTime = (clickX / width) * duration; //Converts click position into song time
});

//Play/pause toggle
playButton.addEventListener('click', (e) => {
    if (audio.paused) {
        playButton.innerHTML = `<i class="fa-solid fa-pause"></i>`
        audio.play();
        img.style.animationPlayState = "running"; // start rotating the image
    } else {

        playButton.innerHTML = `<i class="fa-solid fa-play"></i>`
        audio.pause();
        img.style.animationPlayState = "paused"; // stop rotating

    }
})

backward.addEventListener('click', (e) => {
    //songs.length - 1 is the last song’s index. e.g. if you have 5 songs → indexes go from 0 to 4. So if the user clicks next while already on the last song (songIndex = 4), then songIndex becomes 5, which doesn’t exist.This line resets it back to 0 → so it starts again from the first song. That’s how your music player loops the playlist.
    songIndex = songIndex - 1;
    if (songIndex < 0) songIndex = songs.length - 1;
    playSong(songIndex)
})


forward.addEventListener('click', (e) => {
    songIndex = songIndex + 1;
    if (songIndex > songs.length - 1)
        songIndex = 0;
    playSong(songIndex)

})

// ✅ Load the first song (Despacito) details only, don't play yet
window.addEventListener("load", () => {
    let song = songs[0]; // Despacito
    h2.textContent = song.songName;
    p.textContent = song.artistName;
    img.src = song.img;
    audio.src = song.src;
    playButton.innerHTML = `<i class="fa-solid fa-play"></i>`;
})