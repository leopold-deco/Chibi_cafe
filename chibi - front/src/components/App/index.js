import './App.scss';
import AppHeader from '../AppHeader';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Cart from '../Cart';
import Contact from '../Contact';
import Menu from '../Menu';
import Profil from '../Profil';
import Store from '../Store';
import Footer from '../Footer';
import Error from '../error';
import Custom from "../Store/Custom";
import Decorated from "../Store/Decorated";
import Message from "../Store/Message";
import Paint from "../Store/Paint";


function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/menu" exact>
          <Menu />
        </Route>
        <Route path="/boutique" exact>
          <Store />
        </Route>
        <Route path="/compte" exact>
          <Profil />
        </Route>
        <Route path="/panier" exact>
          <Cart />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/boutique/decores" exact>
          <Decorated />
        </Route>
        <Route path="/boutique/custom" exact>
          <Custom />
        </Route>
        <Route path="/boutique/message" exact>
          <Message />
        </Route>
        <Route path="/boutique/peindre" exact>
          <Paint />
        </Route>
        <Route path="/" >
          <Error />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;