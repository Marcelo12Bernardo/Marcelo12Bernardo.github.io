import React from "react";
import Header from "../Components/Header";
import Generic from "../Styless/imgs/genericImg.png"
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaEnvelope, FaSlack } from "react-icons/fa";

class Home extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <section>
          <section>
            <p>Ola pessoal</p>
            <h1>Eu sou um<br/> Dev Front End Jr </h1>
            <p>Sejam bem vindos ao meu Web Portifolio</p>
          </section>

          <section>
            <FaGithub/>
            <FaLinkedin/>
            <FaWhatsappSquare/>
            <FaEnvelope/>
            <FaSlack/>
          </section>
        </section>
        <section>
          <img width={200} src={Generic} alt="Imagem de um progamador"/>
        </section>
      </div>
    );
  }
}

export default Home;