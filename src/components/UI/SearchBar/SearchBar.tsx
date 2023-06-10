import { View, Text, StyleSheet } from 'react-native';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import Input from '../Input';
import Icon from '../Icon';
import useDebounce from '@hooks/useDebounce';
import { Colors } from '@constants/GlobalStyle';
import { useNavigation } from '@react-navigation/native';

type props = {
  handleSearchValue: (value: string) => void;
};

let inputConfig: { [key: string]: any } = {
  placeholder: 'Search',
  autoComplete: 'off',
  autoCorrect: false,
};

function SearchBar({ handleSearchValue }: props) {
  const [value, setValue] = useState<string>('');

  const debounceValue = useDebounce(value, 500);

  const handleChangeValue = useCallback((e: string) => {
    setValue(e);
  }, []);

  useEffect(() => {
    if (debounceValue) {
      handleSearchValue(debounceValue);
    }
  }, [debounceValue]);

  return (
    <View style={styles.search}>
      <Icon icon='search' size={25} color={Colors.gray400} />
      <View style={styles.input}>
        <Input onChangeText={handleChangeValue} inputConfig={inputConfig} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginVertical: 8,
    backgroundColor: Colors.gray100,
    borderRadius: 8,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
  },
});

export default memo(SearchBar);
