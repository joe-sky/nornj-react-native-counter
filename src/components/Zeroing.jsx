import React from 'react';
import { Text } from 'react-native';
import {
  colors,
  styles,
  components
} from './Counter.style';
const { ButtonZero } = components;

export default props => (
  <ButtonZero onPress={props.setToZero} underlayColor={colors.minus.bg} n-show={props.counter < 0}>
    <Text style={[styles.text, styles.textColorMinus]}>Set to zero</Text>
  </ButtonZero>
);