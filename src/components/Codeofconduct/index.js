import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import classNames from 'classnames';

class Codeofconduct extends Component {
  render() {
    return (
      <section className={classNames('section')}>
        <div className={classNames('container')}>
          <p className={classNames('title')}>Community Guidelines</p>
          <p>When you join a GDG as a member or an organizer, you are joining a community. And like any growing community, a few ground rules about expected behavior is good for everyone.</p>
          <br></br>
          <p>This guideline covers both online (mailing lists, Google+, IRC, etc.) and offline behavior (during in-person meetups).</p>
          <br></br>
          <p>These guidelines are modeled after the <a href="http://www.ubuntu.com/project/about-ubuntu/conduct">Ubuntu Code of Conduct, and</a> likewise licensed under <a href="http://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-Share Alike 3.0</a>.</p>
          <br></br>
          <p><strong>Be nice</strong>. We're all part of the same community, so be friendly, be welcoming, and generally be a nice person. Be someone that other people want to be around.</p>
          <br></br>
          <p><strong>Be respectful and constructive</strong>. We're a very diverse group (95 countries and counting!), so we're not going to agree all the time. Remember to be respectful and constructive with your communication to your fellow GDG'ers. Don't get into flamewars, don't make personal attacks, don't vent or rant unconstructively. Everyone should take responsibility for the community and take the initiative to diffuse tension and stop a potential flamewar or negative thread as early as possible.</p>
          <br></br>
          <p><strong>Be collaborative</strong>. Work together! We can learn a lot from each other. Share knowledge, update the wiki, help each other out.</p>
          <br></br>
          <p><strong>Participate</strong>. This is YOUR community, so be a part of it! Join in on discussions, show up for in-person meetings regularly, offer feedback, and offer to help implement that feedback!</p>
          <br></br>
          <p><strong>Step down considerately</strong>. If you're an organizer, or have some form of responsibility in running a GDG chapter (ie. you're running the website), be aware of your own constraints. We all know that life can get busy, so if you know that a new job or family situation will impact your ability to organize your group, find a way to step down gracefully. Make sure someone can take over for you, and transfer the relevant information (contacts, passwords, etc.) for a smooth transition.</p>
        </div>
      </section>
	 );
  }
}

export default Codeofconduct;
