import './App.css';
import AppHeader from '../AppHeader';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;