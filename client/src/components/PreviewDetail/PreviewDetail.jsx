import React, { Fragment } from 'react';
import classes from './style/PreviewDetail.module.css';
import { FaPlay } from 'react-icons/fa';
import { useMovies } from '../../contexts/movieContext';

const PreviewDetail = () => {
  const { currentMovie } = useMovies();

  return (
    <Fragment>
      <div className={classes.preview_detal}>
        <div className={classes.play_button}>
          <FaPlay className={classes.icon} />
        </div>
        <h4>{currentMovie.name}</h4>
        <p className={classes.quick_info}>
          {currentMovie.rating} / {currentMovie.runtime} / {currentMovie.genre}
        </p>
        <h5>Summary</h5>
        <p className={classes.info_text}>{currentMovie.description}</p>
        <hr />
        <p className={classes.info_text}>
          director: {currentMovie.director.firstName}{' '}
          {currentMovie.director.lastName} <br />
          Actors: Sam Worthington, Zoe Saldana, Segourney Weaver
        </p>
      </div>
    </Fragment>
  );
};

export default PreviewDetail;
