import { View, Text, StyleSheet } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';

// data
import { ChatList as ChatData } from '../../data/ChatData';
// types
import { chat } from '../../types/chat';
// components
import { Colors } from '@constants/GlobalStyle';
import Peoples from '@components/People/Peoples';
import SearchBar from '@components/UI/SearchBar/SearchBar';
import { toLowerCaseNonAccentVietnamese } from '@utils/toLowerCaseNoneAccentVN';

export default function People() {
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

      <View style={styles.list}>
        <Peoples peoplesData={ChatData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 8,
  },

  list: {
    flex: 1,
  },
});
