import React, { Component } from 'react';
import classNames from 'classnames';
import Maps from '../Maps';
import Timer from '../Timer';
import 'bulma/css/bulma.css';
import c from './content.json';
import { talksHero } from '../../constants/images';
import './Talks.css'

class Talks extends Component {
  render() {
    return (
      <div>
      <div className={'background'} style={{backgroundImage: `url(${talksHero})`, backgroundSize: 'cover' , backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={'talkTitle'}>{c.title}</h1>
              <h2 className={classNames('talkDate')}>{c.date}</h2>
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
      <Timer customOptions={{endDate: '10/28/2017 9:00 AM', 'event': c.timeTill}} />
        <div className={classNames('about')}>
          <div className={'container'}>
              <h2 className={classNames('aboutTitle')}>{c.aboutTitle}</h2>
              <div className={classNames('container', 'aboutBody')}>
                <p className={classNames('aboutBody')}>{c.aboutBody}</p>
              </div>
          </div>
        </div>
        <Maps
          lat={37.787600}
          lng={-122.396600}
          eventLocation={c.place}
          eventAddress1={c.address1}
          eventAddress2={c.address2}
          directions='https://goo.gl/maps/21dQqb9tccR2'
        />
      </div>
    );
  }
}

export default Talks;
