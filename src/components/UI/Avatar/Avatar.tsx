import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

//constants
import * as GlobalStyle from '@constants/GlobalStyle';

type props = {
  avatarUrl?: string;
  isOnline?: boolean;
};

export default function Avatar({ avatarUrl, isOnline = false }: props) {
  return (
    <View style={styles.avatarContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={
            avatarUrl ? avatarUrl : require('../../../assets/image/avatar.png')
          }
        />
      </View>

      {isOnline && <View style={styles.isOnline}></View>}
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'relative',
    // minWidth: 40,
    // minHeight: 40,
    height: 60,
    width: 60,
  },

  imageContainer: {
    borderRadius: 30,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  isOnline: {
    width: 15,
    height: 15,
    borderRadius: 7,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: GlobalStyle.Colors.green500,

    position: 'absolute',
    bottom: 0,
    right: 2,
  },
});
