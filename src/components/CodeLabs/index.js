import React, { Component } from 'react';
import classNames from 'classnames';
import Timer from '../Timer';
import Menu from '../Menu';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import c from './content.json';
import Maps from '../Maps';

class CodeLabs extends Component {
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
              <Timer customOptions={{endDate: '10/21/2017 10:00 AM'}} />
            </div>
          </div>
        </section>
        <Maps lat={37.870400} lng={-122.268900} eventLocation='Next Space Berkeley' eventDescription='Desc' directions='https://goo.gl/maps/4X1hgairUf82' />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default CodeLabs;
