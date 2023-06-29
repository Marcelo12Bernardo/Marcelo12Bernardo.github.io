import React from 'react';
import HomeDev from '../Styless/imgs/HomeDev.svg';
import { FaGithub, FaLinkedin, FaWhatsappSquare, FaFileDownload } from 'react-icons/fa';
import Header from '../Components/Header';

function Home() {
    return (
        <div className='border border-green-600 h-custom2' id='Home'>
            <Header/>
            <section className="flex justify-between">
                <section className="font-bold mt-36 ml-20">
                    <p className="text-primary text-2xl -mb-2">Olá pessoal</p>
                    <div className="flex align-baseline text-secondary gap-2 font-bold">
                        <h1 className="text-5xl">EU SOU UM</h1>
                        <a href="https://github.com/Marcelo12Bernardo" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="mt-3 hover:mt-0 text-3xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/marcelo-bernardo-p/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="mt-3 hover:mt-0 text-3xl" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=5522998376689&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20portifolio%21" target="_blank" rel="noopener noreferrer">
                            <FaWhatsappSquare className="mt-3 hover:mt-0 text-3xl" />
                        </a>
                    </div>
                    <h1 className="text-secondary text-5xl -mt-4">FRONT-END DEVELOPER</h1>
                    <p className="text-primary text-2xl -mt-2">Sejam bem-vindos ao meu Web Portfólio</p>
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

export default Home;
