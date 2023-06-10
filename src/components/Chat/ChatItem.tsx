import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
// types
import { chat } from '../../types/chat';
// constants
import { Colors } from '@constants/GlobalStyle';
// components
import Avatar from '@components/UI/Avatar/Avatar';
import Icon from '@components/UI/Icon/Icon';

type props = {
  chatData: chat;
};

export default function ChatItem({ chatData }: props) {
  const { id, avatarUrl, isOnline, name, isSeen, lastMessage } = chatData;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.chatItemContainer,
        pressed && styles.pressed,
      ]}
      android_ripple={{ color: Colors.gray100 }}
    >
      <View>
        <Avatar avatarUrl={avatarUrl} isOnline={isOnline} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lassMessage}>{lastMessage}</Text>
      </View>
      <View>
        {isSeen ? (
          <Icon icon={'checkmark-circle'} size={20} color={Colors.gray400} />
        ) : (
          <Icon
            icon={'checkmark-circle-outline'}
            size={20}
            color={Colors.gray400}
          />
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chatItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 12,
  },

  pressed: {
    opacity: 0.6,
  },

  info: {
    flex: 1,
    marginLeft: 8,
  },

  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  lassMessage: {
    marginTop: 4,
    color: Colors.gray400,
  },
});
