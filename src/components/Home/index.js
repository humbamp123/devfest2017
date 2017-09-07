import React, { Component } from 'react';
import Header from '../Header';
import Events from '../Events';
import Timer from '../Timer';
import Maps from '../Maps';
import Footer from '../Footer';
import 'bulma/css/bulma.css'

class Home extends Component {
  render() {
    return (
      <div className={'App'}>
        <Header />
        <Timer />
        <Events />
        <Maps lat={37.787600} lng={-122.396600} eventLocation='Galvanize SF - Soma' eventDescription='Desc' directions='https://goo.gl/maps/21dQqb9tccR2' />
        <Maps lat={37.870400} lng={-122.268900} eventLocation='Next Space Berkeley' eventDescription='Desc' directions='https://goo.gl/maps/4X1hgairUf82' />
        <Maps lat={37.548606} lng={-122.059009} eventLocation='42 Silicon Valley' eventDescription='Desc' directions='https://goo.gl/maps/jEcYoErqFuT2' />
        <Footer />
      </div>
    );
  }
}

export default Home;
