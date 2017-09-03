import React, { Component } from 'react';
import classNames from 'classnames';
import Countdown from 'react-count-count';
import 'bulma/css/bulma.css';
import c from './content.json';
import './Timer.css';

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = { index: 0}
    }

  render() {
    let date = ['10/21/2017 10:00 AM', '10/28/2017 9:00 AM', '10/4/2017 10:00 AM']
    let dateInfo = [c.berkleyTitle ,c.sfTitle, c.fremontTitle]
    const cb = () => {
        if (this.state.index < 3) {
            this.setState({index: this.state.index + 1})
        }
    }
    var Options = {endDate: date[this.state.index], prefix: '', cb} 
    return (
        <section className={classNames('hero', 'is-small','is-warning','is-bold')}>
            <div className={'hero-body'}>
                <div className={'container'}>
                  <div className={classNames('has-text-centered')}>
                    <h3 className={classNames('title', 'is-3')}>{dateInfo[this.state.index]}</h3>
                    <Countdown options={Options} />
                  </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Timer;
