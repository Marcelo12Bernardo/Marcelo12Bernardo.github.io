import React from 'react';
import PropTypes from 'prop-types';

function Header({ history }) {
    const changeRoute = ({ target }) => {
        const { name } = target;
        history.push(`/${name}`);
    };

    const text = '< Marcelo Bernardo />';

    return (
        <header className="flex justify-between bg-backgb font-bold pt-6 ml-16 mr-16">
            <h1 className="flex align-baseline text-primary text-4xl gap-2">
                <p>{text} </p>
            </h1>
            <nav>
                <ul className="flex gap-3 text-primary text-2xl mt-2">
                    <li><button name="home" onClick={changeRoute}> Home</button></li>
                    <li><button name="sobre" onClick={changeRoute}> Sobre</button></li>
                    <li><button name="skills" onClick={changeRoute}> Skills</button></li>
                    <li><button name="projetos" onClick={changeRoute}> Projetos</button></li>
                    <li><button name="contatos" onClick={changeRoute}> Contatos</button></li>
                </ul>
            </nav>
        </header>
    );
}

Header.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

export default Header;

