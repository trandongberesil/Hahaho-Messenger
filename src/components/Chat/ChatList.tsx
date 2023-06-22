import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

// types
import { chat } from '../../types/chat';
// screens
import ChatDetail from '@screens/ChatDetail';
// components
import ChatItem from './ChatItem';
import { RootStackParamList } from 'navigators/Stack';

// type chatDetailScreenProps = NavigationProp<RootStackParamList, 'ChatDetail'>;

type props = {
  chats: chat[];
  // navigation: chatDetailScreenProps;
};

export default function ChatList({ chats }: props) {
  const navigation = useNavigation<any>();

  const handlePressChatItem = (id: string) => {
    navigation.navigate('ChatDetail', {
      chatId: id,
    });
  };

  return (
    <FlatList
      // style={styles.chatList}
      showsVerticalScrollIndicator={false}
      keyExtractor={(chat) => chat.id}
      data={chats}
      renderItem={(chatData) => (
        <ChatItem
          chatData={chatData.item}
          onPressChatItem={handlePressChatItem}
        />
      )}
    />
  );
}
