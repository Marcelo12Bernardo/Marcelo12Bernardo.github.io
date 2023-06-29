/* eslint-disable react/react-in-jsx-scope */
import Header from './Components/Header';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Skills from './Pages/Skills';
import Projetos from './Pages/Projetos';
import Contatos from './Pages/Contatos';

function App() {
    return (
        <main className='bg-backgb border border-red-600 w-custom2'>
            {/* <main className='bg-backgb border border-red-600 w-custom2 h-custom2'></main> */}
            <Header/>
            <Home/>
            <Sobre/>
            <Skills/>
            <Projetos/>
            <Contatos/>
        </main>
    );
}

export default App;
