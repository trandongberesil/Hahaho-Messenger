import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

// constants
import { Colors } from '@constants/GlobalStyle';

// package
import uuid from 'react-uuid';

// components
import Input from '@components/UI/Input';
import Icon from '@components/UI/Icon';
import { message } from '../../../types/message';

const inputConfig = {
  autoComplete: 'off',
  autoCorrect: false,
  spellCheck: false,
  multiline: true,
};

type props = {
  onSend: (message: message) => void;
};

export default function InputMessenger({ onSend }: props) {
  const [message, setMessage] = useState<string>('');

  const handleTypeMessage = (message: string) => {
    setMessage(message);
  };

  const handlePressSend = () => {
    onSend({
      message: message,
      id: uuid(),
      sendTime: new Date(),
      sender: 'Tran Duy Dong',
    });

    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Input
        value={message}
        onChangeText={handleTypeMessage}
        style={styles.input}
        inputConfig={inputConfig}
      />

      <Icon
        icon='send'
        size={20}
        color={Colors.black}
        onPress={handlePressSend}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },

  input: {
    flex: 1,
    alignContent: 'center',
    marginRight: 8,
    backgroundColor: Colors.gray100,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    lineHeight: 0,
  },
});
