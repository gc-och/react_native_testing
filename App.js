import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Core } from './components/core';

export default function App() {
  return (
    <View style={styles.container}>
      <Core></Core>
    </View>
  )
}

const statusBarHeight = 20;

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight,
    alignContent: 'stretch'
  }
});