import React, { Component } from 'react';
import { speakers as speakerImages } from '../../constants/images';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './SpeakerDetails.css';
import c from './content.json';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Github from 'react-icons/lib/fa/github-square';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import LinkIcon from 'react-icons/lib/fa/chain';

class SpeakerDetails extends Component {
    componentDidMount() {
        var modal = document.querySelector('.modal')
        var html = document.querySelector('html')
        modal.classList.add('is-active')
        html.classList.add('is-clipped')
      }

      componentWillUnmount() {
        var modal = document.querySelector('.modal')
        var html = document.querySelector('html')
        modal.classList.remove('is-active')
        html.classList.remove('is-clipped')
      }

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
        return (
        <div className={classNames('hero', 'is-bold', 'is-light', 'has-text-centered')}>
          <div className={classNames('hero-body')}>
            <div className={classNames('columns')}>
                <div className={classNames('column', 'is-narrow', 'is-half', "is-offset-one-quarter")}>
                    <div className={'speakerDetailWrapper'}>
                        <div className={'speakerDetailPhoto'} >
                            { speakerImages[this.name]
                                ? <img alt={speakers} src={[speakerImages[this.name]]} />
                                : <img alt={speakers} src={[speakerImages['android']]} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <p className={classNames('title')}>{ c.speakerInfo[this.name].firstName } { c.speakerInfo[this.name].lastName }</p>
            <p className={classNames('subtitle')}>{ c.speakerInfo[this.name].profession } at { c.speakerInfo[this.name].employer }</p>
            <br/>
            <div className={classNames('columns')}>
                <p className={classNames('column')}>{ c.speakerInfo[this.name].bio }</p>
            </div>
            <br/>
            <div className={classNames('columns', 'is-flex-mobile', 'is-centered')}>
                <div className={classNames('column', 'is-narrow')}>
                    { c.speakerInfo[this.name].twitter
                    ? <a href={ c.speakerInfo[this.name].twitter }>
                        <div style={{ color: "#00aced"}}>
                            <Twitter size={44} />
                        </div>
                    </a>
                    : <div/>
                    }
                </div>
                <div className={classNames('column', 'is-narrow')}>
                    { c.speakerInfo[this.name].linkedIn
                        ? <a href={ c.speakerInfo[this.name].linkedIn }>
                            <div style={{ color: "#007bb6"}}>
                                <LinkedIn size={44} />
                            </div>
                        </a>
                        : <div/>
                    }
                </div>
                <div className={classNames('column', 'is-narrow')}>
                    { c.speakerInfo[this.name].github
                        ? <a href={ c.speakerInfo[this.name].github }>
                            <div style={{ color: "#000000"}}>
                                <Github size={44} />
                            </div>
                        </a>
                        : <div/>
                    }
                </div>
                <div className={classNames('column', 'is-narrow')}>
                    { c.speakerInfo[this.name].portfolio
                        ? <a href={ c.speakerInfo[this.name].portfolio }>
                            <div style={{ color: "#CC0000"}}>
                                <LinkIcon size={44} />
                            </div>
                        </a>
                        : <div/>
                    }
                </div>
            </div>
          </div>
        </div>
        );
    }
}

export default SpeakerDetails;
