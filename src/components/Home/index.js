import React, { Component } from 'react';
import classNames from 'classnames';
import Header from '../Header';
import Events from '../Events';
import Timer from '../Timer';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import 'bulma/css/bulma.css'

class Home extends Component {
  
  render() {
    return (
      <div className={'App'}>
        <Header />
        <section className={classNames('hero', 'is-small','is-warning','is-bold')}>
          <div className={'hero-body'}>
            <Timer />
          </div>
        </section>
        <Events />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Home;
