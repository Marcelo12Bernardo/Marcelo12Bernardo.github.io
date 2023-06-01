import React from 'react';
import Header from '../Components/Header';
import TimeLine from '../Components/TimeLine';
import fotoPerfil from '../Styless/imgs/fotoṔerfil.jpeg';

function Sobre({ history }) {
    return (
        <div>
            <Header history={history} />
            <section className="flex items-center mt-24 ml-72 mr-44 justify-between">
                <img src={fotoPerfil} alt="Foto de perfil" className="h-80 w-80 rounded-full" />
                <section className="ml-">
                    <h1 className="text-secondary text-5xl font-bold">Sobre Mim</h1>
                    <ul className="text-primary text-2xl font-bold mt-2">
                        <li>👩‍💻 - Desenvolvo aplicações e interfaces desde 2019</li>
                        <li>🎓 - Formado em TI pelo IFF - Campos Campus Centro</li>
                        <li>🎓 - Cursando SI pelo IFF - Campos Campus Centro</li>
                        <li>💻 - Interesse em atuar como desenvolvedor Front End</li>
                        <li>📅 - Tenho 20 anos</li>
                        <li>📍 - Sou de Campos dos Goytacazes - RJ</li>
                    </ul>
                </section>
            </section>
            <TimeLine />
        </div>
    );
}

export default Sobre;
