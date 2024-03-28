
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCmNixPR_L9o-bcDqS3j1_ls1VoOeAGPrs",
  authDomain: "dashboard-auth-7761a.firebaseapp.com",
  projectId: "dashboard-auth-7761a",
  storageBucket: "dashboard-auth-7761a.appspot.com",
  messagingSenderId: "734077604164",
  appId: "1:734077604164:web:5527061b4096850fd44711",
  measurementId: "G-0639BZ03SR"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth()