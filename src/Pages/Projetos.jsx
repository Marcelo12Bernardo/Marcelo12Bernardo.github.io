import React from 'react';
import Header from '../Components/Header';
import CardProjeto from '../Components/CardProjeto';
import genericImg from '../Styless/imgs/genericImg.png';
import PropTypes from 'prop-types';

function Projetos({ history }) {
    return (
        <div>
            <Header history={history} />
            <h1 className="text-secondary font-bold text-6xl ml-12 mt-28 mb-12">Projetos</h1>
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

Projetos.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default Projetos;
