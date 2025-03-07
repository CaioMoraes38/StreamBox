import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';

const DefaultPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <StatusBar style="auto" />
    </View>
  );
};

export default DefaultPage;