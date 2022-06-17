import React from 'react';
import Rater from './Rater';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style.css';

class Product extends React.Component {
  render() {
    let items;
    if (this.props.features !== undefined) {

      items = this.props.features.split(',').map(function (feature, index) {
        return <li key={index}>{feature}</li>
      })
    }
    return (
      <div className="thumbnail">
        <div className="row>">
          <div className="col-sm-6">
            <img src={this.props.img} alt="product" style={{ "width": "100%" }} className={"img img-rounded img-responsive"} />
          </div>
          <div className="col-sm-6">
            <div className={"caption"} >
              <Link to={`/productDetails/${this.props.pid}`}><h3>{this.props.name}</h3></Link>
              <h4><span style={{ "color": "red" }}>Rs.{this.props.price}</span></h4>
              {this.props.status ? <h5 style={{ "color": "red", "font-weight": "bold" }}>The product is discontinued.</h5> : <p className={"description"}>{this.props.desc}</p>}
              <Rater value={this.props.rating} maxlength="6" />&nbsp;&nbsp;
              <span style={{ "fontSize": "9px" }}>{this.props.rating} /5 </span>
            </div>
            <ul>{items}</ul>
            <br />
          </div>
        </div><br />
      </div>
    )
  }
}

export default Product;
