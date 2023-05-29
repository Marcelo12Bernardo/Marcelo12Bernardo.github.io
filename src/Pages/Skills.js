import React from "react";
import Header from "../Components/Header";
import { FaGithub, FaJsSquare, FaReact, FaGitAlt, FaCss3Alt, FaHtml5, FaLinux,
  FaJava,FaPython, FaPhp, FaDocker,FaBootstrap,FaNodeJs, FaAndroid, FaDatabase, } from "react-icons/fa";
import {SiEslint, SiTailwindcss } from "react-icons/si";

class Skills extends React.Component{
  render(){
    const { history } = this.props;
    return(
      <div>
        <Header history={history}/>
          <h1 className="text-primary text-6xl font-bold text-center mt-20">Minhas Techs</h1>
          <h1 className="text-secondary text-3xl font-bold text-center mt-24">Tecnologias de projetos anteriores</h1>
          <section className="flex gap-8 text-6xl justify-center text-primary mt-12">
            <FaJava/>
            <FaPython/>
            <FaPhp/>
            <FaDocker/>
            <FaBootstrap/>
            <FaNodeJs/>
            <FaAndroid/>
            <FaDatabase/>
          </section>
          <h1 className="text-secondary text-3xl font-bold text-center mt-20">Tecnologias utilizadas no dia a dia</h1>
          <section className="flex gap-8 text-6xl justify-center text-primary mt-12">
            <FaGithub/>
            <FaGitAlt/>
            <FaJsSquare/>
            <FaReact/>
            <SiTailwindcss/>
            <SiEslint/>
            <FaCss3Alt/>
            <FaHtml5/>
            <FaLinux/>
          </section>
      
      </div>
    );
  }
}

export default Skills;