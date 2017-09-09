import React, { Component } from 'react';
import classNames from 'classnames';
import Header from '../Header';
import Events from '../Events';
import Timer from '../Timer';
import Footer from '../Footer';
import s from './Home.css';
import 'bulma/css/bulma.css'

class Home extends Component {
  
  render() {
    return (
      <div className={classNames('App', 'wrapper')}>
        <Header />
        <Events />
        <Footer />
      </div>
    );
  }
}

export default Home;
