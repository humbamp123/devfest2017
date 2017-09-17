import React, { Component } from 'react';
import classNames from 'classnames';
import Header from '../Header';
import Events from '../Events';
import Menu from '../Menu';
import './Home.css';
import 'bulma/css/bulma.css';

class Home extends Component {
  
  render() {
    return (
      <div className={classNames('App', 'wrapper')}>
        <Header />
        <Events />
      </div>
    );
  }
}

export default Home;
