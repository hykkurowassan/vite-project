import { createApp } from 'vue';
import App from './App.vue';
import VueRouter from "./router/index";

import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3plVs_YQRLNXhd1tAEJQk3h0FxBy7X7A",
  authDomain: "vite-project-43c71.firebaseapp.com",
  projectId: "vite-project-43c71",
  storageBucket: "vite-project-43c71.appspot.com",
  messagingSenderId: "410414111307",
  appId: "1:410414111307:web:ff190a3eb095cd88d9cbce"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

createApp(App).use(VueRouter).mount('#app');

