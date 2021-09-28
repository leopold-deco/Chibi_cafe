/* eslint-disable react-hooks/exhaustive-deps */
import './App.scss';
import AppHeader from '../AppHeader';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';
import Cart from '../Cart';
import Delivery from '../Delivery';
import Contact from '../Contact';
import Menu from '../Menu';
import Account from '../Account';
import Store from '../Store';
import Footer from '../Footer';
import Error from '../error';
import Custom from "../Store/Custom";
import ProductsPage from "../Store/ProductsPage";
import Informations from '../Account/Informations';
import Orders from '../Account/Orders';



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
          <Account />
        </Route>
        <Route path="/compte/informations" exact>
          <Informations />
        </Route>
        <Route path="/compte/commandes" exact>
          <Orders />
        </Route>
        <Route path="/panier" exact>
          <Cart />
        </Route>
        <Route path="/panier/livraison" exact>
          <Delivery />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/boutique/:slug" exact>
          <ProductsPage />
        </Route>
        <Route path="/boutique/custom" exact>
          <Custom />
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