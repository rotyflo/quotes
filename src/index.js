import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider, connect } from 'react-redux';
import addMessage from './actions';
import store from './store';

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

function mapStateToProps(state) {
  return {
    messages: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('root')
);