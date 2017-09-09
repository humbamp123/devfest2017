import React, { Component } from 'react';
import classNames from 'classnames';
import Menu from '../Menu';
import Timer from '../Timer';
import 'bulma/css/bulma.css';
import c from './content.json';
import s from './Header.css'

class Header extends Component {
  render() {
    const { className } = this.props

    return (
      <section className={classNames('hero', 'is-medium','is-primary','is-bold', 'has-text-centered', 'className')}>
        <Menu />  
        <div className={'hero-body'}>
          <div className={'container'}>
            <h1 className={classNames('title is-1')}>{c.title}</h1>
            <h1 className={classNames('subtitle')}>{c.subtitle}</h1>
            <p className={'header-blurb'}>{c.content}</p>
            <Timer />
            <a className={classNames('button', 'is-outlined')}>{c.register}</a>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
