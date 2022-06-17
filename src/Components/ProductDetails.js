import React from 'react';
import { withRouter } from 'react-router'
import Product from './Product';
import Navigation from './Navigation';
import Footer from './Footer';
import FeedbackComp from './FeedbackComp';
import { getProductState, getFeedbackState, getLoginState, getFeedbackDetailsState } from '../Reducers/index';
import { connect } from 'react-redux';
import { SubmitFeedback, GetProductDetails, GetFeedbackDetails } from '../Actions/Action'

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: {},
      fbDetails: []
    };
    this.props.GetProductDetails({ pdtId: this.props.match.params.id })
    this.props.GetFeedbackDetails({ pdtId: this.props.match.params.id })
  }

  handleSubmitFeedback = (rating, feedback, feedbackAck) => {
    const fbData = {
      'body': feedback,
      'user': this.props.login.user,
      'rating': rating,
      'feedbackAck': feedbackAck,
      'productId': this.props.match.params.id
    };
    this.props.SubmitFeedback(fbData);
    this.props.GetProductDetails({ pdtId: this.props.match.params.id })
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className={"container-fluid"}>
          <div className={"row"} style={{ "maxWidth": "100%" }}>
            <div className={"col-sm-8"}>
              {
                <Product
                  pid={this.props.productDetails.pdtCode}
                  price={this.props.productDetails.pdtPrice}
                  name={this.props.productDetails.pdtName}
                  desc={this.props.productDetails.pdtDescription}
                  img={`http://localhost:4000${this.props.productDetails.pdtImg}`}
                  rating={this.props.productDetails.avgFeedback}
                  features={this.props.productDetails.pdtFeatures}
                  noofreviews={this.props.productDetails.length}
                  isReturned={this.props.productDetails.isReturned} />
              }
            </div>
            <div className={"col-sm-4"}>
              {this.props.feedbackDetails.length === 0 ? '' : <FeedbackComp feedbacks={this.props.feedbackDetails} onFeedback={this.handleSubmitFeedback} />}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: getLoginState(state),
    productDetails: getProductState(state),
    feedbackDetails: getFeedbackDetailsState(state),
    feedback: getFeedbackState(state),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    SubmitFeedback: (data) => dispatch(SubmitFeedback(data)),
    GetFeedbackDetails: (data) => dispatch(GetFeedbackDetails(data)),
    GetProductDetails: (data) => dispatch(GetProductDetails(data)),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDetails));
