import { useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import ChatDetail from '@screens/ChatDetail/ChatDetail';
import Chats from '@screens/Chats/Chats';
import Header from '@components/UI/Header';
import { useLayoutEffect } from 'react';

export type RootStackParamList = {
  Chats: undefined;
  ChatDetail: { chatId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Chats'
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name='ChatDetail'
        component={ChatDetail}
        options={{
          header: (props) => <Header props={props} />,
        }}
      />
      <Stack.Screen
        name='Chats'
        component={Chats}
        options={{
          header: (props) => <Header props={props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
