import React, { Component } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import c from './content.json';

class Sponsors extends Component {
  render() {
    return (
        <section className={classNames('hero', 'is-small', 'is-bold')}>
            <div className={classNames('hero-body', 'has-text-centered')}>
                <div className={classNames('title')}>{c.partners}</div>
                <div className={classNames('subtitle')}>{c.events}</div>
                <div className={classNames('columns', 'is-vcentered', 'is-centered', 'is-mobile', 'is-multiline')}>
                  <div className={classNames('column')} style={{ "maxWidth": "200px"}}>
                      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="Google Logo"></img>
                  </div>
                </div>
                <div className={classNames('subtitle')}>{c.comm}</div>
                <div className={classNames('columns', 'is-vcentered', 'is-centered', 'is-mobile', 'is-multiline')}>

                </div>
                <div className={classNames('subtitle')}>{c.venue}</div>
                <div className={classNames('columns', 'is-vcentered', 'is-centered', 'is-mobile', 'is-multiline')}>
                    <div className={classNames('column', 'is-vcentered', 'is-narrow')}>
                        <div style={{ "width": "200px", "backgroundPosition": "center" }}>
                            <a href="http://nextspace.us/">
                                <svg style={{ fill: "#ff5f00" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 527.18 148.84">
                                    <title>NextSpace</title>
                                    <path d={c.nextspace}></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className={classNames('column', 'is-vcentered', 'is-narrow')}>
                        <div style={{ "width": "200px" }}>
                            <a href="https://www.galvanize.com/san-francisco/campus">
                                <img src={c.galvanize} alt="Galvanize SF Logo"></img>
                            </a>
                        </div>
                    </div>
                    <div className={classNames('column', 'is-vcentered', 'is-narrow')}>
                        <div style={{ "width": "200px" }}>
                            <a href="https://www.42.us.org/">
                              <img style={{ "width": "100px" }} src={c.fortyTwo} alt="42 Silicon Valley Logo"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                  <p>{c.sponsorshipPrompt}</p>
                  <a href="https://goo.gl/forms/EPnlkvmGZMMmveSc2">{c.sponsorshipForm}</a>
                </div>
            </div>
        </section>
    );
  }
}

export default Sponsors;
