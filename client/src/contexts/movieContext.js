import axios from 'axios';
import React, { createContext, useContext, useReducer } from 'react';
import { useHistory } from 'react-router';
import { ACTIONS, EXPRESS_API_Movies, MOVIE_LIMIT } from '../helpers/consts';

export const movieContext = createContext();

export const useMovies = () => {
  return useContext(movieContext);
};

const INIT_STATE = {
  moviesData: [],
  movieDetails: {},
  currentMovie: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS.GET_MOVIES:
      return {
        ...state,
        moviesData: action.payload.data,
      };
    case ACTIONS.GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case ACTIONS.SET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.payload,
      };
    default:
      break;
  }
};

const MovieContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const history = useHistory();

  const getMoviesData = async () => {
    const search = new URLSearchParams(history.location.search);
    search.set('_limit', MOVIE_LIMIT);
    history.push(`${history.location.pathname}?${search.toString()}`);
    const res = await axios(`${EXPRESS_API_Movies}/${window.location.search}`);
    dispatch({
      type: ACTIONS.GET_MOVIES,
      payload: res,
    });
  };

  const handleCurrentMovie = (movie) => {
    dispatch({
      type: ACTIONS.SET_CURRENT_MOVIE,
      payload: movie,
    });
  };

  const values = {
    history,
    moviesData: state.moviesData,
    movieDetails: state.movieDetails,
    currentMovie: state.currentMovie,
    getMoviesData,
    handleCurrentMovie,
  };

  return (
    <movieContext.Provider value={values}>{children}</movieContext.Provider>
  );
};

export default MovieContextProvider;
