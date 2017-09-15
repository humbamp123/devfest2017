import React, { Component } from 'react';
import classNames from 'classnames';
import Menu from '../Menu';
import Timer from '../Timer';
import { devFestBanner } from '../../constants/images'
import 'bulma/css/bulma.css';
import c from './content.json';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'is-light', 'is-bold', 'has-text-centered','className')}>
          <Menu />
          <div className={'hero-body'}>
            <div className={'container'}>
              <img src={devFestBanner} alt={c.title + " banner"} className={'headerBannerLogo'} />
              <p className={'headerBlurb'}>{c.content}</p>
              <Timer />
              <a href={c.eventUrl} className={classNames('button', 'is-dark', 'is-outlined')}>{c.register}</a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
