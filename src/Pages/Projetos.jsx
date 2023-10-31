import React from 'react';
import CardProjeto from '../Components/CardProjeto';
import genericImg from '../Styless/imgs/PixelsArt.png';

function Projetos() {
    return (
        <div className='h-screen border' id='Projetos'>
            <h1 className="text-secondary font-bold text-4xl ml-12 mt-16 mb-8">Projetos</h1>
            {/* Adicionar filtros por badgs(HTML, CSS, JS, REACT...) */}
            <div className="project-container max-h-contProjct overflow-y-auto grid grid-cols-4 place-items-center gap-8">
                <CardProjeto
                    title="Pixels art"
                    description="Utilize pixeis para ciar artes"
                    skills={['HTML', 'CSS', 'JS']}
                    image={genericImg}
                    githubLink="https://github.com/Marcelo12Bernardo/Pixels-Art"
                    previewLink="https://pixels-art-psi.vercel.app/"
                />
                
            </div>
        </div>
    );
}


export default Projetos;
