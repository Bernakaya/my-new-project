import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ionicons'ı import ediyoruz
const ContactRow =({name,subtitle}) => {
    return(
        <SafeAreaView>
        <TouchableOpacity style={styles.row}>
        <View style={styles.avatar}>
  <Text style={styles.text}>
    {name.split(' ').reduce((prev, current) => `${prev}${current[0]}`, '')}
  </Text>
</View>

        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#007AFF" style={styles.icon} />
      </TouchableOpacity>
</SafeAreaView>
   )
}

const styles = StyleSheet.create({
  
  row: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row', // Satırı yatayda düzenlemek için
    justifyContent: 'space-between', // İkonu sağa yerleştirmek için
    alignItems: 'center', // Metin ve ikonu ortalamak için
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  subtitle: {
    marginTop: 5,
    color: '#565656',
    fontSize: 14,
  },
  icon: {
    marginLeft: 70,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#333333',
    justifyContent: 'center', // Dikey ortalama
    alignItems: 'center', // Yatay ortalama
    backgroundColor: '#E0E0E0', // Arka plan rengi
    marginLeft: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ContactRow;