import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Avatar from '../Avatar/Avatar';
import Icon from '../Icon/Icon';
import { Entypo } from '@expo/vector-icons';
import SearchBar from '../SearchBar/SearchBar';
import { useRoute } from '@react-navigation/native';
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs';
import { Colors } from '@constants/GlobalStyle';

type props = {
  props: BottomTabHeaderProps;
};

export default function Header({ props }: props) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.avatar}>
        <Avatar isOnline={true} />
        <Text style={styles.text}>{props.options.title}</Text>
      </View>
      <View style={styles.iconContainer}>
        {/* <View style={styles.icon}>
          <Icon icon='camera' size={20} color='#333' circle />
        </View> */}

        <View style={styles.icon}>
          <Icon
            icon='chatbubble-ellipses-outline'
            size={20}
            color='#333'
            circle
          />
        </View>
      </View>
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

  avatar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 30,
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
