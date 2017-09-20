import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';
import './Footer.css';

class Footer extends Component {

  render() {
    return (
        <div className={classNames('hero', 'is-small', 'footerColor')}>
            <div className={'hero-body'}>
                <div className={classNames('container', 'has-text-centered')}>
                    <div className={classNames('columns', 'is-gapless', 'is-centered')}>
                      <div className={classNames('column', 'is-2')}>
                        <a className={classNames('links')} href="mailto:san.francisco.gdg@gmail.com">{c.contact}</a>
                      </div>
                      <div className={classNames('column', 'is-2')}>
                        <a className={classNames('links')} href={'/about'}>{c.about}</a>
                      </div>
                    </div>
                    <div className={classNames('columns', 'is-gapless', 'is-centered')}>
                        <Follow className={classNames('column')} username="sf_gdg" options={{size:"large"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
