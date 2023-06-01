import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import Icon from '@components/UI/Icon/Icon';
import Chats from '@screens/Chats';
import People from '@screens/People';

const Bottom = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Bottom.Screen
        name='Chats'
        component={Chats}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon icon='chatbubble' color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name='People'
        component={People}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon icon='people' color={color} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};
