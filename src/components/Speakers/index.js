import React, { Component } from 'react';
import classNames from 'classnames';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import Menu from '../Menu';
import { speakers as speakerImages } from '../../constants/images'
import 'bulma/css/bulma.css';
import './Speakers.css';
import c from './content.json';


class Speakers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      speakers: [
        'alicia', 'jennifer', 'linda', 'caren',
        'murat', 'minko', 'sneha', 'vikram', 'rupali'
      ]
    }
  }

  render() {
    const { speakers } = this.state

    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'is-light', 'is-bold', 'has-text-centered')}>
          <Menu />
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('title')}>{c.title}</h1>
            </div>
          </div>
        </section>
        <section className={'speakerSection'}>
          { speakers && speakers.map((name, index) => (
            <div className={'speakerCard'} key={index}>
              <div className={'speakerWrapper'}>
                <div className={'speakerPhoto'}>
                  { speakerImages[name]
                      ? <img alt={speakers} src={[speakerImages[name]]} />
                      : <img alt={speakers} src={[speakerImages['android']]} />
                  }
                </div>
              </div>
              <p className={'subtitle'}>{name}</p>
            </div>
          ))}
        </section>
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Speakers;
