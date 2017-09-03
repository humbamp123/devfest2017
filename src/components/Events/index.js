import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Events extends Component {
  render() {
    const index = [0, 1, 2];
    return (
      <section>
        {
          index.map((item) => {
            return (
              <section key={c.events[item]} className={classNames('hero', 'is-medium', c.colors[item], 'is-bold')}>
                <div className={classNames('hero-body', 'has-text-centered')}>
                    <p className={classNames('title', 'is-1')}>{c.events[item]}</p>
                    <p className={classNames('subtitle', 'is-1')}>{c.groups[item]}</p>
                    <p>{c.blurbs[item]}</p>
                    <p className={classNames('subtitle', 'is-1')}>{c.edates[item]}</p>
                    <a href={c.morbtn} className={classNames('button', c.btnclr[item], 'is-outlined')}>More Info</a>
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
