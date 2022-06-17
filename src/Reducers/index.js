import IssueConstants from './../Constants/IssueConstants';
import { combineReducers } from 'redux';

const initState = {
  user: '',
  feedbackDetail: []
}

const login = (state = initState, action) => {
  switch (action.type) {
    
    case IssueConstants.LOGIN:
      return {
        ...state,
        isAuthed: action.isAuthenticated
      }
      case IssueConstants.LOGOUT: 
      return {
        ...state,
        isAuthed: false
      }
    default:
      return state;
  }
}


const productDetail = (state = initState, action) => {
  switch (action.type) {

    case IssueConstants.PRODUCT_DETAILS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

const feedbackDetail = (state = initState, action) => {
  switch (action.type) {
    case IssueConstants.FEEDBACK_DETAILS:
      return {
        ...state,
        feedbackDetail: action.payload
      }
    case IssueConstants.SUBMIT_FEEDBACK:
      return {
        ...state,
        feedbackDetail: [...state.feedbackDetail, action.payload]
      }
    default:
      return state;
  }
}

const submitFeedback = (state = initState, action) => {
  switch (action.type) {

    case IssueConstants.SUBMIT_FEEDBACK:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const getLoginState = state => state.login;
export const getProductState = state => state.productDetail;
export const getFeedbackDetailsState = state => state.feedbackDetail.feedbackDetail;
export const getFeedbackState = state => state.submitFeedback;

export default combineReducers({
  login,
  productDetail,
  feedbackDetail,
  submitFeedback
});
