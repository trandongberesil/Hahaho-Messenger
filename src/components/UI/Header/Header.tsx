import React, { useLayoutEffect } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

// constants
import { Colors } from '@constants/GlobalStyle';

// navigate
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

// components
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import { Ionicons } from '@expo/vector-icons';

// data
import { ChatList } from '../../../data/ChatData';

type props = {
  props: BottomTabHeaderProps | NativeStackHeaderProps;
};

export default function Header({ props }: props) {
  const navigation = useNavigation<any>();

  const handlePressBack = () => {
    navigation.goBack();
  };

  const chatId = props.route.params?.chatId;

  const chatSelected =
    !!chatId && ChatList.find((chatItem) => chatItem.id === chatId);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatar}>
        {!!chatSelected && (
          <Pressable
            onPress={handlePressBack}
            style={({ pressed }) => [
              styles.iconBack,
              pressed && styles.pressedIconBack,
            ]}
          >
            <Ionicons
              name='chevron-back'
              size={30}
              // color='#333'
            />
          </Pressable>
        )}
        <Avatar
          isOnline={chatSelected?.isOnline ?? true}
          avatarUrl={chatSelected.avatarUrl}
        />
        <Text
          numberOfLines={1}
          style={[styles.text, chatSelected?.name && styles.name]}
        >
          {chatSelected?.name ?? props.route.name}
        </Text>
      </View>
      {!chatSelected && (
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <Icon
              icon='chatbubble-ellipses-outline'
              size={20}
              color='#333'
              circle
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },

  iconBack: {
    marginRight: 4,
  },

  pressedIconBack: {
    opacity: 0.6,
  },

  avatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginLeft: 30,
    fontWeight: 'bold',
    fontSize: 30,
    maxWidth: 200,
    overflow: 'hidden',
  },

  name: {
    fontSize: 20,
    marginLeft: 8,
  },

  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    marginHorizontal: 8,
  },
});
