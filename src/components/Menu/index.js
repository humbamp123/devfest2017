import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';
import { devFestLogo } from '../../constants/images';

class Menu extends Component {
  render() {
    return (
      <div className={classNames('navbar', 'is-dark')}>
        <div className={classNames('container')}>
          <div className={classNames('narbar-brand', 'navbar-brand')}>
            <Link className={classNames('navbar-item')} to='/'>
              <img src={devFestLogo} alt="Bayfest Logo" />
            </Link>
            <div className={classNames('navbar-burger', 'burger')}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={classNames('navbar-end', 'navbar-menu')}>
            <Link to={'/codelabs'} className={classNames('navbar-item')}>{c.codelabs}</Link>
            <Link to={'/talks'} className={classNames('navbar-item')}>{c.talks}</Link>
            <Link to={'/hackathon'} className={classNames('navbar-item')}>{c.hackathon}</Link>
            <Link to={'/agenda'} className={classNames('navbar-item')}>{c.agenda}</Link>
            <Link to={'/speakers'} className={classNames('navbar-item')}>{c.speakers}</Link>
            <Link to={'/about'} className={classNames('navbar-item')}>{c.about}</Link>
            <Link to={'/community_guidelines'} className={classNames('navbar-item')}>{c.guidelines}</Link>
            <span className={classNames('navbar-item')}>
              <a href={c.eventUrl} target="_blank" className={classNames('button', 'registerButton')}>
                <span>{c.register}</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
