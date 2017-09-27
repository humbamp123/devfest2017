import React, { Component } from 'react';
import { speakers as speakerImages } from '../../constants/images';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './AgendaDetails.css';
import c from './content.json';

class AgendaDetails extends Component {
    constructor (props) {
        super(props)
        this.name = props.speakerName
        this.name2 = props.speakerName2
      }

    render() {
        return (
        <div className={classNames('hero', 'is-bold', 'is-light', 'has-text-centered')}>
          <div className={classNames('hero-body')}>
            <div className={classNames('columns')}>
                <div className={classNames('column', 'is-narrow', 'is-half', "is-offset-one-quarter")}>
                    <div className={'speakerDetailWrapper'}>
                        <div className={'speakerDetailPhoto'} >
                            { speakerImages[this.name]
                                ? <img alt={this.name} src={[speakerImages[this.name]]} />
                                : <img alt={this.name} src={[speakerImages['android']]} />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <p className={classNames('title')}>{ c.speakerInfo[this.name].firstName } { c.speakerInfo[this.name].lastName }</p>
            <br/>
            <p className={classNames('subtitle')}>{ c.speakerInfo[this.name].talkTitle }</p>
            <br/>
            <p>{ c.speakerInfo[this.name].talkSummary}</p>
          </div>
        </div>
        );
    }
}

export default AgendaDetails;
