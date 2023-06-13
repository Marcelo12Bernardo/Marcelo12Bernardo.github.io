import React from 'react';
import Header from '../Components/Header';
import PropTypes from 'prop-types';
import {
    FaGithub,
    FaJsSquare,
    FaReact,
    FaGitAlt,
    FaCss3Alt,
    FaHtml5,
    FaLinux,
    FaJava,
    FaPython,
    FaPhp,
    FaDocker,
    FaBootstrap,
    FaNodeJs,
    FaAndroid,
    FaDatabase,
} from 'react-icons/fa';
import { SiEslint, SiTailwindcss } from 'react-icons/si';

function Skills({ history }) {
    return (
        <div>
            <Header history={history} />
            <h1 className="text-primary text-5xl font-bold text-center mt-10 mb-28">Minhas Techs</h1>
            <h1 className="text-secondary text-2xl font-bold text-center mt-20">
        Tecnologias de projetos anteriores
            </h1>
            <section className="flex gap-8 text-5xl justify-center text-primary mt-11">
                <FaJava />
                <FaPython />
                <FaPhp />
                <FaDocker />
                <FaBootstrap />
                <FaNodeJs />
                <FaAndroid />
                <FaDatabase />
            </section>
            <h1 className="text-secondary text-2xl font-bold text-center mt-12">
        Tecnologias utilizadas no dia a dia
            </h1>
            <section className="flex gap-8 text-5xl justify-center text-primary mt-11">
                <FaGithub />
                <FaGitAlt />
                <FaJsSquare />
                <FaReact />
                <SiTailwindcss />
                <SiEslint />
                <FaCss3Alt />
                <FaHtml5 />
                <FaLinux />
            </section>
        </div>
    );
}

Skills.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};
export default Skills;
