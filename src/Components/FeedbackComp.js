import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Col from 'react-bootstrap/Col';
import Rater from './Rater';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/RateComp.css';

class FeedbackComp extends React.Component {
  constructor() {
    super();
    this.state = {
      id:'',
      pdtCode:'',
      user:'',
      body:'',
      latestFeedback: "",
      rating: '5',
      feedbackAck:"Thanks for your feedback"
    };
  }
  handleFeedbackChange = (e) => {
    this.setState({ body: e.target.value })
  }
  handleClick = (rating) => {
    if (rating===4) {
      this.setState({feedbackAck:"Thanks for your feedback."})
    }
    if (rating<4) {
        this.setState({feedbackAck:"Thanks for your feedback. We will look in to the issue."})
    }
    this.setState({ rating: rating });
  }

  feedbackSubmitHandler = () => {
    this.props.onFeedback(this.state.rating, this.state.body,this.state.feedbackAck);
    this.setState({ body: "", 
      rating: "5",feedbackAck:"" });
  }
  
  render() {
    let items = [];
    this.props.feedbacks.forEach(function (fb, index) {
    items.push(<div key={index}><h4>{fb.user}</h4><Rater value={fb.rating} maxlength="6" />&nbsp;&nbsp;<span style={{ "fontSize": "9px" }}>{fb.rating}/5</span><br /><div style={{ 'paddingBottom': '10px' }}>{fb.body}</div><div style={{'marginLeft':'20px'}}>
    {fb.feedbackAck}</div></div>)
    });
    return (
      <div>
        {items}
        <Form className={""}>
          <div className={"form-group"}>
            <textarea className={"form-control"} rows="5" cols="12" value={this.state.body} name="username" onChange={this.handleFeedbackChange} ref="username" ></textarea>
          </div>
          <div><Rater value={this.state.rating} maxlength="6" onSelected={this.handleClick} />&nbsp;&nbsp;
        <span style={{ "fontSize": "9px" }}>{this.state.rating}/5</span></div><br />
          <FormGroup>
            <Col sm={8}>
              <Button variant="primary" onClick={this.feedbackSubmitHandler} >
                Submit Feedback
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.login.user
  }
}
export default connect(mapStateToProps)(FeedbackComp);
