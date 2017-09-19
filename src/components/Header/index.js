import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import { devFestBanner, gdgSign, bridgeSF, machineBall } from '../../constants/images'
import 'bulma/css/bulma.css';
import c from './content.json';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div>
        <section className={classNames('hero', 'is-medium', 'has-text-centered', 'className')}>
          <div className={classNames('hero-body')}>
            <div className={classNames('container')}>
              <div className={'headerBannerLogo'}>
                <img
                  src={machineBall} 
                  alt={c.title + " banner"}
                  style={{ 
                    "background": "gray",
                    "borderRadius": "50px",
                    "maxHeight": "100px",
                    "marginRight": "20px"
                  }}
                />
                <img
                  src={gdgSign} 
                  alt={c.title + " banner"}
                  style={{"maxHeight": "100px"}}
                />
              </div>
              <img
                src={bridgeSF}
                alt={c.title}
                style={{"maxHeight": "400px"}}
              />
              <Timer />
              <a href={c.eventUrl} className={classNames('button', 'registerButton', 'is-large')}>
                {c.register}
              </a>
            </div>
          </div>
        </section>
        <section className={classNames('hero', 'is-small')}>
          <div className={classNames('hero-body')}>
            <div className={classNames('container', 'blurbBody')}>
              <p className={'blurbTitle'}>{c.blurbTitle}</p>  
              <p className={'blurbContent'}>{c.blurbContent}</p>
            </div>
          </div>      
        </section>
      </div>
    );
  }
}

export default Header;
