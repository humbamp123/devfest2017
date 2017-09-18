import React, { Component } from 'react';
import classNames from 'classnames';
import SpeakerDetails from '../SpeakerDetails';
import { speakers as speakerImages } from '../../constants/images'
import 'bulma/css/bulma.css';
import './Speakers.css';
import c from './content.json';


class Speakers extends Component {
  constructor (props) {
    super(props)
    this.state = {
      speakers: c.speakers,
      isShowingModal: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(speakerName) { this.setState({isShowingModal: true, name:speakerName}) }
  handleClose = () => this.setState({isShowingModal: false})

  render() {
    const { speakers } = this.state
    const { isShowingModal } = this.state

    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={'speakerTitle'}>{c.title}</h1>
            </div>
          </div>
        </section>
        <section className={'speakerSection'}>
          <div className={'speakerList'}>
          { speakers && speakers.map((name, index) => (
            <div className={'speakerCard'} key={index} id={name} onClick={() => this.handleClick(name)}>
                <div className={'speakerWrapper'}>
                  <div className={'speakerPhoto'}>
                    { speakerImages[name]
                        ? <img alt={speakers} src={[speakerImages[name]]} />
                        : <img alt={speakers} src={[speakerImages['android']]} />
                    }
                  </div>
                </div>
                <p className={'speakerName'}>{name}</p>
              </a>
            </div>
          ))}
          </div>
        </section>
        {
          isShowingModal &&
          <div className={classNames("modal", "is-active")}>
            <div className={classNames("modal-background")} onClick={this.handleClose}></div>
              <div className={classNames("modal-content",'box')} onClick={this.handleClose}>
                <SpeakerDetails speakerName={this.state.name}/>
              </div>
            <button className={classNames("modal-close","is-large","aria-label='close'")} onClick={this.handleClose}></button>
          </div>
        }
      </div>
    );
  }
}

export default Speakers;
