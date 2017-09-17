import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../Home';
import Menu from '../Menu';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import About from '../About';
import CodeLabs from '../CodeLabs';
import Talks from '../Talks';
import Agenda from '../Agenda';
import Speaker from '../Speaker';
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
            <Menu />
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/codelabs" component={CodeLabs}/>
            <Route path="/talks" component={Talks}/>
            <Route path="/hackathon" component={Hackathon}/>
            <Route path="/agenda" component={Agenda}/>
            <Route path="/speakers" component={Speakers}/>
            <Route path={"/speaker/:name"} component={Speaker}/>
            <Route path="/community_guidelines" component={CommunityGuidelines}/>
            <Sponsors />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
