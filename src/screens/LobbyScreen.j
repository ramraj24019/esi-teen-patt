import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const LobbyScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#1e0033', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'gold', marginBottom: 40 }}>
        Desi Teen Patti 🎴
      </Text>

      <Image
        source={require('../assets/Screenshot_20250801_141704.jpg')}
        style={{ width: 160, height: 160, marginBottom: 20 }}
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('GameTable')}
        style={{
          backgroundColor: 'gold',
          padding: 15,
          borderRadius: 20,
          marginTop: 20,
          width: 200,
          alignItems: 'center'
        }}
      >
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>
          Join Table
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LobbyScreen;
