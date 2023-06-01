import React from 'react';
import Header from '../Components/Header';
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
            <h1 className="text-primary text-6xl font-bold text-center mt-40">Minhas Techs</h1>
            <h1 className="text-secondary text-3xl font-bold text-center mt-44">
        Tecnologias de projetos anteriores
            </h1>
            <section className="flex gap-8 text-6xl justify-center text-primary mt-11">
                <FaJava />
                <FaPython />
                <FaPhp />
                <FaDocker />
                <FaBootstrap />
                <FaNodeJs />
                <FaAndroid />
                <FaDatabase />
            </section>
            <h1 className="text-secondary text-3xl font-bold text-center mt-20">
        Tecnologias utilizadas no dia a dia
            </h1>
            <section className="flex gap-8 text-6xl justify-center text-primary mt-12 p-3">
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

export default Skills;
