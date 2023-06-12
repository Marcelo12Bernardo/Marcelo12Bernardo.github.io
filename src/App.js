/* eslint-disable react/react-in-jsx-scope */
import { Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Skills from './Pages/Skills';
import Projetos from './Pages/Projetos';
import Contatos from './Pages/Contatos';

function App() {
    return (
        <main className='bg-backgb border border-red-600'>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/home" component={ Home } />
                <Route exact path="/sobre" component={ Sobre } />
                <Route exact path="/skills" component={ Skills } />
                <Route exact path="/projetos" component={ Projetos } />
                <Route exact path="/contatos" component={ Contatos } />
            </Switch>
        </main>
    );
}

export default App;
