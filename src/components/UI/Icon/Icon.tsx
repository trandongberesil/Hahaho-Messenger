import {
  View,
  Text,
  GestureResponderEvent,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@constants/GlobalStyle';

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];
type props = {
  icon: string;
  size: number;
  color: string;
  circle?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function Icon({
  icon,
  size,
  color,
  onPress,
  circle = false,
}: props) {
  return (
    <Pressable
      style={({ pressed }) => [
        pressed && styles.pressed,
        circle && styles.circle,
      ]}
      android_ripple={{ color: '#cccc' }}
    >
      <View style={circle && styles.circle}>
        <Ionicons onPress={onPress} name={icon} size={size} color={color} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },

  circle: {
    width: 40,
    height: 40,
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray100,
  },
});
