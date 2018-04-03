import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const colors = {
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

export const styles = StyleSheet.create({
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
  },
  lowerThanZero: {
    color: '#c70c0c',
  }
});

const Button = styled.TouchableHighlight `
  justify-content: center;
  align-items: center;
  height: 30px;
  margin: 10px;
  border-radius: 10px;
  border-width: 2px;
`;

export const components = {
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
    margin-vertical: 20px;
  `,
  ButtonAddSmall: Button.extend `
    border-color: ${colors.add.border};
    width: 80px;
  `,
  ButtonMinusSmall: Button.extend `
    border-color: ${colors.minus.border};
    width: 80px;
  `,
  ButtonAdd: Button.extend `
    border-color: ${colors.add.border};
    padding-left: 10px;
    padding-right: 10px;
  `,
  ButtonMinus: Button.extend `
    border-color: ${colors.minus.border};
    padding-left: 10px;
    padding-right: 10px;
  `,
  ButtonZero: Button.extend `
    border-color: ${colors.minus.border};
    padding-left: 10px;
    padding-right: 10px;
  `
};