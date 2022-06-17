import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import PurchasedItems from "./Components/PurchasedItems";
import ProductDetails from "./Components/ProductDetails";
import { Provider } from 'react-redux';
import { initStore } from './Stores/Store';

const store = initStore();

class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <BrowserRouter>
              <React.Fragment>
                  <Route path='/' component={LoginForm} exact />
                  <Route path='/purchasedItems' component={PurchasedItems} />
                  <Route path='/productDetails/:id' component={ProductDetails} />
              </React.Fragment>
          </BrowserRouter>
        </Provider>
      )
    }
}

export default App;