import React from 'react';
import classes from './styles/Header.module.css';

const Header = () => {
  return (
    <div className={classes.header}>
      <h3 className={classes.header_title}>Dashboard</h3>
      <div className={classes.avatar_block}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Header;
