import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import { devFestBanner, SFbridge } from '../../constants/images';
import 'bulma/css/bulma.css';
import c from './content.json';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${SFbridge})`, backgroundSize: 'cover' , backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
        <section className={classNames('hero', 'is-small', 'has-text-centered')} style={{padding: '75px 0px'}}>
          <div className={classNames('hero-body')}>
              <div className={classNames('headerBannerLogo')}>
                <img
                  src={devFestBanner}
                  alt={c.title + " banner"}
                />
              </div>
              <div className={classNames('container', 'blurbBody')}>
                <p className={'blurbContent'}>{c.blurbContent}</p>
              </div>
              <a href={c.eventUrl} className={classNames('button', 'registerButton', 'is-large')}>
                {c.register}
              </a>
            </div>
        </section>
        <Timer />
      </div>
    );
  }
}

export default Header;
