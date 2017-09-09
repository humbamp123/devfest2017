import React, { Component } from 'react';
import classNames from 'classnames';
import Menu from '../Menu';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import 'bulma/css/bulma.css';
import c from './content.json';

class Agenda extends Component {
  render() {
    // TODO Replace hardcoded agenda titles
    return (
      <div className={'wrapper'}>
        <section className={classNames('hero', 'is-medium','is-primary','is-bold', 'has-text-centered')}>
          <Menu />  
          <div className={'hero-body'}>
            <div className={'container'}>
              <h1 className={classNames('title')}>{c.title}</h1>
            </div>
          </div>
        </section>
        <section className={'section'}>
          <div className={'container'}>
            <div className={classNames('tabs', 'is-medium')}>
              <ul>
                <li className={'is-active'}>
                  <a>{c.codelabs}</a>
                </li>
                <li><a>{c.talks}</a></li>
                <li><a>{c.hackathon}</a></li>
              </ul>
            </div>
            <table className={classNames('table', 'is-bordered', 'is-striped', 'is-fullwidth')}>
              <tbody>
                <tr>
                  <th>9:00AM</th>
                  <td>Registration</td>
                </tr>
                <tr>
                  <th>9:30AM</th>
                  <td>Breakfast</td>
                </tr>
                <tr>
                  <th>10:00AM</th>
                  <td>Keynote Speaker</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <Sponsors />
        <Footer />
      </div>
    );
  }
}

export default Agenda;
