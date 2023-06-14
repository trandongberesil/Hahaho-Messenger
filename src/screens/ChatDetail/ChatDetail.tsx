import {
  View,
  Text,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import React from 'react';

// constants
import { Colors } from '@constants/GlobalStyle';

// components
import Input from '@components/UI/Input/Input';
import Icon from '@components/UI/Icon/Icon';

const inputConfig = {
  autoComplete: 'off',
  autoCorrect: false,
  spellCheck: false,
};

export default function ChatDetail() {
  const handleTypeMessage = (message: string) => {};

  return (
    <SafeAreaView style={styles.rootPage}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior='padding'
        keyboardVerticalOffset={64}
      >
        <View style={styles.container}>
          <View style={styles.messageContainer}></View>

          <View style={styles.inputContainer}>
            <Input
              onChangeText={handleTypeMessage}
              style={styles.input}
              inputConfig={inputConfig}
            />

            <Pressable>
              <Icon icon='send' size={20} color={Colors.black} />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootPage: {
    flex: 1,
  },

  flex: { flex: 1 },

  container: {
    flex: 1,
    paddingHorizontal: 8,
    backgroundColor: Colors.white,
    // position: 'relative',
  },

  messageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 50,
  },

  input: {
    flex: 1,
    marginRight: 8,
    backgroundColor: Colors.gray100,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 50,
  },
});
