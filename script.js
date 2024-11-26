const play_btn = document.querySelector(".play-btn");
const stop_btn = document.querySelector(".stop-btn");
const nextSong = document.querySelector(".next-btn");
const prevSong = document.querySelector(".prev-btn");
const display = document.querySelector(".display");
const author = document.createElement("h3");
const songsList = [
  {
    author: "Ed Cheerlan",
    song: "./songs/cinematic-background-inspirational-150013.mp3",
    duration: "2:26",
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
class MusicPlayer {
  constructor(display, author, songsList) {
    this.display = display;
    this.author = author;
    this.songsList = songsList;
    this.song = new Audio();
    this.index = 0;
  }

  updateDisplay() {
    this.author.textContent = this.songsList[this.index].author;
    this.display.append(this.author);
  }

  play() {
    this.song.src = this.songsList[this.index].song;
    this.song.play();
    this.updateDisplay();
  }

  stop() {
    this.song.pause();
  }

  next() {
    if (this.index < this.songsList.length - 1) {
      this.index++;
      this.song.src = this.songsList[this.index].song;

      this.song.play();
      this.updateDisplay();
    }
  }

  prev() {
    this.index--;
    this.song.src = this.songsList[this.index].song;
    this.song.play();
    this.updateDisplay();
  }
}

const musicPlayer = new MusicPlayer(display, author, songsList);
play_btn.addEventListener("click", () => musicPlayer.play());

stop_btn.addEventListener("click", () => musicPlayer.stop());

nextSong.addEventListener("click", () => musicPlayer.next());

prevSong.addEventListener("click", () => musicPlayer.prev());
