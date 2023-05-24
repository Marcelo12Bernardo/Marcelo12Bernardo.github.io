import React from "react";
import { FaCode } from "react-icons/fa";

class Header extends React.Component { 
  changeRout = ({ target }) => {
    const { name } = target;
    const { history } = this.props;
    history.push(`/${name}`);
  };

    render() {
      return (
        <header className="flex justify-between bg-backgb font-bold mt-4 ml-40 mr-40">
          <h1 className="flex  align-baseline text-primary text-4xl gap-2" >
          <FaCode color="#445964"/>
            Marcelo Bernardo
          </h1>
            
          <nav >
          <ul className="flex gap-3 text-primary text-2xl mt-2">
            <li className="hover:border-b-2">
              <button name="home" onClick={this.changeRout}>
                Home
              </button>
            </li>
            <li className="hover:border-b-2">
              <button name="sobre" onClick={this.changeRout}>
                Sobre
              </button>
            </li>
            <li className="hover:border-b-2">
              <button name="skills" onClick={this.changeRout}>
                Skills
              </button>
            </li>
            <li className="hover:border-b-2">
              <button name="projetos" onClick={this.changeRout}>
                Projetos
              </button>
            </li>
            <li className="hover:border-b-2">
              <button name="contatos" onClick={this.changeRout}>
                Contatos
              </button>
            </li>
          </ul>
        </nav>
        </header>
      );
    }
  }

export default Header;  