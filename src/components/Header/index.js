import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import { devFestBanner } from '../../constants/images'
import 'bulma/css/bulma.css';
import c from './content.json';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'is-light', 'is-bold', 'has-text-centered', 'className')}>
          <div className={classNames('hero-body')}>
            <div className={classNames('container')}>
              <div className={'headerBannerLogo'}>
                <img src={devFestBanner} alt={c.title + " banner"} className={classNames('is-mobile')}  style={{ "maxHeight": "150px" }} />
              </div>
              <p className={'headerBlurb'}>{c.content}</p>
              <Timer />
              <div className={classNames('button', 'registerButton', 'is-large')}>
                <a href={c.eventUrl}>{c.register}</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;
