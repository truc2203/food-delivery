import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfK0HWwaTaDmGq1TXJ8VkfJSJLUdYB3A0",
  authDomain: "food-delivery-52eb6.firebaseapp.com",
  databaseURL: "https://food-delivery-52eb6-default-rtdb.firebaseio.com",
  projectId: "food-delivery-52eb6",
  storageBucket: "food-delivery-52eb6.appspot.com",
  messagingSenderId: "715524347737",
  appId: "1:715524347737:web:c3937b3a5df05559ddde48"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, storage, firestore };
