import React from "react";
import  "../Styless/Header.css";

class Header extends React.Component { 
  changeRout = ({ target }) => {
    const { name } = target;
    const { history } = this.props;
    history.push(`/${name}`);
  };

    render() {
      return (
        <header>
            <h1>Marcelo Bernardo</h1>
            <nav>
          <ul>
            <li>
              <a name="home" onClick={this.changeRout}>
                Home
              </a>
            </li>
            <li>
              <a name="sobre" onClick={this.changeRout}>
                Sobre
              </a>
            </li>
            <li>
              <a name="skills" onClick={this.changeRout}>
                Skills
              </a>
            </li>
            <li>
              <a name="projetos" onClick={this.changeRout}>
                Projetos
              </a>
            </li>
            <li>
              <a name="contatos" onClick={this.changeRout}>
                Contatos
              </a>
            </li>
          </ul>
        </nav>
        </header>
      );
    }
  }

export default Header;  