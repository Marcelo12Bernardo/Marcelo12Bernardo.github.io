import React from 'react';
import Header from '../Components/Header';
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa';
import msg from '../Styless/imgs/msg2.png';
import PropTypes from 'prop-types';

function Contatos({ history }) {
    return (
        <div>
            <Header history={history} />
            <div className="mt-16 text-secondary text-6xl font-bold text-center">Entre em contato comigo</div>
            <p className="mt-2 text-primary text-3xl font-bold text-center mb-0">Para mais informações</p>
            <section className="ml-96 mb-32 mt-12">
                <img src={msg} alt="Icone de aviao" className="ml-96 w-96" />
            </section>

            <section className="grid grid-cols-5 justify-items-center font-bold p-2">
                <a href="https://github.com/Marcelo12Bernardo" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaGithub className="text-6xl mb-0 ml-1" /> Github
                </a>
                <a href="https://www.linkedin.com/in/marcelo-bernardo-p/" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaLinkedin className="text-6xl mb-0 ml-4" /> Linkedin
                </a>
                <a href="https://api.whatsapp.com/send?phone=5522998376689&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portifolio%21" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaWhatsappSquare className="text-6xl mb-0 ml-8" /> Whatsapp
                </a>
                <a href="mailto:bernardomarcelo33@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaEnvelope className="text-6xl mb-0" /> Gmail
                </a>
                <a href="tel:+5522998376689" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaPhoneSquareAlt className="text-6xl mb-0 ml-6" /> Telefone
                </a>

                <p className="text-secondary text-1xl">github.com/Marcelo12Bernardo</p>
                <p className="text-secondary text-1xl">linkedin.com/in/marcelo-bernardo-p/</p>
                <p className="text-secondary text-1xl">(22) 99837-6689</p>
                <p className="text-secondary text-1xl">bernardomarcelo33@gmail.com</p>
                <p className="text-secondary text-1xl">+5522998376689</p>
            </section>
        </div>
    );
}

Contatos.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default Contatos;
