import React, { Component } from 'react';
import classNames from 'classnames';
import Agenda from '../Agenda'
import Timer from '../Timer';
import Maps from '../Maps';
import 'bulma/css/bulma.css';
import './Hackathon.css';
import { hackathonHero } from '../../constants/images';
import c from './content.json';

class Hackathon extends Component {
  render() {
    return (
      <div>
      <div className={'background'} style={{backgroundImage: `url(${hackathonHero})`, backgroundSize: 'cover' , backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('hackathonTitle')}>{c.title}</h1>
              <h2 className={classNames('hackathonDate')}>{c.date}</h2>
              <div className={classNames('container', 'blurbBody')}>
                <p className={classNames('hackathonBlurb')}>{c.description}</p>
              </div>
              <div className={classNames('button', 'registerButton', 'is-large')}>
                <span>{c.register}</span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Timer customOptions={{'endDate': '11/04/2017 10:00 AM', 'event': c.timeTill}} />
      <Agenda event="hackathon1"/>
      <Agenda event="hackathon2"/>
      <div className={classNames('about')}>
          <div className={'container'}>
              <h2 className={classNames('aboutTitle')}>{c.aboutTitle}</h2>
              <div className={classNames('container', 'aboutBody')}>
                <p className={classNames('aboutBody')}>{c.aboutBody}</p>
              </div>
          </div>
      </div>
        <Maps
          lat={37.548606}
          lng={-122.059009}
          eventLocation={c.place}
          eventAddress1={c.address1}
          eventAddress2={c.address2}
          directions='https://goo.gl/maps/jEcYoErqFuT2'
        />
      </div>
    );
  }
}

export default Hackathon;
