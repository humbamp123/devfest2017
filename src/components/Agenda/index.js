import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Agenda extends Component {
  constructor (props) {
    super(props)
    
    this.state = {
      agenda: [
        '9:30 AM', '10:30 AM', '11:30 AM'
      ],
      event: props.event
    }
  }
  render() {
    const { agenda } = this.state
    const { event } = this.state
    return (
      <div className={'wrapper'}>
        {c[event].title}
        <section className={'section'}>
          <div className={'container'}>
          <div>{c[event].schedule["9:30AM"]}</div>
            <table className={classNames('table', 'is-bordered', 'is-striped', 'is-fullwidth')}>
              <tbody>
                { c[event].schedule && function() {for( var key in c[event].schedule){ 
                <tr>
                  <th>{key}</th>
                  <td>{c[event].schedule[key]}</td>
                </tr>
                }}}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

export default Agenda;
