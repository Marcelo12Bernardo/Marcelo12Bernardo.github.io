import React from 'react';
import CardProjeto from '../Components/CardProjeto';
import genericImg from '../Styless/imgs/genericImg.png';

function Projetos() {
    return (
        <div className='h-screen border border-red-600' id='Projetos'>
            <h1 className="text-secondary font-bold text-4xl ml-12 mt-16 mb-8">Projetos</h1>
            {/* Adicionar filtros por badgs(HTML, CSS, JS, REACT...) */}
            <div className="project-container max-h-contProjct overflow-y-auto grid grid-cols-4 place-items-center gap-8">
                <CardProjeto
                    title="Pixels art"
                    description="Projeto de pintar pixels"
                    skills={['HTML', 'CSS']}
                    image={genericImg}
                    githubLink="https://github.com/Marcelo12Bernardo"
                />
                
            </div>
        </div>
    );
}


export default Projetos;
