import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import Avatar from '@components/UI/Avatar';
import SearchBar from '@components/UI/SearchBar/SearchBar';
import ChatList from '@components/Chat/ChatList';

import { ChatList as ChatData } from '../../data/ChatData';
import { Colors } from '@constants/GlobalStyle';
import SearchResult from 'components/UI/SearchResult/SearchResult';
import { chat } from 'types/chat';
import { toLowerCaseNonAccentVietnamese } from '@utils/toLowerCaseNoneAccentVN';

export default function Chats() {
  const [searchValue, setSearchValue] = useState<string>('');

  const handleSearchValue = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const [chatsData, setChatsData] = useState<chat[]>(ChatData);

  const filterChatData = (search: string) => {
    const searchToLowerCaseVN = toLowerCaseNonAccentVietnamese(search);

    return chatsData.filter((chat, index) =>
      toLowerCaseNonAccentVietnamese(chat.name).includes(searchToLowerCaseVN)
    );
  };

  useEffect(() => {
    if (searchValue.trim()) {
      let data = filterChatData(searchValue);
      setChatsData(data);
      return;
    }

    setChatsData(ChatData);
  }, [handleSearchValue]);

  return (
    <View style={styles.container}>
      <SearchBar handleSearchValue={handleSearchValue} />
      {/* chats */}
      <View style={styles.chatList}>
        <ChatList chats={chatsData} />
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
