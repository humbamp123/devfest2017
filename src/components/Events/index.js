import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
                  <div className={classNames('columns')}>
                    <div className={classNames('column', 'is-half', 'is-offset-one-quarter')}>
                      <p className={classNames('title', 'is-1')}>{c.events[item]}</p>
                      <p className={classNames('subtitle', 'is-1')}>{c.groups[item]}</p>
                      <h3>{c.blurbs[item]}</h3>
                      <p className={classNames('subtitle', 'is-1')}>{c.edates[item]}</p>
                      <Link to={c.routes[item]} className={classNames('button', c.btnclr[item], 'is-outlined')}>
                        {c.moreInfo}
                      </Link>
                    </div>
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
