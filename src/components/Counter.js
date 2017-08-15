import React, {
  Component,
  PropTypes,
} from 'react';
import { StyleSheet } from 'react-native';
import { registerTmpl } from 'nornj-react/native';
import { autobind } from 'core-decorators';
import styled from 'styled-components/native';

const colors = {
  background: {
    bg: '#F5FCFF'
  },
  add: {
    font: '#F69',
    border: '#F69',
    bg: '#FFC1D6'
  },
  minus: {
    font: '#6495ED',
    border: '#6495ED',
    bg: '#D0DFF9'
  }
}

const styles = StyleSheet.create({
  inline: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  numberBlock: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
    width: 200,
  },
  unitBlock: {
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  textColorAdd: {
    color: colors.add.font,
  },
  textColorMinus: {
    color: colors.minus.font,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

@registerTmpl({
  name: 'Counter',
  components: {
    Container: styled.View `
      flex: 1;
      justify-content: center;
      align-items: center;
      background-color: ${colors.background.bg};
    `,
    DisplayPanel: styled.View `
      margin-vertical: 30px;
      flex-direction: row;
      align-items: flex-end;
    `,
    ControlPanel: styled.View `
      margin-vertical: 30px;
    `,
    ButtonAddSmall: styled.TouchableHighlight `
      justify-content: center;
      align-items: center;
      height: 30px;
      margin: 10px;
      border-radius: 10px;
      border-width: 2px;
      border-color: ${colors.add.border};
      width: 80px;
    `,
    ButtonMinusSmall: styled.TouchableHighlight `
      justify-content: center;
      align-items: center;
      height: 30px;
      margin: 10px;
      border-radius: 10px;
      border-width: 2px;
      border-color: ${colors.minus.border};
      width: 80px;
    `,
    ButtonAdd: styled.TouchableHighlight `
      justify-content: center;
      align-items: center;
      height: 30px;
      margin: 10px;
      border-radius: 10px;
      border-width: 2px;
      border-color: ${colors.add.border};
      padding-left: 10px;
      padding-right: 10px;
    `,
    ButtonMinus: styled.TouchableHighlight `
      justify-content: center;
      align-items: center;
      height: 30px;
      margin: 10px;
      border-radius: 10px;
      border-width: 2px;
      border-color: ${colors.minus.border};
      padding-left: 10px;
      padding-right: 10px;
    `,
  },
  template: `
    <Container>
      <DisplayPanel>
        <Text style={styles.numberBlock}>{counter}</Text>
        <Text style={styles.unitBlock}>/ times</Text>
      </DisplayPanel>
      <ControlPanel style="{styles.inline}">
        <ButtonAddSmall onPress={increment}
                        underlayColor={colors.add.bg}>
          <Text style="{list(styles.text, styles.textColorAdd)}">+</Text>
        </ButtonAddSmall>
        <ButtonMinusSmall onPress={decrement}
                          underlayColor={colors.minus.bg}>
          <Text style="{list(styles.text, styles.textColorMinus)}">-</Text>
        </ButtonMinusSmall>
      </ControlPanel>
      <ControlPanel>
        <ButtonAdd onPress={incrementIfOdd}
                   underlayColor={colors.add.bg}>
          <Text style="{list(styles.text, styles.textColorAdd)}">Increment if odd</Text>
        </ButtonAdd>
        <ButtonAdd onPress={onPressAdd}
                            underlayColor={colors.add.bg}>
          <Text style="{list(styles.text, styles.textColorAdd)}">Increment async</Text>
        </ButtonAdd>
        <ButtonMinus onPress={onPressMinus}
                     underlayColor={colors.minus.bg}>
          <Text style="{list(styles.text, styles.textColorMinus)}">Decrement async</Text>
        </ButtonMinus>
      </ControlPanel>
    </Container>
  `
})
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
    return this.template(this.props, this, {
      colors,
      styles
    });
  }
}

export default Counter;