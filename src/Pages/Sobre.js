import React from "react";
import Header from "../Components/Header";
import perfil from "../Styless/imgs/perfil.jpeg";

class Sobre extends React.Component {
    render(){
        const { history } = this.props;
        return(
          <div>
            <Header history={history}/>
            <section className="flex items-center mt-24 ml-72 mr-44 justify-between">
                <img src={perfil} alt="Foto de perfil" className="h-80 w-80 rounded-full" />
                <section className="ml-">
                    <h1 className="text-secondary  text-5xl font-bold">Sobre Mim</h1>
                    <ul className="text-primary  text-2xl font-bold mt-2">
                        <li>👩‍💻 - Desenvolvo aplicaçoes e interfaces desde 2019</li>
                        <li>🎓 - Formado em TI pelo IFF - Campos Campus Centro</li>
                        <li>🎓 - Cursando SI pelo IFF - Campos Campus Centro</li>
                        <li>💻 - Interesse em atuar como desenvolvedor Front End</li>
                        <li>📅 - Tenho 20 anos</li>
                        <li>📍 - Sou de Campos dos Goytacaszes - RJ</li>
                    </ul>
                </section>
                {/* <section>
                <h1>Minha Jornada até aqui</h1>
                <p>Ainda muito novo tive meu primeiro contato com tecnologia, e acabei me apaixoando pelo ramo, principalmente pelos assuntos realcionados a desenvolvimento e games. Além dessa paixao, sempre tive curiosidade sobre como as coisas funcionavam "por trás dos bastidores" por isso dei início ao curso de TI no Instituto Federal da minha cidade, durante minha formação tive contato com algumas linguagens e com o desenvolvimento Web, liderei uma equipe na olimpíada brasileira de rebótica(OBR) onde pude aplicar minhas habilidades de liderança, comunicação e resiliência, participei de mini-cursos e no fim decidi que queria me tornar um desenvolvedor</p>
                </section> */}
                {/* Adcionar linha do tempo com trajetoria */}
            </section>
          </div>
    );
    }
}
export default Sobre;