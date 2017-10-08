import React, { Component } from 'react';
import Countdown from 'react-count-count';
import 'bulma/css/bulma.css';
import c from './content.json';
import classNames from 'classnames';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  getOptions () {
    const { index } = this.state
    let date = ['10/28/2017 9:00 AM', '11/4/2017 10:00 AM']
    const cb = () => {
      if (index < 2) { this.setState({index: index + 1}) }
    }
    return { endDate: date[this.state.index], prefix: '', cb }
  }

  render() {
    const { index } = this.state
    const { customOptions } = this.props
    // Prioritize custom props, else go with default options
    const options = customOptions ? customOptions : this.getOptions()
    let dateInfo = [c.sfTitle, c.fremontTitle]

    return (
      <div className={classNames('hero', 'is-small', 'timer-container')}>
        <div className={classNames('hero-body')}>
          <div className={'has-text-centered'}>
            <Countdown options={options} />
            {
              !customOptions
              ? <p className={classNames('timerSubtitle')}>{c.timeTill}{dateInfo[index]}</p>
              : <p className={classNames('timerSubtitle')}>{customOptions.event}</p>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
