import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useState } from 'react';
import Avatar from '@components/UI/Avatar';
import SearchBar from '@components/UI/SearchBar/SearchBar';
import ChatList from '@components/Chat/ChatList';

import { ChatList as ChatData } from '../../data/ChatData';
import { Colors } from '@constants/GlobalStyle';

export default function Chats() {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchValue = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar handleSearchValue={handleSearchValue} />

      {/* chats */}
      <View style={styles.chatList}>
        <ChatList chats={ChatData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
    overflow: 'hidden',
    backgroundColor: Colors.white,
  },

  chatList: {
    flex: 1,
  },
});
