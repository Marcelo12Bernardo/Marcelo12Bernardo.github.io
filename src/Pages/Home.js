import React from "react";
import Header from "../Components/Header";
import HomeDev from "../Styless/imgs/HomeDev.svg";

import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFileDownload } from "react-icons/fa";

class Home extends React.Component{
  render(){
    const { history } = this.props;
    return(
      <div>
        <Header history={history}/>
        <section className="flex justify-between ">
          <section className="font-bold mt-60 ml-40">
            <p className="text-primary  text-2xl">Ola pessoal</p>
            <div className="flex align-baseline text-secondary gap-2 font-bold">
              <h1 className="text-5xl">EU SOU UM</h1>
              <FaGithub className="mt-2 hover:mt-0 text-3xl"/>
              <FaLinkedin className="mt-2 hover:mt-0 text-3xl"/>
              <FaWhatsappSquare className="mt-2 hover:mt-0 text-3xl"/>
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