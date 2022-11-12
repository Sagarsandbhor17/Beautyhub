// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0DCqiqnSMRuF4mSwNcn5xj54TCDkRVyo",
  authDomain: "butyhub-auth.firebaseapp.com",
  projectId: "butyhub-auth",
  storageBucket: "butyhub-auth.appspot.com",
  messagingSenderId: "1030812919088",
  appId: "1:1030812919088:web:b0ac8657fe2b9523d1d4f5",
  measurementId: "G-LV1MWRTLSR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);