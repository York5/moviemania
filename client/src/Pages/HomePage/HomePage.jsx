import React, { Fragment } from 'react';
import FilterBar from '../../components/FIlterBar/FilterBar';
import Header from '../../components/Header/Header';
import MovieList from '../../components/MovieList/MovieList';
import PreviewDetail from '../../components/PreviewDetail/PreviewDetail';
import PreviewPlayer from '../../components/PreviewPlayer/PreviewPlayer';
import classes from './style/HomePage.module.css';

const HomePage = () => {
  return (
    <Fragment>
      <FilterBar />
      <div className={classes.main_block}>
        <MovieList />
        <div className={classes.detail_trailer_block}>
          <PreviewDetail />
          <div className={classes.preview_player}>
            <PreviewPlayer />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
