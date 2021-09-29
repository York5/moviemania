import React, { Fragment } from 'react';
import classes from './style/FilterBar.module.css';
import { BsFilm } from 'react-icons/bs';
import { BiHappyBeaming } from 'react-icons/bi';
import { RiKnifeBloodLine } from 'react-icons/ri';
import { FaTheaterMasks } from 'react-icons/fa';
import { GiUnicorn } from 'react-icons/gi';
import { IoRocketSharp } from 'react-icons/io5';
import { RiMickeyFill } from 'react-icons/ri';
import { GiImperialCrown } from 'react-icons/gi';

const FilterBar = () => {
  return (
    <Fragment>
      <div className={classes.filter_bar}>
        <div className={classes.filter_item}>
          <div>
            <BsFilm className={classes.icon} />
          </div>
          <div className={classes.text}>All</div>
        </div>
        <div className={classes.filter_item}>
          <div>
            <BiHappyBeaming className={classes.icon} />
          </div>
          <div className={classes.text}>Comedy</div>
        </div>
        <div className={classes.filter_item}>
          <div>
            <RiKnifeBloodLine className={classes.icon} />
          </div>
          <div className={classes.text}>Thriller</div>
        </div>
        <div className={classes.filter_item}>
          <div>
            <FaTheaterMasks className={classes.icon} />
          </div>
          <div className={classes.text}>Drama</div>
        </div>
        <div className={classes.filter_item}>
          <div>
            <GiUnicorn className={classes.icon} />
          </div>
          <div className={classes.text}>Fantasy</div>
        </div>
        <div className={classes.filter_item}>
          <div>
            <IoRocketSharp className={classes.icon} />
          </div>
          <div className={classes.text}>Sci-Fi</div>
        </div>
        <div className={classes.filter_item}>
          <div>
            <RiMickeyFill className={classes.icon} />
          </div>
          <div className={classes.text}>Cartoon</div>
        </div>
        <div className={classes.filter_item}>
          <div>
            <GiImperialCrown className={classes.icon} />
          </div>
          <div className={classes.text}>History</div>
        </div>
      </div>
    </Fragment>
  );
};

export default FilterBar;
