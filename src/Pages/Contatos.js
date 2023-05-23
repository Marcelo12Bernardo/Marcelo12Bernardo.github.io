import React from "react";
import Header from "../Components/Header";
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaEnvelope, FaSlack, FaPhoneSquareAlt } from "react-icons/fa";
class Contatos extends React.Component{
  render(){
    const { history } = this.props;
    return(
      <div>
        <Header history={history}/>
        <section>
            <h1>Entre em contato comigo!</h1>
            <section>
            <section>
            <a href="https://github.com/Marcelo12Bernardo" target="_blanck"><FaGithub/> FaGithub</a>
            <a href="https://www.linkedin.com/in/marcelo-bernardo-p/" target="_blanck"><FaLinkedin/> Linkedin</a>
            <a href="https://api.whatsapp.com/send?phone=5522998376689&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portifolio%21" target="_blanck"><FaWhatsappSquare/> Whatsapp</a>
            <a href="malito:bernardomarcelo33@gmail.com" target="_blanck"><FaEnvelope/> Gmail</a>
            <a href="null" target="_blanck"><FaSlack/> Slack</a>
            <a href="tel:+5522998376689" target="_blanck"> <FaPhoneSquareAlt/>Telefone</a>
          </section>
            </section>
            <section>

            </section>
        </section> 
      </div>
    );
  }
}

export default Contatos;