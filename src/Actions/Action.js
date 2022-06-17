import { createAction } from 'redux-actions';
import axios from 'axios';
import IssueConstants from '../Constants/IssueConstants.js';

export const loginMe = createAction(IssueConstants.LOGIN);
export const logoutMe = createAction(IssueConstants.LOGOUT);
export const submitFB = createAction(IssueConstants.SUBMIT_FEEDBACK);
export const getProduct = createAction(IssueConstants.PRODUCT_DETAILS);
export const getFeedback = createAction(IssueConstants.FEEDBACK_DETAILS);

export function Login(data) {
  return dispatch => {
    axios.get('http://localhost:4000/users')
      .then((res) => {
        let value = res.data
        var result = value.find(val => val.username===data.username && val.password===data.password)  
        if(result) {
            dispatch(LoginMe(true))
          }
          else {
            dispatch(LoginMe(false))
          }
        })
  }
} 
export function LoginMe(isAuthenticated) {
  return {
    type: 'LOGIN',
    isAuthenticated
  }
}


// LOGOUT ACTION
export function Logout() {
  return (dispatch) => {
    dispatch(logoutMe())
  }
}

// SUBMIT_FEEDBACK
export function SubmitFeedback(data) {
  return dispatch => {
    axios(`http://localhost:4000/feedbackDetails`, {
      method: 'POST',
      crossdomain: true,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        dispatch(submitFB(res.data))
      })
      .catch(err => dispatch(submitFB(err)))
  }
}

// PRODUCT_DETAILS
export function GetProductDetails(data) {
  let pdtId = data.pdtId;
  return dispatch => {
    axios.get(`http://localhost:4000/products/${pdtId}`)
      .then((res) =>{ dispatch(getProduct(res.data))})
      .catch(err => dispatch(getProduct(err)))
  }
}

export function GetFeedbackDetails(data) {
  let pdtId = data.pdtId;
  return dispatch => {
    axios.get(`http://localhost:4000/feedbackDetails?pdtCode=${pdtId}`)
      .then((res) =>{ dispatch(getFeedback(res.data))})
      .catch(err => dispatch(getFeedback(err)))
  }
}


