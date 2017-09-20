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
      <section style={{borderBottom: "10px solid #219e5f"}}>
        {
          index.map((item) => (
              <section key={c.events[item]} className={classNames('hero', 'is-small')}>
                <div className={classNames('hero-body', 'eventContainer')} style={{borderTop: c.color[item]}}>
                  <div className={classNames('columns', 'is-vcentered', 'is-multiline', 'is-mobile')}>
                    <div className={classNames('column')} style={{minWidth: "200px"}}>
                      <div className={'eventHeaderTitle'}>
                        <p className={'eventTitle'}>{c.events[item]}</p>
                        <p className={'eventSubtitle'}>{c.groups[item]}</p>
                        <p className={'eventSubtitle'}>{c.edates[item]}</p>
                      </div>
                    </div>
                    <div className={classNames('column')} style={{minWidth: "200px"}}>
                      <div className={'eventBlurbWrapper'}>
                        <p className={'eventBlurb'}>{c.blurbs[item]}</p>
                        <Link to={c.routes[item]} className={classNames('button','is-outlined', c.buttons[item])}>
                          {c.moreInfo}
                        </Link>
                      </div>
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
