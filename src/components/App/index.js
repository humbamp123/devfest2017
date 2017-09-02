import React, { Component } from 'react';
import Header from '../Header';
import Events from '../Events';
import Timer from '../Timer';
import Footer from '../Footer';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Header />
        <Timer />
        <Events />
        <Footer />
      </div>
    );
  }
}

export default App;
