import React from "react";
import Header from "../Components/Header";
import { FaGithub, FaJsSquare, FaReact, FaGitAlt, FaCss3Alt, FaHtml5, FaLinux,
  FaJava,FaPython, FaPhp, FaDocker,FaBootstrap,FaNodeJs, FaAndroid, FaDatabase, } from "react-icons/fa";

class Skills extends React.Component{
  render(){
    const { history } = this.props;
    return(
      <div>
        <Header history={history}/>
        <section>
          <h1>Minhas Techs</h1>
          <section>
            <h1>Tecnologias<br/> Ja utilizadas</h1>
            <FaJava/>
            <FaPython/>
            <FaPhp/>
            <FaDocker/>
            <FaBootstrap/>
            <FaNodeJs/>
            <FaAndroid/>
            <FaDatabase/>
          </section>
          <section>
            <h1>Tecnologias<br/>Utilizadas no dia a dia</h1>
            <FaGithub/>
            <FaJsSquare/>
            <FaReact/>
            <FaGitAlt/>
            <FaCss3Alt/>
            <FaHtml5/>
            <FaLinux/>
          </section>
        </section>
      </div>
    );
  }
}

export default Skills;