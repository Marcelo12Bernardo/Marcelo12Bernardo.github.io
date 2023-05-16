import { Route, Switch } from 'react-router-dom';
import Home from "./Pages/Home";

function App() {
  return (
    <main id="defoult">
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
    </main>
  );
}

export default App;
