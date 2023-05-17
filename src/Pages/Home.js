import React from "react";
import Header from "../Components/Header";
import Generic from "../Styless/imgs/genericImg.png";
import "../Styless/Home.css";
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaEnvelope, FaSlack } from "react-icons/fa";

class Home extends React.Component{
  render(){
    const { history } = this.props;
    return(
      <div>
        <Header history={history}/>
        <section className="container">
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
        <section className="container">
          <img  src={Generic} alt="Imagem de um progamador"/>
        </section>
      </div>
    );
  }
}

export default Home;