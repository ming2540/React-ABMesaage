import React, { Component } from 'react';
import {connect} from 'react-redux'
import { messageA } from '../actions/index';

class ButtonA extends Component {
  render() {
    return (
      <div>
        <button onClick = {this.props.massageA}>messageA </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  messageA : () => dispatch(messageA())
})


export default connect(mapDispatchToProps)(ButtonA);
