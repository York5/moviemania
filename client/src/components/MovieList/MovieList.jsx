import React, { Fragment, useEffect } from 'react';
import { useMovies } from '../../contexts/movieContext';
import MovieCard from '../MovieCard/MovieCard';
import classes from './Style/MovieList.module.css';

const MovieList = () => {
  const { moviesData, getMoviesData } = useMovies();

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <Fragment>
      {moviesData ? (
        <div className={classes.movie_list}>
          {moviesData.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : (
        <>
          <h1>...loading</h1>
        </>
      )}
    </Fragment>
  );
};

export default MovieList;
