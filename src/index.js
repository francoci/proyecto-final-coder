import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALD49rU1hFnyW5SOB_-fwqL4JK3uwoHJs",
  authDomain: "reactcoder31860.firebaseapp.com",
  projectId: "reactcoder31860",
  storageBucket: "reactcoder31860.appspot.com",
  messagingSenderId: "701230108790",
  appId: "1:701230108790:web:c2120a4c202e68e276cf57"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const rootElement = document.getElementById("root"); 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
