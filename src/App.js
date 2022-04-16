import React, { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

//styles
import './styles/app.scss';
//util
import data from './util';

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Song currentSong={currentSong} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
        <Library songs={songs}/>
      </header>
    </div>
  );
}

export default App;
