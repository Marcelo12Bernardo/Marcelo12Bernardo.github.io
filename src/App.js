/* eslint-disable react/react-in-jsx-scope */
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Skills from './Pages/Skills';
import Projetos from './Pages/Projetos';
import Contatos from './Pages/Contatos';

function App() {
    return (
        <main className='bg-backgb'>
            {/* <main className='bg-backgb border border-red-600 w-custom2 h-custom2'></main> */}
            <Home/>
            <Sobre/>
            <Skills/>
            <Projetos/>
            <Contatos/>
        </main>
    );
}

export default App;
