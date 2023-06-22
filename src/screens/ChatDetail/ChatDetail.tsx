import React, { useCallback, useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// constants
import { Colors } from '@constants/GlobalStyle';

// components
import InputMessenger from '@components/Messenger/InputMessenger';
import { message } from '../../types/message';
import MessageList from '@components/Messenger/Message';

export default function ChatDetail() {
  const handleTypeMessage = useCallback((message: string) => {}, []);

  const handlePressOutside = () => {
    Keyboard.dismiss();
  };

  const [messageList, setMessageList] = useState<message[]>([]);

  const handleSendMessenger = (newMessage: message) => {
    setMessageList((preMessages) => [...preMessages, newMessage]);
  };

  return (
    <KeyboardAvoidingView
      style={styles.rootPage}
      behavior={'padding'}
      keyboardVerticalOffset={Platform.OS === 'ios' && 120}
    >
      <View style={styles.container}>
        <TouchableWithoutFeedback onPressOut={handlePressOutside}>
          <MessageList messagesData={messageList} />
        </TouchableWithoutFeedback>

        {/* input message */}
        <View>
          <InputMessenger onSend={handleSendMessenger} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  rootPage: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  container: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 8,
  },
});
