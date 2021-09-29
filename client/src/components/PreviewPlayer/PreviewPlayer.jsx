import React from 'react';
import ReactPlayer from 'react-player';
import classes from './style/PreviewPlayer.module.css';
import { useMovies } from '../../contexts/movieContext';

const PreviewPlayer = () => {
  const { currentMovie } = useMovies();

  return (
    <div className={classes.player_wrapper}>
      <ReactPlayer
        className={classes.player}
        // url="https://www.youtube.com/watch?v=5PSNL1qE6VY&t=5s&ab_channel=20thCenturyStudios"
        url={currentMovie.trailerUrl}
        width="100%"
        height="100%"
        controls="true"
      />
    </div>
  );
};

export default PreviewPlayer;
