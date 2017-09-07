import React, { Component } from 'react';
import classNames from 'classnames';
import Countdown from 'react-count-count';
import 'bulma/css/bulma.css';
import c from './content.json';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  getOptions () {
    const { index } = this.state
    let date = ['10/21/2017 10:00 AM', '10/28/2017 9:00 AM', '11/4/2017 10:00 AM']
    const cb = () => {
      if (index < 3) { this.setState({index: index + 1}) }
    }
    
    return { endDate: date[this.state.index], prefix: '', cb }
  }

  render() {
    const { index } = this.state
    const { customOptions } = this.props

    // Prioritize custom props, else go with default options
    const options = customOptions || this.getOptions()
    let dateInfo = [c.berkleyTitle, c.sfTitle, c.fremontTitle]

    return (
      <div className={'container'}>
        <div className={'has-text-centered'}>
          {!customOptions && <h3 className={classNames('title', 'is-3')}>{dateInfo[index]}</h3>}
          <Countdown options={options} />
        </div>
      </div>
    );
  }
}

export default Timer;
