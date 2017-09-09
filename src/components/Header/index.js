import React, { Component } from 'react';
import classNames from 'classnames';
import Menu from '../Menu';
import 'bulma/css/bulma.css';
import c from './content.json';

class Header extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-medium','is-primary','is-bold', 'has-text-centered')}>
          <Menu />  
          <div className={classNames('hero-body')}>
            <div className={classNames('columns')}>
              <div className={classNames('column', 'is-half', 'is-offset-one-quarter')}>
                <h1 className={classNames('title', 'is-1')}>{c.title}</h1>
                <h1 className={classNames('subtitle', 'is-1')}>{c.subtitle}</h1>
                <h3>{c.content}</h3>
                <a href="http://bit.ly/DevFest17" className={classNames('button', 'is-info', 'is-outlined')}>{c.register}</a>
              </div>
            </div>
          </div>
        </section>    
    );
  }
}

export default Header;
