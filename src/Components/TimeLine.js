import React from 'react';

function TimeLine() {
    return (
        <section className="mt-24 p-2">
            <div className="bg-primary flex w-full h-3 items-center gap-64">
                <div className="bg-primary w-8 h-8 rounded-full flex items-center ml-6">
                    <div className="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                </div>

                <div className="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div className="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                </div>

                <div className="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div className="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                </div>

                <div className="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div className="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                </div>

                <div className="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div className="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                </div> 

                <div className="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div className="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                </div>

                <div className="bg-primary w-8 h-8 rounded-full flex items-center">
                    <div className="bg-secondary w-4 h-4 rounded-full ml-2"></div>
                </div>

            </div>
            <div className="flex w-full items-center gap-16 mt-1 h-60 font-bold">
                <section className="w-56 ml-6">
                    <h1 className="text-primary">2018</h1>
                    <p className="text-secondary mt-1">
            Inicio do curso Técnico de TI pelo IFF, onde comecei a dar meus
            primeiros passos no mundo da programação e tive o primeiro contato
            com diversas tecnologias
                    </p>
                </section>

                <section className="w-56">
                    <h1 className="text-primary">2019</h1>
                    <p className="text-secondary mt-1">Durante o CITI 2019, participei de algumas oficinas e palestras voltadas a desenvolvimento, 
                    onde aprendi mais sobre Git/GitHub e Python</p>
                </section>

                <section className="w-56">
                    <h1 className="text-primary mt-6">2020</h1>
                    <p className="text-secondary mt-1">Fiz dois cursos de extensão EAD pelo IFRS. Um de lógica de programação intermediaria e o outro de lógica avançada. Também participei do hackthon da Space Apps</p>
                </section>

                <section className="w-56">
                    <h1 className="text-primary">2021</h1>
                    <p className="text-secondary mt-1">Conclui o ensino médio e me formei no curso de TI. Logo após isso iniciei o Bacharel em Sistemas da Informação pelo Instituto Fluminense Campos Campus Centro</p>
                </section>

                <section className="w-56">
                    <h1 className="text-primary">2023</h1>
                    <p className="text-secondary mt-1">Desenvolvendo projetos pessoais com TDD e aplicando outras metodologias. Em paralelo
                     busco uma oportunidade para atuar como Dev Jr Front End</p>
                </section>
            </div>
        </section>
    );
}

export default TimeLine;
