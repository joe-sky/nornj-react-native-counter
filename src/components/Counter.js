import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nj from 'nornj';
import { autobind } from 'core-decorators';
import {
  colors,
  styles,
  components
} from './Counter.style';
import tmpls from './Counter.template.t.htm';
import Zeroing from './Zeroing.jsx';

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
    return incrementAsync(500);
  }

  @autobind
  onPressMinus() {
    const { decrementAsync } = this.props;
    return decrementAsync(500);
  }

  render() {
    return tmpls.main({
      components: { ...components, Zeroing },
      colors,
      styles
    }, this.props, this);
  }
}

export default nj.registerComponent({ Counter });