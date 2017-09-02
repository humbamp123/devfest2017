import React, { Component } from 'react';
import classNames from 'classnames';
import Countdown from 'react-count-count';
import 'bulma/css/bulma.css';
import s from './Timer.css'
import c from './content.json';

class Timer extends Component {


  render() {
    const hello = () => {
      console.log('hello')
    }
    const sfOptions = {endDate: '09/02/2017 12:17 PM', prefix: '', hello} 
    const berkleyOptions = {endDate: '10/21/2017 10:00 AM'} 
    const fremontOptions = {endDate: '11/4/2017 10:00 AM'} 

    return (
        <section className={classNames('hero', 'is-small','is-warning','is-bold')}>
            <div className={'hero-body'}>
                <div className={'container'}>
                  <div className={s.countdowns}>
                    <h3 className={classNames('title', 'is-3')}>{c.sfTitle}</h3>
                    <Countdown options={sfOptions} />
                  </div>
                  <div>
                     <h3 className={classNames('title', 'is-3')}>{c.berkleyTitle}</h3>
                     <Countdown options={berkleyOptions} />
                  </div>
                  <div>
                     <h3 className={classNames('title', 'is-3')}>{c.fremontTitle}</h3>
                    <Countdown options={fremontOptions} />
                  </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Timer;
