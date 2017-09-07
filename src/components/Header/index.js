import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Header extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-medium','is-primary','is-bold', 'has-text-centered')}>
            <div className={'hero-body'}>
                <div className={'container'}>
                    <h1 className={classNames('title')}>{c.title}</h1>
                    <h1 className={classNames('subtitle')}>{c.subtitle}</h1>
                    <h3>{c.content}</h3>
                    <a className={classNames('button', 'is-info')}>{c.register}</a>
                </div>
            </div>
        </section>    
    );
  }
}

export default Header;
