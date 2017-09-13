import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { registerTmpl } from 'nornj-react/native';
import { autobind } from 'core-decorators';
import {
  colors,
  styles,
  components
} from './Counter.style';
import template from './Counter.template';

@registerTmpl('Counter')
class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  };

  @autobind
  onPressAdd() {
    const { incrementAsync } = this.props;
    return incrementAsync();
  }

  @autobind
  onPressMinus() {
    const { decrementAsync } = this.props;
    return decrementAsync();
  }

  render() {
    return template({
      components,
      colors,
      styles
    }, this.props, this);
  }
}

export default Counter;