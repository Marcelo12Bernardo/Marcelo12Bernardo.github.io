import React from 'react';

function Header() {
    const text = '< Marcelo Bernardo />';
    return (
        <header className="flex justify-between bg-backgb font-bold pt-6 ml-16 mr-16">
            <h1 className="flex align-baseline text-primary text-4xl gap-2">
                <p>{text} </p>
            </h1>
            <nav>
                <ul className="flex gap-3 text-primary text-2xl mt-2">
                    <li><a href="#Home"> Home</a></li>
                    <li><a href="#Sobre"> Sobre</a></li>
                    <li><a href="#Skills"> Skills</a></li>
                    <li><a href="#Projetos"> Projetos</a></li>
                    <li><a href="#Contatos"> Contatos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

