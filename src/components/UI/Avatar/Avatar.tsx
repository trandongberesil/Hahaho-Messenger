import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

export default function Avatar() {
  return (
    <View>
      <Image source={{ uri: '' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    minWidth: 40,
    minHeight: 40,
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
