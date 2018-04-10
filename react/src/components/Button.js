import React, { Component } from 'react';
import './Button.scss';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { now: Date.now() };
  }

  handleclick = (event) => {
    this.setState({ now: Date.now() });
  }

  render() {
    return (
      <button className={this.props.className} onClick={this.handleclick}>{this.props.title} {this.state.now}</button>
    );
  }
}

export default Button;
