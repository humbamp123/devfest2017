import React, { Component } from 'react';
import { Follow } from 'react-twitter-widgets'
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Footer extends Component {

  render() {
    return (
        <section className={classNames('hero', 'is-small', 'is-bold', 'is-dark')}>
            <div className={'hero-body'}>
                <div className={classNames('content', 'has-text-centered')}>
                    <div className={classNames('columns', 'is-gapless', 'is-centered')}>
                        <a href="mailto:san.francisco.gdg@gmail.com" className={classNames('column')}>
                            {c.contact}
                        </a>
                    </div>
                    <div className={classNames('columns', 'is-gapless', 'is-centered')}>
                        <Follow className={classNames('column')} username="sf_gdg" options={{size:"large"}}/>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Footer;
