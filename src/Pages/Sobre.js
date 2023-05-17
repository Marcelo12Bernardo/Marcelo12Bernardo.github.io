import React from "react";
import Header from "../Components/Header";
import Generic from "../Styless/imgs/genericImg.png";

class Sobre extends React.Component {
    
    render(){
        const { history } = this.props;
        return(
          <div>
            <Header history={history}/>
            <section className="container">
                <section>
                    <img  src={Generic} alt="Imagem de um progamador"/>
                </section>
                <section>
                    <section>
                        <h1>Resumo Sobre Mim</h1>
                        <p>
                            Me chamo Marcelo Bernardo Prudêncio<br/>
                            Tenho 20 anos<br/> 
                            Sou de Campos dos Goytacaszes - RJ<br/>
                            Quatro anos desenvolvendo aplicaçoes <br/>
                            Formado em TI pelo IFF - Campos Campus Centro<br/>
                            Em busca de uma oportunidade para atuar como programador<br/>
                        </p>
                    </section>
                    <section>
                        <h1>Minha Jornada até aqui</h1>
                        <p>Ainda muito novo tive meu primeiro contato com tecnologia, e acabei me apaixoando pelo ramo, principalmente pelos assuntos
                            realcionados a desenvolvimento e games. Além dessa paixao, sempre tive curiosidade sobre como as coisas funcionavam
                            "por trás dos bastidores" por isso dei início ao curso de TI no Instituto Federal da minha cidade, 
                            durante minha formação tive contato com algumas linguagens e com o desenvolvimento Web, 
                            liderei uma equipe na olimpíada brasileira de rebótica(OBR) onde pude aplicar minhas habilidades de 
                            liderança, comunicação e resiliência, participei de mini-cursos e no fim decidi que queria me tornar um 
                            desenvolvedor</p>
                    </section>
                </section>
                
            </section>
          </div>
            
        );
    }
}
export default Sobre;