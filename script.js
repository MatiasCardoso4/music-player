const play_btn = document.querySelector(".play-btn");
const stop_btn = document.querySelector(".stop-btn");
const nextSong = document.querySelector(".next-btn");
const prevSong = document.querySelector(".prev-btn");
const display = document.querySelector(".display");

const songsList = [
  {
    author: "Ed Cheerlan",
    song: "./songs/cinematic-background-inspirational-150013.mp3",
  },

  {
    author: "Carlos Braute",
    song: "./songs/emotional-inspiring-piano-amp-violin-150030.mp3",
  },
];
let index = 0;

class MusicPlayer {
  play() {
    song.play();
  }
  stop() {
    song.pause();
  }

  next() {
    if (index < songsList.length - 1) {
      index++;
      song.src = songsList[index].song;
      song.play();
    }
  }

  updateDisplay() {}
}
const song = new Audio(songsList[index].song);

const musicPlayer = new MusicPlayer();
play_btn.addEventListener("click", musicPlayer.play);

stop_btn.addEventListener("click", musicPlayer.stop);

nextSong.addEventListener("click", musicPlayer.next);
