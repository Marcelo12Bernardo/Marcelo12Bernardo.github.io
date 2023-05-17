import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";
import Sobre from './Pages/Sobre';

function App() {
  return (
    <main id="defoult">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre" component={ Sobre } />
      </Switch>
    </main>
  );
}

export default App;
