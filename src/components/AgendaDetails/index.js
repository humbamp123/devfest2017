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
      }

    render() {
        return (
        <div className={classNames('hero is-bold is-light')}>
          <div className={classNames('hero-body')}>
            <div className={classNames('columns is-multiline is-mobile is-vcentered')}>
                <div className={classNames('column is-narrow')}>
                    <div className={'speakerDetailWrapper'}>
                        <div className={'speakerDetailPhoto'} >
                            { speakerImages[this.name]
                                ? <img alt={this.name} src={[speakerImages[this.name]]} />
                                : <img alt={this.name} src={[speakerImages['android']]} />
                            }
                        </div>
                    </div>
                </div>
                <div className={classNames('column')}>
                  <div className={classNames('title has-text-centered')}>{ c.speakerInfo[this.name].talkTitle }</div>
                  <div className={classNames('subtitle has-text-centered')}>{"by " + c.speakerInfo[this.name].firstName } { c.speakerInfo[this.name].lastName }</div>
                  <div className={classNames('columns')}>
                    <div className={classNames('column')}>{ c.speakerInfo[this.name].talkSummary}</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        );
    }
}

export default AgendaDetails;
