import React, { Component } from 'react';
import Menu from '../Menu';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import 'bulma/css/bulma.css';
import classNames from 'classnames';

class CommunityGuidelines extends Component {
  render() {
    return (
      <div className={'wrapper'}>
        <Menu />
        <section className={classNames('section')}>
          <div className={classNames('container')}>
            <p className={classNames('title')}>Community Guidelines</p>
            <p>This guideline covers both online (mailing lists, Google+, IRC, etc.) and offline behavior (during in-person meetups/events).</p>
            <br></br>
            <p>These guidelines are modeled after the <a href="http://www.ubuntu.com/project/about-ubuntu/conduct">Ubuntu Code of Conduct, and</a> likewise licensed under <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0</a>.</p>
            <br></br>
            <p><strong>Be nice</strong>. We're all part of the same community, so be friendly, be welcoming, and generally be a nice person. Be someone that other people want to be around.</p>
            <br></br>
            <p><strong>Be respectful and constructive</strong>. We're a very diverse group, so we're not going to agree all the time. Remember to be respectful and constructive with your communication to your fellow GDG'ers. Don't get into flamewars, don't make personal attacks, don't vent or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a potential flamewar or negative thread as early as possible.</p>
            <br></br>
            <p><strong>Be collaborative</strong>. Work together! We can learn a lot from each other. Share knowledge and help each other out.</p>
            <br></br>
            <p><strong>Participate</strong>. This is YOUR community, so be a part of it! Join in on discussions, show up for in-person meetings regularly, offer feedback, and offer to help implement that feedback!</p>
          </div>
        </section>
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default CommunityGuidelines;
