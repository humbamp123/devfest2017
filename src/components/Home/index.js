import React, { Component } from 'react';
import classNames from 'classnames';
import Header from '../Header';
import Events from '../Events';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import './Home.css';
import 'bulma/css/bulma.css';

class Home extends Component {
  
  render() {
    return (
      <div className={classNames('App', 'wrapper')}>
        <Header />
        <Events />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Home;
