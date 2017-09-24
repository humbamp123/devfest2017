import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './Agenda.css'
import c from './content.json';

class Agenda extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      event: props.event
    }
  }
  render() {
    const { event } = this.state

    var schedule = c[event].schedule
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={'agendaTitle'}>{c.title}</h1>
            </div>
          </div>
        </section>
        <section className={'section'}>
          <div className={'container'}>
            <table className={classNames('table', 'is-bordered', 'is-striped', 'is-fullwidth')}>
              <tbody>
                {schedule.times && schedule.times.map((name, index)=> (
                  <tr key={index}>
                    <th>{name}</th>
                    <td>{schedule.title[index]}</td>
                    <td> {schedule.speaker[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default Agenda;
