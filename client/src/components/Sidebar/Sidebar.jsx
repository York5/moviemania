import React, { Fragment } from 'react';
import classes from './style/Sidebar.module.css';
import popcornIcon from './../../static/icons/popcorn.svg';
import { GiPopcorn } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHistory } from 'react-icons/ai';
import { MdAddBox } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { IoSettingsSharp } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <Fragment>
      <div className={classes.sidebar}>
        <div className={classes.sidebar_item}>
          <GiPopcorn className={classes.icon} />
        </div>
        <div className={classes.sidebar_item}>
          <AiFillHeart className={classes.icon} />
        </div>
        <div className={classes.sidebar_item}>
          <AiOutlineHistory className={classes.icon} />
        </div>
        <div className={classes.sidebar_item}>
          <MdAddBox className={classes.icon} />
        </div>
        <div className={classes.sidebar_item}>
          <BiLogOut className={classes.icon} />
        </div>
        <div className={classes.sidebar_item}>
          <IoSettingsSharp className={classes.icon} />
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
