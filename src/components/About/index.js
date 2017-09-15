import React, { Component } from 'react';
import Menu from '../Menu';
import Sponsors from '../Sponsors';
import Footer from '../Footer';
import classNames from 'classnames';
import c from './content.json';
import 'bulma/css/bulma.css';
import Facebook from 'react-icons/lib/fa/facebook-official';
import Twitter from 'react-icons/lib/fa/twitter-square';
import Github from 'react-icons/lib/fa/github-square';
import LinkedIn from 'react-icons/lib/fa/linkedin-square';
import LinkIcon from 'react-icons/lib/fa/chain';

let MediaMap = {
  "Facebook": <Facebook size={30} />,
  "Twitter": <Twitter size={30} />,
  "Github": <Github size={30} />,
  "LinkedIn": <LinkedIn size={30} />,
  "Link": <LinkIcon size={30} />
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

  content(rows) {
    return (
      rows.map( (person, personIndex) => (
        <div key={personIndex} style={{"maxWidth": "300px", "minWidth": "200px"}} className={classNames('column', 'has-text-centered', 'is-fluid')}>
          <div className={classNames('box')}>
            <div style={{ "backgroundPosition": "center", "overflow": "hidden", "maxWidth": "250px", "maxHeight": "200px"}}>
              <img src={person.photo} alt={person.first + " " + person.last + " Photo"}></img>
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
        <Menu />
        <div className={classNames('hero')}>
          <div className={classNames('hero-body')}>
            {this.organizers()}
          </div>
        </div>
        <Sponsors />
        <Footer />
      </section>
    );
  }
}

export default About;
