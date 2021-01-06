import React from 'react';
import { StyleSheet, View } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen';
import AppButton from './src/components/AppButton';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppButton title="Login" onPress={() => console.log("pressedTHE appButton!")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
