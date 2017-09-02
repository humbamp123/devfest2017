import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../Home';
import About from '../About';
import Codelabs from '../Codelabs';
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/codelabs" component={Codelabs}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
