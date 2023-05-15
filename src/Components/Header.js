import React from "react";

class Header extends React.Component {  
    render() {
      return (
        <header>
            <h1>Marcelo Bernardo</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contatos">Contatos</a></li>
                </ul>
            </nav>
        </header>
      );
    }
  }
export default Header;  