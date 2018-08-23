import React, { Component } from 'react';

class App extends Component {
  state = {
    input: '',
    reverseString: '',
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    fetch('/api/v1/reversify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      //JSON.stringify: is turning the object to the long string Because otherwise it will be object and object
      body: JSON.stringify({ reversifyThis: this.state.input }),
    })
      .then(response => response.json()) // The first response is from the server as the binary data and the response.json conver it the json format or string.
      .then(reverseString => this.setState({ reverseString }))
      .catch(e => console.log(e));
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Entry" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
        <h1>Client Entry: {this.state.input}</h1>
        <h1>Server Reverse: {this.state.reverseString}</h1>
      </div>
    );
  }
}

export default App;
