import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { chat } from '../../types/chat';
import PeopleItem from './PeopleItem';

type props = {
  peoplesData: chat[];
};

export default function Peoples({ peoplesData }: props) {
  return (
    <FlatList
      data={peoplesData}
      renderItem={(dataItem) => <PeopleItem people={dataItem.item} />}
    />
  );
}
