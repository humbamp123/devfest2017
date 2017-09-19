import React, { Component } from 'react';
import classNames from 'classnames';
import Header from '../Header';
import Events from '../Events';
import s from './Home.css';
import 'bulma/css/bulma.css';

class Home extends Component {
  
  render() {
    return (
      <div className={classNames('App', s.wrapper)}>
        <Header />
        <Events />
      </div>
    );
  }
}

export default Home;
