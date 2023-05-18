import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Sobre from './Pages/Sobre';
import Skills from './Pages/Skills';

function App() {
  return (
    <main id="defoult">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/sobre" component={ Sobre } />
        <Route exact path="/skills" component={ Skills } />
      </Switch>
    </main>
  );
}

export default App;
