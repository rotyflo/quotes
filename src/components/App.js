import React from 'react';
import './App.css';
import Quote from './Quote';
import Title from './Title';

export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Title />
        <Quote />
      </div>
    );
  }
}