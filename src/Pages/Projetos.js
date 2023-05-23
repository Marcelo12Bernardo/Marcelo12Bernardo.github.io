import React from "react";
import Header from "../Components/Header";
import CardProjeto from "../Components/CardProjeto";
import genericImg from "../Styless/imgs/genericImg.png";

class Projetos extends React.Component{
  render(){
    const { history } = this.props;
    return(
      <div>
        <Header history={history}/>
        <section>
            <section><h1>Trabalhos e Projetos</h1></section>
            <section><button>Fillter 1</button><button>Fillter 2</button><button>Fillter 3</button></section>
        </section>
        <section>
            <CardProjeto
            title="Pixels art"
            description="Projeto de pintar pixels"
            skills={["html", "CSS"]}
            image={genericImg}
            />
        </section>
      </div>
    );
  }
}

export default Projetos;