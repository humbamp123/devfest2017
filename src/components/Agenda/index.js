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
        <section className={'section'}>
          <div className={classNames('has-text-centered')}>
            <h1 className={'agendaTitle'}>{c.title}</h1>
          </div>
          <div className={'container'}>
            <table className={classNames('table', 'is-bordered', 'is-striped', 'is-fullwidth')}>
              <tbody>
                {schedule.times && schedule.times.map((name, index)=> (
                  <tr key={index}>
                    <th>{name}</th>
                    <td>{schedule.track_one[index]} <br/> {schedule.speaker_track_one[index]}</td>
                     {schedule.track_two ? <td>{schedule.track_two[index]} <br/> {schedule.speaker_track_two[index]}</td> : <div/>}
                     {schedule.track_three ? <td>{schedule.track_three[index]} <br/> {schedule.speaker_track_three[index]}</td> : <div/>}
                     {schedule.track_four ? <td>{schedule.track_four[index]} <br/> {schedule.speaker_track_four[index]}</td> : <div/>}
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
