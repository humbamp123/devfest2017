import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../Home';
import About from '../About';
import CodeLabs from '../CodeLabs';
import Talks from '../Talks';
import Agenda from '../Agenda';
import Speakers from '../Speakers';
import Hackathon from '../Hackathon';
import CommunityGuidelines from '../CommunityGuidelines';
import 'bulma/css/bulma.css'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/codelabs" component={CodeLabs}/>
            <Route path="/talks" component={Talks}/>
            <Route path="/hackathon" component={Hackathon}/>
            <Route path="/agenda" component={Agenda}/>
            <Route path="/speakers" component={Speakers}/>
            <Route path="/community_guidelines" component={CommunityGuidelines}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
