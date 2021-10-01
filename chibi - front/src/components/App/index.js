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
import Confirmation from '../Confirmation';
import Error from '../error';
import Custom from "../Store/Custom";
import ProductsPage from "../Store/ProductsPage";
import Informations from '../Account/Informations';
import Orders from '../Account/Orders';
<<<<<<< HEAD
import StripeContainer from '../StripeContainer';
=======
import CheckoutForm from '../CheckoutForm';
import Favorites from '../Favorites';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useSelector } from 'react-redux';

const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');
>>>>>>> a5c6acde0dc8ff2ff0f8e371c5f1c77d7e1278dd

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
        <Route path="/compte/favoris" exact>
          <Favorites />
        </Route>
        <Route path="/compte/commandes" exact>
          <Orders />
        </Route>
        <Route path="/panier" exact>
          <Cart />
        </Route>
        <Route path="/livraison" exact>
          <Delivery />
        </Route>
        <Route path="/paiement" exact>
          <StripeContainer />
        </Route>
        <Route path="/confirmation" exact>
          <Confirmation />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/boutique/:slug" exact>
          <ProductsPage />
        </Route>
        <Route path="/boutique/formulaire/custom" exact>
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