import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBlbNZBZ6x7SNMWibj3-OsRJQar9jU-RY",
  authDomain: "desi-teen-patti-c4639.firebaseapp.com",
  projectId: "desi-teen-patti-c4639",
  storageBucket: "desi-teen-patti-c4639.appspot.com",
  messagingSenderId: "180751656786",
  appId: "1:180751656786:web:072f4172bda32d88d1de97",
  measurementId: "G-ZILYJBV58G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };
