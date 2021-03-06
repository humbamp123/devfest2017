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
    var offsetSize = 5 - ((schedule.track_one ? 1 : 0) + (schedule.track_two ? 1 : 0) + (schedule.track_three ? 1 : 0) + (schedule.track_four ? 1 : 0))
    var balanceSize = (4 - offsetSize) >= 2 ? 4 - offsetSize : 2
    return (
        <section className={classNames('hero is-small')}>
          <div className={classNames('hero-body')}>
          {
            event !== "hackathon2" &&
            <div className={classNames('has-text-centered')}>
              <h1 className={'agendaTitle'}>{c.title}</h1>
            </div>
          }
          <div className={'container'}>
            <div className={classNames('subtitle has-text-centered')}>{c[event].date}</div>
            <div className={classNames('tile is-ancestor is-vertical')}>
              {
                schedule.times && schedule.times.map((time, index)=> (
                <div key={index} className={classNames("tile is-parent")} style={{padding: "0px"}}>
                  {
                    offsetSize > 0 && <article className={classNames("tile is-child is-" + offsetSize)}></article>
                  }
                  {
                    time
                    ? <article className={classNames("tile is-child box is-" + balanceSize)}>
                        <p className={classNames("subtitle")}>{time}</p>
                      </article>
                      : <article className={classNames("tile is-child is-" + balanceSize)}>
                        </article>

                  }
                  {
                    schedule.track_one && (schedule.track_one[index]
                    ? <article id={"room1"} className={classNames("tile is-child box is-2")} onClick={() => this.handleClick(schedule.name_track_one[index])}>
                        <div style={{ fontWeight: "bold" }}>{schedule.track_one[index]}</div>{schedule.speaker_track_one[index]} <br />
                      </article>
                      : <article className={classNames("tile is-child box is-2 is-hidden-mobile")}>
                        </article>)
                  }
                  {
                    schedule.track_two && (schedule.track_two[index]
                    ? <article id={"room2"} className={classNames("tile is-child box is-2")} onClick={() => this.handleClick(schedule.name_track_two[index])}>
                        <div style={{ fontWeight: "bold" }}>{schedule.track_two[index]}</div>{schedule.speaker_track_two[index]} <br />
                      </article>
                      : <article className={classNames("tile is-child box is-2 is-hidden-mobile")}>
                        </article>)
                  }
                  {
                    schedule.track_three && (schedule.track_three[index]
                    ? <article id={"room3"} className={classNames("tile is-child box is-2")} onClick={() => this.handleClick(schedule.name_track_three[index])}>
                        <div style={{ fontWeight: "bold" }}>{schedule.track_three[index]}</div>{schedule.speaker_track_three[index]} <br />
                      </article>
                      : <article className={classNames("tile is-child box is-2 is-hidden-mobile")}>
                        </article>)
                  }
                  {
                    schedule.track_four && (schedule.track_four[index]
                    ? <article id={"room4"} className={classNames("tile is-child box is-2")} onClick={() => this.handleClick(schedule.name_track_four[index])}>
                        <div style={{ fontWeight: "bold" }}>{schedule.track_four[index]}</div>{schedule.speaker_track_four[index]} <br />
                      </article>
                      : <article className={classNames("tile is-child box is-2 is-hidden-mobile")}>
                        </article>)
                  }
                  <div className={classNames('is-only-mobile')}><br /></div>
                </div>
              ))}
            </div>
          </div>
         {
            isShowingModal && this.state.name && this.state.name !== "james-jessica" && this.state.name !== "harold" &&
            <div className={classNames("modal", "is-active")}>
              <div className={classNames("modal-background")} onClick={this.handleClose}></div>
                <div className={classNames("modal-content",'modalBox')} onClick={this.handleClose}>
                  <AgendaDetails speakerName={this.state.name} />
                </div>
              <button className={classNames("modal-close","is-large","aria-label='close'")} onClick={this.handleClose}></button>
            </div>
          }
          </div>
          {
            event !== 'hackathon1' &&
            <div className={'agendaStyle'}></div>
          }
        </section>
    );
  }
}

export default Agenda;
