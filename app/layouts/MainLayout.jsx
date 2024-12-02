import React from 'react';
import { View, StyleSheet,Text } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
});

export default MainLayout;