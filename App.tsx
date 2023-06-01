import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BottomTabs } from './src/navigators/BottomTabs';

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <View style={styles.rootPage}>
          <BottomTabs />
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootPage: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
