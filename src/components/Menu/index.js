import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import './Menu.css'
import c from './content.json';
import { devFestLogo } from '../../constants/images';

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showBurger: false,
    }

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle = () => this.setState(prevState=> ({showBurger: !prevState.showBurger}))

  render() {
    const { showBurger } = this.state;

    return (
      <div className={classNames('navbar', 'topMenu', 'is-dark')}>
        <div className={classNames('container')}>
          <div className={classNames('navbar-brand', 'navBar')}>
            <Link className={classNames('navbar-item')} to='/'>
              <img style={{maxHeight: "3rem"}} src={devFestLogo} alt="Bayfest Logo" />
            </Link>
            <div className={classNames('navbar-burger','button',"data-target='navMenu", showBurger ? 'is-active':'')} onClick={this.handleToggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className={classNames('navbar-end', 'navbar-menu', showBurger ? 'is-active':'' )} id="navMenu">
            <Link to={'/codelabs'} className={classNames('navbar-item')} onClick={this.handleToggle}>{c.codelabs}</Link>
            <Link to={'/talks'} className={classNames('navbar-item')} onClick={this.handleToggle}>{c.talks}</Link>
            <Link to={'/hackathon'} className={classNames('navbar-item')} onClick={this.handleToggle}>{c.hackathon}</Link>
            <Link to={'/speakers'} className={classNames('navbar-item')} onClick={this.handleToggle}>{c.speakers}</Link>
            <Link to={'/community_guidelines'} className={classNames('navbar-item')} onClick={this.handleToggle}>{c.guidelines}</Link>
            <span className={classNames('navbar-item')}>
              <a href={c.eventUrl} target="_blank" className={classNames('button', 'registerButton', 'is-large')} onClick={this.handleToggle}>
                <span>{c.register}</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
