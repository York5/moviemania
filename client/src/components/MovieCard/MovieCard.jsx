import React, { Fragment } from 'react';
import { useMovies } from '../../contexts/movieContext';
import classes from './style/MovieCard.module.css';

const MovieCard = ({ movie }) => {
  const { currentMovie, handleCurrentMovie } = useMovies();

  return (
    <Fragment>
      <div
        className={classes.card}
        style={{
          backgroundImage: `url(${movie.previewImg})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        onClick={() => handleCurrentMovie(movie)}
      >
        <div className={classes.card_info}>
          <h4>{movie.name}</h4>
          <p>
            by {movie.director.firstName} {movie.director.lastName}
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default MovieCard;
