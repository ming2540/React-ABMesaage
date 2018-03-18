import React, { Component } from 'react';
import ButtonA from './components/ButtonA';
import MessageA from './container/MessageA';

class App extends Component {
  render() {
    return (
      <div>
        <ButtonA/>
        <MessageA/>
      </div>
    );
  }
}

export default App;
