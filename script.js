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
  {
    author: "Sergio Fermento",
    song: "./songs/dramatic-epic-cinema-150027.mp3",
  },
  {
    author: "Gorbachv Enrique",
    song: "./songs/action-intro-trailer-210365.mp3",
  },
  {
    author: "Rolegio Furesmoni",
    song: "./songs/happy-inspiring-violins-150044.mp3",
  },
  {
    author: "Susana",
    song: "./songs/motivation-background-151827.mp3",
  },
  {
    author: "Enriqueta Homosapiens",
    song: "./songs/no-copyright-music-181373.mp3",
  },
  {
    author: "Diego Comoestas",
    song: "./songs/stomp-clapping-150097.mp3",
  },
  {
    author: "Do",
    song: "./songs/summer-upbeat-motivational-150098.mp3",
  },
];
let index = 0;

class MusicPlayer {
  play() {
    song.play();
    console.log(song.title);

    return (display.textContent = songsList[index].author);
  }
  stop() {
    song.pause();
  }

  next() {
    if (index < songsList.length - 1) {
      index++;
      song.src = songsList[index].song;
      song.play();
      return (display.textContent = songsList[index].author);
    }
  }

  prev() {
    index--;
    song.src = songsList[index].song;

    song.play();
    return (display.textContent = songsList[index].author);
  }

  updateDisplay() {}
}
const song = new Audio(songsList[index].song);

const musicPlayer = new MusicPlayer();
play_btn.addEventListener("click", musicPlayer.play);

stop_btn.addEventListener("click", musicPlayer.stop);

nextSong.addEventListener("click", musicPlayer.next);

prevSong.addEventListener("click", musicPlayer.prev);

// musicPlayer.updateDisplay();
