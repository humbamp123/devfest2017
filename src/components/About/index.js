import React, { Component } from 'react';
import classNames from 'classnames';
import c from './content.json';
import 'bulma/css/bulma.css';
import Facebook from 'react-icons/lib/fa/facebook-official';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Github from 'react-icons/lib/fa/github-square';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import LinkIcon from 'react-icons/lib/fa/chain';
import { group as groupImages } from '../../constants/images';
import './About.css';

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
      <div className={classNames('columns', 'is-multiline', 'is-mobile', 'is-centered')}>
        {
          person.links.map( (links, linkIndex) => (
            <div key={ linkIndex } className={classNames('column', 'is-narrow')}>
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
          <div key={personIndex} className={classNames('personCard')}>
            <div className={classNames('personWrapper')}>
              <div className={classNames('personPhoto')}>
                <img src={this.images(person.first)} alt={person.first + " " + person.last + " Photo"}></img>
              </div>
              <div className={classNames('personSubtitle')}>{person.first} {person.last}</div>
              <div>
                { this.links(person) }
              </div>
            </div>
          </div>
      ))
    );
  }

  organizers() {
    return (
      c.about.organizers.map( (rows, rowIndex) => (
        <div key={rowIndex} style={{marginTop: "40px"}}>
          <div className={classNames('title', 'has-text-centered')}>
            {c.group[rowIndex]}
          </div>
          <div className={classNames('personList')}>
            { this.content(rows) }
          </div>
        </div>
      ))
    );
  }


  render() {
    return (
      <div className={classNames('hero', 'is-white')}>
          {this.organizers()}
      </div>
    );
  }
}

export default About;
