import React from 'react'; import { View, Text, Image, TouchableOpacity } from 'react-native';

const GameTable = () => { return ( <View style={{ flex: 1, backgroundColor: '#003300', padding: 20 }}> <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 }}> Teen Patti Table ♠️♥️♣️♦️ </Text>

<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
    <Image
      source={require('../assets/Screenshot_20250801_141652.jpg')}
      style={{ width: 100, height: 100 }}
    />
    <Image
      source={require('../assets/Screenshot_20250801_141633.jpg')}
      style={{ width: 100, height: 100 }}
    />
    <Image
      source={require('../assets/Screenshot_20250801_141704.jpg')}
      style={{ width: 100, height: 100 }}
    />
  </View>

  <TouchableOpacity
    style={{ marginTop: 40, backgroundColor: 'gold', padding: 15, borderRadius: 10 }}
    onPress={() => alert('Game Start Hogi!')}
  >
    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>Start Game</Text>
  </TouchableOpacity>
</View>

); };

export default GameTable;

        
