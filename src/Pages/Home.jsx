import React from 'react';
import Header from '../Components/Header';
import HomeDev from '../Styless/imgs/HomeDev.svg';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFileDownload } from 'react-icons/fa';

function Home({ history }) {
    return (
        <div>
            <Header history={history} />
            <section className="flex justify-between">
                <section className="font-bold mt-32 ml-20">
                    <p className="text-primary text-2xl">Olá pessoal</p>
                    <div className="flex align-baseline text-secondary gap-2 font-bold">
                        <h1 className="text-5xl">EU SOU UM</h1>
                        <a href="https://github.com/Marcelo12Bernardo" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="mt-2 hover:mt-0 text-3xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/marcelo-bernardo-p/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="mt-2 hover:mt-0 text-3xl" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5522998376689&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portifolio%21" target="_blank" rel="noopener noreferrer">
                            <FaWhatsappSquare className="mt-2 hover:mt-0 text-3xl" />
                        </a>
                    </div>
                    <h1 className="text-secondary text-5xl">FRONT-END DEVELOPER</h1>
                    <p className="text-primary text-2xl">Sejam bem-vindos ao meu Web Portfólio</p>
                    <a href="https://www.idrive.com/idrive/sh/sh?k=p8j8t3p5p1" target="_blank" rel="noopener noreferrer" className="h-14 w-52 flex rounded-3xl gap-4 mt-12 bg-secondary text-backgb">
                        <p className="text-2xl mt-2 ml-6">Baixar CV</p>
                        <FaFileDownload className="text-2xl mt-3" />
                    </a>
                </section>
                <img src={HomeDev} alt="Imagem de um programador" className="mt-12 mr-20 h-custom w-custom" />
            </section>
        </div>
    );
}

Home.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default Home;
