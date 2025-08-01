import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function AdminPanel() {
  const navigation = useNavigation();
  const adminPhone = '+918758337482'; // आपका Admin नंबर

  useEffect(() => {
    const user = auth().currentUser;
    if (!user || user.phoneNumber !== adminPhone) {
      Alert.alert('Access Denied', 'You are not authorized to access this page.');
      navigation.navigate('LobbyScreen'); // Non-admin को Lobby पर भेज दो
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🎮 Admin Panel</Text>
      <Text style={styles.option}>• View all active users</Text>
      <Text style={styles.option}>• Send chip bonus 💰</Text>
      <Text style={styles.option}>• Ban suspicious users 🚫</Text>
      <Text style={styles.option}>• Manage tables & gifts 🎁</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2F',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  option: {
    fontSize: 18,
    color: 'white',
    marginVertical: 10,
  },
});
