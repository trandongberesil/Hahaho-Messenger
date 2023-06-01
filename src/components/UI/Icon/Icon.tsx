import { View, Text } from 'react-native';
import React from 'react';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

type MaterialIconName = React.ComponentProps<typeof MaterialIcons>['name'];
type props = {
  icon: string;
  size: number;
  color: string;
};

export default function Icon({ icon, size, color }: props) {
  return (
    <View>
      <Ionicons name={icon} size={size} color={color} />
    </View>
  );
}
