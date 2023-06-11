import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import Avatar from '@components/UI/Avatar/Avatar';
import { chat } from '../../types/chat';
import { Colors } from '@constants/GlobalStyle';

type props = {
  people: chat;
};

export default function PeopleItem({ people }: props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      android_ripple={{ color: Colors.gray100 }}
    >
      <Avatar avatarUrl={people.avatarUrl} isOnline={people.isOnline} />
      <View style={styles.info}>
        <Text style={styles.name}>{people.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },

  pressed: {
    opacity: 0.7,
  },

  info: {
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: Colors.gray100,
    borderBottomWidth: 1,
    height: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
