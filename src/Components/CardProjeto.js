import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import PropTypes from 'prop-types';

function ProjectCard(props) {
    const { title, githubLink, previewLink, description, skills, image } = props;
    const skillsBadges = skills.map((skill) => `https://img.shields.io/badge/-${skill}-0D1117?style=for-the-badge&logo=${skill}`);

    return (
        <div className="bg-primary w-60 h-80 rounded-3xl">
            <aside className="flex gap-1 mt-3 pl-6">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </aside>
            <section>
                <section className="flex gap-2 text-slate-100 mt-2 font-bold">
                    <h3 className="pl-6 text-xl">{title}</h3>
                    <a href={githubLink} target="_blank" rel="noreferrer">
                        <FaGithub className="hover:-mt-0 ml-2 text-1xl mt-2" />
                    </a>
                    <a href={previewLink} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt className="hover:-mt-0 text-1xl mt-2" />
                    </a>
                </section>
                <p className="text-zinc-400 ml-6 mt-1">{description}</p>
                <section className="ml-6 flex gap-2 mt-6 mb-2">
                    {skillsBadges.map((skill) => (
                        <img key={skill} src={skill} alt="" />
                    ))}
                </section>
                <img className="ml-4 mt-2 w-52 h-32 rounded-2xl" src={image} alt="" />
            </section>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    githubLink: PropTypes.string,
    previewLink: PropTypes.string,
    description: PropTypes.string,
    skills: PropTypes.string,
    image: PropTypes.string, 
    map: PropTypes.func,
}.isRequired;
  
export default ProjectCard;
