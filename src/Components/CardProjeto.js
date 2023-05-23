import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

class CardProjeto extends React.Component {

//   constructor() {
//     super()
//     this.state = {
//       wasMouseOver: false
//     }
//     this.toggleBadges = this.toggleBadges.bind(this);
//   }

//   toggleBadges(event) {
//     const toolsBadgeContainer = event.currentTarget.firstChild.firstChild;
  
//     // Garante que o código só seja rodado caso exista algum badge no container.
//     if (toolsBadgeContainer.innerHTML) {
//       if (!this.state.wasMouseOver) {
//         toolsBadgeContainer.style.opacity = '1';
//         this.setState({ wasMouseOver: true })
//       } else {
//         toolsBadgeContainer.style.opacity = '0';
//         this.setState({ wasMouseOver: false })
//       }
//     }
//   }

  render() { 
    const { title, githubLink, previewLink, description, skills, image } = this.props;
    const skillsBadges = skills.map((skill) => `https://img.shields.io/badge/-${skill}-0D1117?style=for-the-badge&logo=${skill}`);
    console.log(skillsBadges);
    
    // https://img.shields.io/badge/-JavaScript-0D1117?style=for-the-badge&logo=javascript
    return (
      <div>
        <section>
            <section><h3>{title}</h3></section>
            <section>
                <a href={githubLink} target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href={previewLink} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
            </section>
        </section>
        <section> <p>{ description }</p></section>
       <section>
        {
            skillsBadges.map((skill) => <img
            src={skill}
            alt=''></img>)
        }
       </section>
        <img src={image} alt="" /> 
      </div>
    );
  }
}
 
export default CardProjeto;