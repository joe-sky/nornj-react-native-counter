import React from 'react';
import { Text } from 'react-native';
import {
  colors,
  styles,
  components
} from './Counter.style';
const { ButtonZero } = components;

export default props => <if condition={props.counter < 0}>
  <ButtonZero onPress={props.setToZero} underlayColor={colors.minus.bg}>
    <Text style={[styles.text, styles.textColorMinus]}>Set to zero</Text>
  </ButtonZero>
  <else>{null}</else>
</if>;