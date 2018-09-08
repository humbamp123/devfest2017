import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import { devFestBanner, SFbridge } from '../../constants/images';
import c from './content.json';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <section className={classNames('hero', 'is-small', 'has-text-centered', 'background')} style={{padding: '75px 0px'}}>
          <div className={classNames('hero-body')}>
              <div className={classNames('headerBannerLogo')}>
                <img
                  src={devFestBanner}
                  alt={c.title + " banner"}
                />
              </div>
              <div className={classNames('blurbTitle')}>{c.title}
                  <div className={classNames('blurbSubtitle')}>{c.subtitle}</div>
                  <div className={classNames('blurbSubtitle')}>{c.eventDetails}</div>
              </div>
              <div className={classNames('container', 'blurbBody')}>
                <p className={'blurbContent'}>{c.blurbContent}</p>
              </div>
              <div className={classNames('container', 'blurbBody')}>
                  <p className={classNames('blurbSubtitle', 'tl')}> {c.submitATalkTitle} </p>
              </div>
              <div className={classNames('container', 'blurbBody')}>
                  <p className={classNames('blurbContent')}>{c.submitContent}</p>
              </div>
      <a href={c.callForm} className={classNames('button', 'registerButton', 'is-large', 'font', 'l')}>
        {c.callButton}
        </a>
              {/* <a href={c.eventUrl} className={classNames('button', 'registerButton', 'is-large')}>
                {c.register}
              </a> */}
            </div>
        </section>
        {/* <Timer /> */}
      </div>
    );
  }
}

export default Header;
