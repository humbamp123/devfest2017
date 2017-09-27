import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './Agenda.css'
import c from './content.json';
import AgendaDetails from '../AgendaDetails';

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
    var offsetSize = 4 - ((schedule.track_one ? 1 : 0) + (schedule.track_two ? 1 : 0) + (schedule.track_three ? 1 : 0) + (schedule.track_four ? 1 : 0))
    var balanceSize = offsetSize ? 5 - offsetSize : 4
    return (
      <div className={'wrapper'}>
        <section className={'section'}>
          <div className={classNames('has-text-centered')}>
            <h1 className={'agendaTitle'}>{c.title}</h1>
          </div>
          <div className={'container'}>
          <div className={classNames('tile is-ancestor is-vertical')}>
            {schedule.times && schedule.times.map((time, index)=> (
              <div key={index} className={classNames("tile is-parent")} style={{padding: "0px"}}>
                {
                  offsetSize > 0 && <article className={classNames("tile is-child is-" + offsetSize)}></article>
                }
                <article className={classNames("tile is-child box is-" + balanceSize)}>
                  <p className={classNames("title")}>{time}</p>
                </article>
                {
                  schedule.track_one && (schedule.track_one[index] && schedule.room[0]
                  ? <article id={event} className={classNames("tile is-child box is-2")} onClick={() => this.handleClick(schedule.name_track_one[index])}>
                      {schedule.track_one[index]} <br/> {schedule.speaker_track_one[index]} <br /> <p>in room {schedule.room[0]}</p>
                    </article>
                    : <article className={classNames("tile is-child box is-2 is-hidden-mobile")}>
                      </article>)
                }
                {
                  schedule.track_two && (schedule.track_two[index] && schedule.room[1]
                  ? <article id={event} className={classNames("tile is-child box is-2")} onClick={() => this.handleClick(schedule.name_track_two[index])}>
                      {schedule.track_two[index]} <br/> {schedule.speaker_track_two[index]} <br /> <p>in room {schedule.room[1]}</p>
                    </article>
                    : <article className={classNames("tile is-child box is-2 is-hidden-mobile")}>
                      </article>)
                }
                {
                  schedule.track_three && (schedule.track_three[index] && schedule.room[2]
                  ? <article id={event} className={classNames("tile is-child box is-2")} onClick={() => this.handleClick(schedule.name_track_three[index])}>
                      {schedule.track_three[index]} <br/> {schedule.speaker_track_three[index]} <br /> <p>in room {schedule.room[2]}</p>
                    </article>
                    : <article className={classNames("tile is-child box is-2 is-hidden-mobile")}>
                      </article>)
                }
                {
                  schedule.track_four && (schedule.track_four[index] && schedule.room[3]
                  ? <article id={event} className={classNames("tile is-child box is-2")} onClick={() => this.handleClick(schedule.name_track_four[index])}>
                      {schedule.track_four[index]} <br/> {schedule.speaker_track_four[index]} <br /> <p>in room {schedule.room[3]}</p>
                    </article>
                    : <article className={classNames("tile is-child box is-2 is-hidden-mobile")}>
                      </article>)
                }
                <div className={classNames('is-only-mobile')}><br /></div>
              </div>
            ))}
            </div>
          </div>
        </section>
        {
          isShowingModal && this.state.name && this.state.name !== "james-jessica" &&
          <div className={classNames("modal", "is-active")}>
            <div className={classNames("modal-background")} onClick={this.handleClose}></div>
              <div className={classNames("modal-content",'modalBox')} onClick={this.handleClose}>
                <AgendaDetails speakerName={this.state.name} />
              </div>
            <button className={classNames("modal-close","is-large","aria-label='close'")} onClick={this.handleClose}></button>
          </div>
        }
      </div>
    );
  }
}

export default Agenda;
