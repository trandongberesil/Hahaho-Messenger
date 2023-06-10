import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// expo
import { Ionicons } from '@expo/vector-icons';

//screens
import Chats from '@screens/Chats';
import People from '@screens/People';

// components
import Header from '@components/UI/Header/Header';

const Bottom = createBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        header: (props) => <Header props={props} />,
        tabBarActiveTintColor: '#333',
        tabBarInactiveTintColor: '#ccc',
      }}
    >
      <Bottom.Screen
        name='Chats'
        component={Chats}
        options={{
          title: 'Chats',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='chatbubble' color={color} size={size} />
          ),
        }}
      />
      <Bottom.Screen
        name='People'
        component={People}
        options={{
          title: 'People',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name='people' color={color} size={size} />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};
