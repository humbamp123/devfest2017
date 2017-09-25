import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './Agenda.css'
import c from './content.json';

class Agenda extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      event: props.event,
      speakers: c.speakers,
      isShowingModal: false,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(speakerName) { this.setState({isShowingModal: true, name:speakerName}) }
  handleClose = () => this.setState({isShowingModal: false})

  render() {
    const { event } = this.state
    const { isShowingModal } = this.state

    var schedule = c[event].schedule
    return (
      <div className={'wrapper'}>
        <section className={'section'}>
          <div className={classNames('has-text-centered')}>
            <h1 className={'agendaTitle'}>{c.title}</h1>
          </div>
          <div className={'container'}>
          <div className={classNames('tile is-ancestor is-vertical')}>
            {schedule.times && schedule.times.map((time, index)=> (
              <div key={index} className={classNames("tile")}>
                <div className={classNames("tile is-parent")}>
                  <article className={classNames("tile is-child box")}>
                      <p>{time}</p>
                  </article>
                  <article id={event} className={classNames("tile is-child box")} onClick={() => this.handleClick(schedule.name_track_one[index])}>
                    {schedule.track_one[index]} <br/> {schedule.speaker_track_one[index]}
                  </article>
                  {schedule.track_two ? <article id={event} className={classNames("tile is-child box")} onClick={() => this.handleClick(schedule.name_track_two[index])}>
                    {schedule.track_two[index]} <br/> {schedule.speaker_track_two[index]}
                  </article>: <div/>}
                  {schedule.track_two ? <article id={event} className={classNames("tile is-child box")} onClick={() => this.handleClick(schedule.name_track_three[index])}>
                    {schedule.track_three[index]} <br/> {schedule.speaker_track_three[index]}
                  </article>: <div/>}
                  {schedule.track_two ? <article id={event} className={classNames("tile is-child box")} onClick={() => this.handleClick(schedule.name_track_four[index])}>
                    {schedule.track_four[index]} <br/> {schedule.speaker_track_four[index]}
                  </article>: <div/>}
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
        {
          isShowingModal &&
          <div className={classNames("modal", "is-active")}>
            <div className={classNames("modal-background")} onClick={this.handleClose}></div>
              <div className={classNames("modal-content",'modalBox')} onClick={this.handleClose}>
                {/*This is where the agenda modal goes */}
                <div className={classNames("card")}>
                  <div className={classNames("cardContent")}>
                    <p>{this.state.name}</p>
                  </div>
                </div>
              </div>
            <button className={classNames("modal-close","is-large","aria-label='close'")} onClick={this.handleClose}></button>
          </div>
        }
      </div>
    );
  }
}

export default Agenda;
