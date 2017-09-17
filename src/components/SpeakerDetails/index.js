import React, { Component } from 'react';
import { speakers as speakerImages } from '../../constants/images'
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class SpeakerDetails extends Component {
    constructor (props) {
        super(props)
        this.name = props.speakerName
        this.state = {
            speakers: [
                'alicia', 'jennifer', 'linda', 'caren',
                'murat', 'minko', 'sneha', 'vikram', 'rupali'
            ],
            lastNames: {
                alicia:"luchetti",
                jennifer:"wong",
                linda: "avendaño-franco",
                caren: "chang",
                murat: "yener",
                minko: "gechev",
                sneha: "rajana",
                vikram: "tiwari",
                rupali: "sharma"
            }
        }
      }

    render() {
        const { speakers } = this.state
        const { lastNames } = this.state
        var name = this.name
        return (
        <section className={classNames('hero', 'is-small', 'is-bold', 'is-dark', 'has-text-centered')}>
            <div className={'speakerWrapper'}>
                <div className={'speakerPhoto'}>
                  { speakerImages[this.name]
                      ? <img alt={speakers} src={[speakerImages[this.name]]} />
                      : <img alt={speakers} src={[speakerImages['android']]} />
                  }
                </div>
            </div>
            <p className={'subtitle'}>{name} {lastNames[name]}</p>
            <p> blah blah blah</p>
        </section>
        );
    }
}

export default SpeakerDetails;