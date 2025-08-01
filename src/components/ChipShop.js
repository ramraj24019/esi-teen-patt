import React from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';

const ClipMap = {
  100: require('../assets/clips/clip100.gif'),
  200: require('../assets/clips/clip200.gif'),
  500: require('../assets/clips/clip500.gif'),
};

const ChipShop = () => {
  const buyChips = (amount) => {
    Alert.alert(
      'Confirm Purchase',
      `Buy ₹${amount} Chips?`,
      [
        { text: 'Cancel' },
        {
          text: 'Pay Now',
          onPress: () => {
            const upiUrl = `upi://pay?pa=dguru3633@okhdfcbank&pn=Desi Teen Patti&am=${amount}&cu=INR`;
            Linking.openURL(upiUrl);
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎁 Buy Chips</Text>

      {[100, 200, 500].map((amount) => (
        <TouchableOpacity
          key={amount}
          style={styles.card}
          onPress={() => buyChips(amount)}
        >
          <Image source={ClipMap[amount]} style={styles.clip} />
          <Text style={styles.amount}>Buy ₹{amount} Chips</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ChipShop;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', paddingTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
  },
  amount: { fontSize: 18, fontWeight: '600', marginTop: 10 },
  clip: { width: 150, height: 100, resizeMode: 'contain' },
});
