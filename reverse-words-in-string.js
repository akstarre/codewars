// DESCRIPTION
// This project is meant to be completed in React. Set up an input that takes in text and reverses it on the screen, in real time.

// SOLUTION
import "./styles.css";
import React from "react";

class App extends React.Component {
  state = {
    userInput: "",
    reversed: ""
  };

  handleChange = (e) => {
    this.setState({ userInput: e.target.value });
  };

  handleReverse = () => {
    let newString = [];
    let oldString = this.state.userInput.split("");
    for (let i = 0; i < this.state.userInput.length; i++) {
      newString.push(oldString.pop());
    }
    return newString.join("");
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.handleChange} />
        <button onClick={this.handleReverse}>Reverse</button>
        {this.handleReverse()}
      </div>
    );
  }
}

export default App;

