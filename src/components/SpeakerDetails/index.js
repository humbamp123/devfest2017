import React, { Component } from 'react';
import { speakers as speakerImages } from '../../constants/images'
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Github from 'react-icons/lib/fa/github-square';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import LinkIcon from 'react-icons/lib/fa/chain';


class SpeakerDetails extends Component {
    constructor (props) {
        super(props)
        this.name = props.speakerName
        this.state = {
            speakers: [
                'alicia', 'jennifer', 'linda', 'caren',
                'murat', 'minko', 'sneha', 'vikram', 'rupali'
            ],
        }
      }

    render() {
        const { speakers } = this.state
        var name = this.name
        return (
        <section className={classNames('hero', 'is-small', 'is-bold', 'is-dark', 'has-text-centered')}>
            <div className={'speakerWrapper'} >
                <div className={'speakerPhoto'}>
                  { speakerImages[this.name]
                      ? <img alt={speakers} src={[speakerImages[this.name]]} />
                      : <img alt={speakers} src={[speakerImages['android']]} />
                  }
                </div>
            </div>
            <p className={'subtitle'}>{ c.speakerInfo[this.name].firstName } { c.speakerInfo[this.name].lastName }</p>
            <p>{ c.speakerInfo[this.name].profession } at { c.speakerInfo[this.name].employer }</p>
            <p>{ c.speakerInfo[this.name].bio }</p>
            <div className={classNames('columns', 'is-multiline', 'is-flex-mobile')}>
            { c.speakerInfo[this.name].twitter
                ? <a href={ c.speakerInfo[this.name].twitter }> 
                    <div style={{ color: "#00aced"}}>
                        <Twitter size={44} />
                    </div>
                  </a>
                : <p></p>
            }
            { c.speakerInfo[this.name].linkedIn
                ? <a href={ c.speakerInfo[this.name].linkedIn }> 
                    <div style={{ color: "#007bb6"}}>
                        <LinkedIn size={44} />
                    </div>
                  </a>
                : <p></p>
            }
            { c.speakerInfo[this.name].github
                ? <a href={ c.speakerInfo[this.name].github }> 
                    <div style={{ color: "#000000"}}>
                        <Github size={44} />
                    </div>
                  </a>
                : <p></p>
            }
            { c.speakerInfo[this.name].portfolio
                ? <a href={ c.speakerInfo[this.name].portfolio }> 
                    <div style={{ color: "#CC0000"}}>
                        <LinkIcon size={44} />
                    </div>
                  </a>
                : <p></p>
            }
            </div>
        </section>
        );
    }
}

export default SpeakerDetails;