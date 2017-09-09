import React, { Component } from 'react';
import classNames from 'classnames';
import Footer from '../Footer';
import Menu from '../Menu';
import 'bulma/css/bulma.css';
import c from './content.json';

class Speakers extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium','is-primary','is-bold', 'has-text-centered')}>
          <Menu />  
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('title')}>{c.title}</h1>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Speakers;
