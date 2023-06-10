import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BottomTabs } from './src/navigators/BottomTabs';

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView style={styles.rootPage}>
        <NavigationContainer>
          <BottomTabs />
        </NavigationContainer>
      </SafeAreaView>
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
