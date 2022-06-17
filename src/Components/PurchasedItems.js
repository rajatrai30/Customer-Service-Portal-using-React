import React from 'react';
import Products from './Products';
import Navigation from './Navigation';
import Footer from './Footer';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

class PurchasedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    document.body.style.backgroundImage = "none";
    axios.get('http://localhost:4000/products')
      .then((response) => this.setState({ products: response.data }))
      .catch(err => console.log(err))
  }

  render() {
    let items = [];

    this.state.products ? this.state.products.forEach((item, index) => {
      items.push(<div key={index} className="col col-md-4 col-lg-4">
        <Products pid={item.pdtCode} price={item.pdtPrice} name={item.pdtName} desc={item.pdtDescription} img={item.pdtImg} rating={item.avgFeedback} status={item.isDiscontinued} isReturned={item.isReturned} />
      </div>);
    }) : items.push(null)

    return (
      <div>
        <Navigation />
        <div className="container">
          <div className="row">
            {items.length > 0 ? items : null}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default PurchasedItems;
