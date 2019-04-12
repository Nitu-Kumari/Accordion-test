
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from "./data";
import List from "./list";

class App extends React.Component {
  state = {
    currentIndex: -1,
  }

  handleChange = i => {
    this.setState({
      currentIndex: i
    });
  };

  render() {
    const { handleChange } = this;
    const { currentIndex,isActive  } = this.state;
    return (
      <div>
        <h1>Accordion Interactivity</h1>
      {data.map(function(e, i) {
        return(
        <List 
        title={e.title}
         detail={e.detail}
         handleChange={handleChange}
          key={i}
          index={i} 
          currentIndex={currentIndex}
          />
        );
      })}
    </div>
    );
  }
}
export default App;
