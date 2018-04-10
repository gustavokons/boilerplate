import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
      <button>{this.props.title}</button>
    );
  }
}

export default Button;
