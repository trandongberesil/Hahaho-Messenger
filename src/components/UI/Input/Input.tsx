import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { ReactDOM, ReactElement, memo } from 'react';
import Icon from '../Icon/Icon';

type props = {
  // value: string | number;
  onChangeText: Function;

  inputConfig?: any;
  style?: any;
};

function Input({ onChangeText, inputConfig, style }: props) {
  return (
    <TextInput
      style={[styles.inputContainer, style]}
      // value={value}
      onChangeText={onChangeText}
      {...inputConfig}
    />
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    overflow: 'hidden',
    fontSize: 16,
    paddingHorizontal: 6,
  },
});

export default memo(Input);
