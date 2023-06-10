import { View, Text, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ChatItem from './ChatItem';
import { chat } from '../../types/chat';

type props = {
  chats: chat[];
};

export default function ChatList({ chats }: props) {
  return (
    <FlatList
      // style={styles.chatList}
      showsVerticalScrollIndicator={false}
      data={chats}
      renderItem={(chatData) => <ChatItem chatData={chatData.item} />}
    />
  );
}

const styles = StyleSheet.create({
  chatList: {
    flex: 1,
  },
});
