import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import Menu from '../Menu';
import Footer from '../Footer';
import 'bulma/css/bulma.css';
import c from './content.json';

class Hackathon extends Component {
  render() {
    return (
      <div>
        <section className={classNames('hero', 'is-medium','is-light','is-bold', 'has-text-centered')}>
          <Menu />  
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('title')}>{c.title}</h1>
            </div>
          </div>
        </section>
        <section className={classNames('hero', 'is-small','is-light', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <Timer customOptions={{endDate: '11/04/2017 10:00 AM'}} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Hackathon;