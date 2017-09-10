import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Footer extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-small', 'is-bold')}>
            <div className={'hero-body'}>
                <div className={classNames('content', 'has-text-centered')}>
                    <div className={classNames('columns', 'is-gapless', 'is-centered')}>
                        <div className={classNames('column')}>{c.partners}</div>
                        <div className={classNames('column')}>{c.visitors}</div>
                        <a href="mailto:san.francisco.gdg@gmail.com" className={classNames('column')}>
                            {c.contact}
                        </a>
                    </div>
                    <div className={classNames('columns', 'is-gapless', 'is-centered')}>
                        <a className={classNames('column')} href="https://twitter.com/sf_gdg" class="twitter-follow-button" data-show-count="false">Follow @sf_gdg</a><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                </div>
            </div>
        </section>    
    );
  }
}

export default Footer;
