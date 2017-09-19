import React, { Component } from 'react';
import classNames from 'classnames';
import c from './content.json';
import 'bulma/css/bulma.css';
import Facebook from 'react-icons/lib/fa/facebook-official';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Github from 'react-icons/lib/fa/github-square';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import LinkIcon from 'react-icons/lib/fa/chain';
import { group as groupImages } from '../../constants/images'
import './About.css'

let MediaMap = {
  "Facebook": <div style={{ color: "#3b5998"}}>
                <Facebook size={44} />
              </div>,
  "Twitter": <div style={{ color: "#00aced"}}>
                <Twitter size={44} />
              </div>,
  "Github": <div style={{ color: "#000000"}}>
              <Github size={44} />
            </div>,
  "LinkedIn": <div style={{ color: "#007bb6"}}>
                <LinkedIn size={44} />
              </div>,
  "Link": <div style={{ color: "#CC0000"}}>
            <LinkIcon size={44} />
          </div>
}

class About extends Component {
  icon(links) {
    var test = c.media.find( (icons) => (
        ~links.toLowerCase().search(icons.toLowerCase())
      ))
    if (test) {
      return (MediaMap[test])
    }
    return (MediaMap.Link)
  }

  links(person) {
    return (
      <div className={classNames('columns', 'is-multiline', 'is-flex-mobile')}>
        {
          person.links.map( (links, linkIndex) => (
            <div key={ linkIndex } className={classNames('column')}>
              <a href={ links }>
                {this.icon(links)}
              </a>
            </div>
          ))
        }
      </div>
    )
  }

  images(name) {
    var test = groupImages.find( (images) => (
        ~images.toLowerCase().search(name.toLowerCase())
      ))
    if (test) {
      return (test)
    }
    return (groupImages[7])
  }

  content(rows) {
    return (
      rows.map( (person, personIndex) => (
        <div key={personIndex} style={{"maxWidth": "350px", "minWidth": "350px"}} className={classNames('column', 'has-text-centered', 'is-fluid')}>
          <div className={classNames('box')}>
            <div>
              <img src={this.images(person.first)} alt={person.first + " " + person.last + " Photo"}></img>
            </div>
            <div className={classNames('subtitle')}>{person.first} {person.last}</div>
            <hr></hr>
            <section>
              { this.links(person) }
            </section>
          </div>
        </div>
      ))
    );
  }

  organizers() {
    return (
      c.about.organizers.map( (rows, rowIndex) => (
        <div key={rowIndex} className={classNames('section', 'is-fluid')}>
          <div className={classNames('title', 'has-text-centered')}>
            {c.group[rowIndex]}
          </div>
          <div className={classNames('columns', 'is-centered', 'is-multiline', 'is-flex-mobile')}>
            { this.content(rows) }
          </div>
        </div>
      ))
    );
  }


  render() {
    return (
      <section>
        <div className={classNames('hero', 'is-medium', 'has-text-centered')}>
          <div className={classNames('hero-body')}>
            <h1 className={'aboutTitle'}>{c.aboutTitle}</h1>
          </div>
        </div>
        <div className={classNames('hero', 'aboutWrapper')}>
          <div className={classNames('hero-body')}>
            {this.organizers()}
          </div>
        </div>
      </section>
    );
  }
}

export default About;
