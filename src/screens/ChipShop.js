import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const ChipShop = () => {
  const handleUPIPayment = (amount) => {
    const upiUrl = `upi://pay?pa=dguru3633@okhdfcbank&pn=Desi%20Teen%20Patti&cu=INR&am=${amount}`;
    Linking.openURL(upiUrl);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💰 Buy Chips</Text>

      <TouchableOpacity style={styles.button} onPress={() => handleUPIPayment(100)}>
        <Text style={styles.text}>Buy ₹100 Chips</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleUPIPayment(200)}>
        <Text style={styles.text}>Buy ₹200 Chips</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handleUPIPayment(500)}>
        <Text style={styles.text}>Buy ₹500 Chips</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ffd700',
    padding: 15,
    borderRadius: 12,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default ChipShop;
