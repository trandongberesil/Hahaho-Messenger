import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { message } from '../../../types/message';
import MessageItem from './MessageItem';

type props = {
  messagesData: message[];
};

export default function MessageList({ messagesData }: props) {
  return (
    <FlatList
      contentContainerStyle={styles.messageContainer}
      data={messagesData}
      keyExtractor={(message) => message.id}
      renderItem={(message) => <MessageItem message={message.item} />}
    />
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginVertical: 8,
  },
});
