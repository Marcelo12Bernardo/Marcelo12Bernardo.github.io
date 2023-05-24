import React from "react";
import Header from "../Components/Header";
import Generic from "../Styless/imgs/genericImg.png";
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaEnvelope, FaSlack } from "react-icons/fa";

class Home extends React.Component{
  render(){
    const { history } = this.props;
    return(
      <div>
        <Header history={history}/>
        <section className="flex justify-between">
          <section>
            <p className="text-primary">Ola pessoal</p>
            <h1 className="text-secondary bold">EU SOU UM<br/>FRONT-END DEVELOPER</h1>
            <p className="text-primary">Sejam bem vindos ao meu Web Portifolio</p>
            <section>
              <FaGithub/>
              <FaLinkedin/>
              <FaWhatsappSquare/>
              <FaEnvelope/>
              <FaSlack/>
            </section>
          </section>
          <img  src={Generic} alt="Imagem de um progamador" />
          {/* text-9xl */}
        </section>
      </div>
    );
  }
}

export default Home;