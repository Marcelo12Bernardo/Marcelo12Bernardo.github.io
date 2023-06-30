import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa';
import msg from '../Styless/imgs/msg2.png';

function Contatos() {
    return (
        <div className='h-custom2 w-custom2 border border-red-600' id='Contatos'>
            <div className="mt-custom text-secondary text-4xl font-bold text-center">Entre em contato comigo</div>
            <p className="mt-2 text-primary text-2xl font-bold text-center mb-0">Para mais informações</p>
            <section className="ml-36 mb-20">
                <img src={msg} alt="Icone de aviao" className="ml-96 w-96" />
            </section>

            <section className="grid grid-cols-5 justify-items-center font-bold p-2 mb-0">
                <a href="https://github.com/Marcelo12Bernardo" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaGithub className="text-5xl mb-0 ml-4" /> Github
                </a>
                <a href="https://www.linkedin.com/in/marcelo-bernardo-p/" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaLinkedin className="text-5xl mb-0 ml-6" /> Linkedin
                </a>
                <a href="https://api.whatsapp.com/send?phone=5522998376689&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portifolio%21" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaWhatsappSquare className="text-5xl mb-0 ml-8" /> Whatsapp
                </a>
                <a href="mailto:bernardomarcelo33@gmail.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaEnvelope className="text-5xl mb-0 ml-4" /> G-mail
                </a>
                <a href="tel:+5522998376689" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:-mt-3">
                    <FaPhoneSquareAlt className="text-5xl mb-0 ml-6" /> Telefone
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


export default Contatos;
