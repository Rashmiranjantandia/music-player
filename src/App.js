import {useState, useEffect} from 'react';
import Player from './components/Player/Player';

function App() {
  const [songs] = useState([
    {
      title: "Astronaut In The Ocean",
      artist: "Masked Wolf",
      album: "Astronaut In The Ocean",
      img_src: "./images/song-1.jpg",
      src: "./music/Astronaut In The Ocean.mp3"
    },
    {
      title: "Safari",
      artist: "Serena",
      album: "Safari",
      img_src: "./images/song-2.jpg",
      src: "./music/SerenaSafari.mp3"
    },
    {
      title: "Fly on The Wall",
      artist: "Thousand Foot Krutch",
      album: "The End Is Where We Begin",
      img_src: "./images/song-3.jpg",
      src: "./music/Fly on The Wall.mp3"
    },
    {
      title: "Senorita",
      artist: "Shankar-Ehsaan-Loy",
      album: "Zindagi Na Milegi Dobara",
      img_src: "./images/song-4.jpg",
      src: "./music/Senorita.mp3"
    },
    {
      title: "Gelehi Rani",
      artist: "Nil Sagar & Archana Padhi",
      album: "Sambalpuri",
      img_src: "./images/song-5.jpg",
      src: "./music/Gelehi Rani.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;
