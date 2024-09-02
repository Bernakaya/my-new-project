import React from 'react';
import {  SafeAreaView,StyleSheet } from 'react-native';

import ContactRow from '../components/ContactRow';
const Chats = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ContactRow
      name="Berna KAYA"
      subtitle="React Native Course"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 10,
  },

});

export default Chats;
