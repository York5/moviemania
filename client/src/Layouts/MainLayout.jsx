import React from 'react';
import classes from './style/MainLayout.module.css';

import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div className={classes.main_layout}>
      <div className={classes.main_layout_frame}>
        <Sidebar />
        <div className={classes.content_block}>
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
