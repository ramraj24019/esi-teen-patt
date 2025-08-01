import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmResult, setConfirmResult] = useState(null);
  const [user, setUser] = useState(null);

  const sendOtp = () => {
    firebase.auth().signInWithPhoneNumber('+91' + phone)
      .then(result => {
        setConfirmResult(result);
        Alert.alert("OTP Sent", "Please check your phone.");
      })
      .catch(error => Alert.alert("Error", error.message));
  };

  const verifyOtp = () => {
    if (confirmResult && otp.length === 6) {
      confirmResult.confirm(otp)
        .then(user => {
          setUser(user);
        })
        .catch(error => Alert.alert("Error", error.message));
    }
  };

  if (user) {
    if (user.phoneNumber === '+918758337482') {
      return (
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 22 }}>👑 Admin Panel</Text>
          {/* Admin features here */}
        </View>
      );
    } else {
      return (
        <View style={{ padding: 20 }}>
          <Text style={{ fontSize: 22 }}>🎮 Welcome to Desi Teen Patti!</Text>
          {/* Main game UI here */}
        </View>
      );
    }
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20 }}>📲 Phone Login</Text>
      <TextInput
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      {confirmResult ? (
        <>
          <TextInput
            placeholder="Enter OTP"
            keyboardType="number-pad"
            value={otp}
            onChangeText={setOtp}
            style={{ borderBottomWidth: 1, marginBottom: 10 }}
          />
          <Button title="Verify OTP" onPress={verifyOtp} />
        </>
      ) : (
        <Button title="Send OTP" onPress={sendOtp} />
      )}
    </View>
  );
                     }
