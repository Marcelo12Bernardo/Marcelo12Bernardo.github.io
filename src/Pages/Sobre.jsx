import React from 'react';


import fotoPerfil from '../Styless/imgs/fotoṔerfil.jpeg';

function Sobre() {
    return (
        <div className='h-screen border border-red-600' id='Sobre'>
            <section className="flex justify-center items-center gap-16">
                <img src={fotoPerfil} alt="Foto de perfil" className="h-80 w-80 rounded-xl" />
                <section>
                    <h1 className="text-secondary text-4xl font-bold">Sobre Mim</h1>
                    <ul className="text-primary text-2xl font-bold mt-2">
                        <li>👩‍💻 - Desenvolvendo aplicações e interfaces desde 2019</li>
                        <li>🎓 - Formado em TI pelo IFF - Campos Campus Centro</li>
                        <li>🎓 - Cursando SI pelo IFF - Campos Campus Centro</li>
                        <li>💻 - Interesse em atuar como desenvolvedor Front End</li>
                        <li>🗣️ - Proativo e Comunucativo</li>
                        <li>📅 - 20 anos</li>
                        <li>📍 - Campos dos Goytacazes - RJ</li>
                    </ul>
                </section>
            </section>
            {/* <TimeLine /> */}
        </div>

    );
}


export default Sobre;
