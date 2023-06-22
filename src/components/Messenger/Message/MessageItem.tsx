import { View, Text } from 'react-native';
import React from 'react';
import { message } from '../../../types/message';

type props = {
  message: message;
};

export default function MessageItem({ message }: props) {
  return (
    <View>
      <Text>{message.message}</Text>
    </View>
  );
}
