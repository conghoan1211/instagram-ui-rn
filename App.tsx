import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ThemeProvider } from "./src/components/Theme/ThemeContext";
import MainTab from './src/navigation/MainTab';

export default function App() {
  return (
    <View style={styles.container}>
      <ThemeProvider>
        <MainTab />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});

