import React, { useState } from 'react';

import fotoPerfil from '../Styless/imgs/fotoṔerfil.jpeg';
import fotoSeta from '../Styless/imgs/seta-removebg-preview.png';

function Sobre() {
    const [showSobre, setShowSobre] = useState(true);

    const toggleSections = () => {
        setShowSobre(!showSobre);
    };

    return (
        <div className='h-screen flex items-center justify-center border'>
            {showSobre ? (
                <div id='Sobre'>
                    <section className="flex space-x-4 items-center gap-20">
                        <img src={fotoPerfil} alt="Foto de perfil" className="h-80 w-80 rounded-xl" />
                        <section>
                            <h1 className="text-secondary text-4xl font-bold">Sobre Mim</h1>
                            <ul className="text-primary text-2xl font-bold mt-2">
                                <li>👩‍💻 - Desenvolvendo aplicações e interfaces desde 2019</li>
                                <li>🎓 - Formado em TI pelo IFF - Campos Campus Centro</li>
                                <li>🎓 - Cursando SI pelo IFF - Campos Campus Centro</li>
                                <li>💻 - Interesse em atuar como desenvolvedor Front End</li>
                                <li>🗣️ - Proativo e Comunicativo</li>
                                <li>📅 - 21 anos</li>
                                <li>📍 - Campos dos Goytacazes - RJ</li>
                            </ul>
                        </section>
                    </section>
                </div>
            ) : (
                <div id='Experiencia'>
                    <section className="flex space-x-4 items-center gap-20">
                        <img src={fotoPerfil} alt="Foto de perfil" className="h-80 w-80 rounded-xl" />
                        <section>
                            <h1 className="text-secondary text-4xl font-bold">Experiência</h1>
                            <ul className="text-primary text-2xl mt-2">
                                <li>
                                    <div className="flex items-center">
                                        <div>
                                            <h2 className="font-bold">Skill Labs</h2>
                                            <p>Desenvolvedor Front-End</p>
                                            <p>Período: Julho/2023 - Dezembro/2023</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mt-4">
                                    <div className="flex items-center">
                                        <div>
                                            <h2 className="font-bold">Instituto Federeal Fluminense</h2>
                                            <p>Desenvolvedor Mobile </p>
                                            <p>Período: Janeiro/2021 - Novembro/2021</p>
                                        </div>
                                    </div>
                                </li>
                                {/* Repita o formato acima para cada experiência */}
                            </ul>
                        </section>
                    </section>
                </div>
            )}
            <button onClick={toggleSections} className="ml-20">
                {/* {'>'}  */}
                <img src={fotoSeta} alt="Foto de perfil" className="h-12" />
            </button>
        </div>
    );
}


export default Sobre;
