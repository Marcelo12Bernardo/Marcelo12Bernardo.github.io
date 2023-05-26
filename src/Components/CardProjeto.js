import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

class CardProjeto extends React.Component {

  render() { 
    const { title, githubLink, previewLink, description, skills, image } = this.props;
    const skillsBadges = skills.map((skill) => `https://img.shields.io/badge/-${skill}-0D1117?style=for-the-badge&logo=${skill}`);
    return (
      <div className="bg-primary w-72 h-96 rounded-3xl">
        <asside className="flex gap-1 mt-3 pl-6 ">
          <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </asside>
        <section>
            <section className="flex gap-2 text-slate-100 mt-4 font-bold ">
                <h3 className=" pl-6 text-2xl">{title}</h3>
                <a href={githubLink} target="_blank" rel="noreferrer"><FaGithub className="hover:-mt-2 ml-2 text-1xl mt-2"/></a>
                <a href={previewLink} target="_blank" rel="noreferrer"><FaExternalLinkAlt className="hover:-mt-2 text-1xl mt-2"/></a>
            </section>
            <p className="text-zinc-400 ml-6 mt-1">{ description }</p>
            <section className="ml-6 flex gap-2 mt-6 mb-2">
              {
                skillsBadges.map((skill) => <img src={skill} alt=''/>)
              }
            </section>
            <img className="ml-4 mt-2 w-64 h-44 rounded-2xl"src={image} alt=""/> 
          </section>
      </div>
    );
  }
}
export default CardProjeto;