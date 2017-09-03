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
                    <p className={'title'}>{c.events[item]}</p>
                    <p className={'subtitle'}>{c.groups[item]}</p>
                    <p>{c.blurbs[item]}</p>
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
