import React, { Component } from 'react';
import {connect} from 'react-redux'

class ButtonA extends Component {
  render() {
    return (
      <div style = {{display : this.props.messageA? 'none' : 'block'}}>
        A
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  messageA  : state.messageA
})


export default connect(mapStateToProps)(ButtonA);
