import React from "react";
import Header from "../Components/Header";
import HomeDev from "../Styless/imgs/HomeDev.svg";

import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFileDownload } from "react-icons/fa";

class Home extends React.Component{
  render(){
    const { history } = this.props;
    return(
      <div className="overflow-hidden">
        <Header history={history}/>
        <section className="flex justify-between ">
          <section className="font-bold mt-60 ml-40">
            <p className="text-primary  text-2xl">Ola pessoal</p>
            <div className="flex align-baseline text-secondary gap-2 font-bold">
              <h1 className="text-5xl">EU SOU UM</h1>
              <a href="https://github.com/Marcelo12Bernardo" target="_blanck"><FaGithub className="mt-2 hover:mt-0 text-3xl"/></a>
              <a href="https://www.linkedin.com/in/marcelo-bernardo-p/" target="_blanck"><FaLinkedin className="mt-2 hover:mt-0 text-3xl"/></a>
              <a href="https://api.whatsapp.com/send?phone=5522998376689&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portifolio%21" target="_blanck"><FaWhatsappSquare className="mt-2 hover:mt-0 text-3xl"/></a>
            </div>
            <h1 className="text-secondary  text-5xl">FRONT-END DEVELOPER</h1>
            <p className="text-primary  text-2xl ">Sejam bem vindos ao meu Web Portifolio</p>
            <button  onClick={this.changeRout} className="h-14 w-52 flex rounded-3xl gap-4 mt-28 bg-secondary text-backgb">
              <p className="text-2xl ml-6 mt-2">Baixar CV</p>
              <FaFileDownload className="text-2xl mt-3"/>
            </button>
          </section>
          <img  src={HomeDev} alt="Imagem de um progamador" className="mt-24 mr-40" />
        </section>
      </div>
    );
  }
}

export default Home;