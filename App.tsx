import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { ThemeProvider } from "./src/components/Theme/ThemeContext"; // Đường dẫn tuỳ thuộc cấu trúc thư mục
import HomeScreen from './src/screens/Home/HomeScreen';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  }
});

