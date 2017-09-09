import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';
import './Events.css'

class Events extends Component {
  render() {
    const index = [0, 1, 2];
    return (
      <section>
        {
          index.map((item) => {
            return (
              <section key={c.events[item]} className={classNames('hero', 'is-medium', c.colors[item], 'is-bold')}>
                <div className={classNames('hero-body', 'event-container')}>
                  <div className={'event-title'}>
                    <p className={classNames('title', 'is-3')}>{c.events[item]}</p>
                    <p className={'subtitle'}>{c.groups[item]}</p>
                    <p className={'subtitle'}>{c.edates[item]}</p>
                  </div>
                  <div className={'event-blurb-wrapper'}>
                    <p className={'event-blurb'}>{c.blurbs[item]}</p>
                    <Link to={c.routes[item]} className={classNames('button', c.btnclr[item], 'is-primary', 'is-outlined')}>
                      {c.moreInfo}
                    </Link>
                  </div>
                </div>
              </section>   
            );
          })
        }
      </section>
    );
  }
}

export default Events;
