import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Menu extends Component {
  render() {
    return (
      <section className={classNames('hero', 'is-dark', 'is-medium')}>
        <div className={'hero-head'}>
          <header className={'nav'}>
            <div className={'container'}>
                <Link to={'/'} className={'nav-item'}>{c.bayfest}</Link>
              <div className={classNames('nav-right', 'nav-menu')}>
                <Link to={'/codelabs'} className={'nav-item'}>{c.codelabs}</Link>
                <Link to={'/talks'} className={'nav-item'}>{c.talks}</Link>
                <Link to={'/hackathon'} className={'nav-item'}>{c.hackathon}</Link>
                <Link to={'/agenda'} className={'nav-item'}>{c.agenda}</Link>
                <Link to={'/speakers'} className={'nav-item'}>{c.speakers}</Link>
                <Link to={'/community_guidelines'} className={'nav-item'}>{c.guidelines}</Link>
                <span className={'nav-item'}>
                  <a href={c.eventUrl} target="_blank" className={classNames('button', 'is-light', 'is-outlined')}>
                    <span>{c.register}</span>
                  </a>
                </span>
              </div>
            </div>
          </header>
        </div>
      </section>  
    );
  }
}

export default Menu;
