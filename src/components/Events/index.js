import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';
import './Events.css'

class Events extends Component {
  render() {
    const index = [0, 1];
    return (
      <section style={{borderBottom: "10px solid #219e5f"}}>
        {
          index.map((item) => (
              <section key={c.events[item]} className={classNames('hero', 'is-small', 'is-white')}>
                <div className={classNames('hero-body', 'eventContainer', 'has-text-centered')} style={{borderTop: c.color[item]}}>
                  <div className={classNames('container', 'eventMargin')}>
                    <div className={classNames('container', 'eventHeaderTitle')}>
                      <p className={classNames('title')}>{c.events[item]}</p>
                      <p className={classNames('subtitle')}>{c.edates[item]}</p>
                    </div>
                    <div className={classNames('container', 'eventBlurbWrapper')}>
                      <div className={'eventBlurb'}>
                        <p>{c.blurbs[item]}</p>
                      </div>
                      <Link to={c.routes[item]} className={classNames('button','is-outlined', c.buttons[item])}>
                        {c.moreInfo}
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
          ))
        }
      </section>
    );
  }
}

export default Events;
