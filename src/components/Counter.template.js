import nj from 'nornj';

export const displayPanel = nj `
  <DisplayPanel>
    <Text style={styles.numberBlock}>{counter}</Text>
    <Text style={styles.unitBlock}>/ times</Text>
  </DisplayPanel>
`;

export default nj `
  <Container>
    #${displayPanel}
    <ControlPanel style="{styles.inline}">
      <ButtonAddSmall onPress={increment}
                      underlayColor={colors.add.bg}>
        <Text :style="[styles.text, styles.textColorAdd]">+</Text>
      </ButtonAddSmall>
      <ButtonMinusSmall onPress={decrement}
                        underlayColor={colors.minus.bg}>
        <Text :style="[styles.text, styles.textColorMinus]">-</Text>
      </ButtonMinusSmall>
    </ControlPanel>
    <ControlPanel>
      <ButtonAdd onPress={incrementIfOdd}
                 underlayColor={colors.add.bg}>
        <Text :style="[styles.text, styles.textColorAdd]">Increment if odd</Text>
      </ButtonAdd>
      <ButtonAdd onPress={onPressAdd}
                 underlayColor={colors.add.bg}>
        <Text :style="[styles.text, styles.textColorAdd]">Increment async</Text>
      </ButtonAdd>
      <ButtonMinus onPress={onPressMinus}
                   underlayColor={colors.minus.bg}>
        <Text :style="[styles.text, styles.textColorMinus]">Decrement async</Text>
      </ButtonMinus>
    </ControlPanel>
  </Container>
`;