import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import dp from './logo.png'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN3ssodi2CUURYdyEjrewjmcPabXTrWfk",
  authDomain: "classroom-dfcd4.firebaseapp.com",
  projectId: "classroom-dfcd4",
  storageBucket: "classroom-dfcd4.appspot.com",
  messagingSenderId: "822141959691",
  appId: "1:822141959691:web:db33c23b238c28b182910e",
  measurementId: "G-RV03SDQP48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Header=()=>{
  return <header className='center' >
      <h1 className='center'>Classroom</h1>
      <span className='center'>
      <a className='blue-btn center'>Create Class</a>
      <img src={dp} height='40vh'></img>
      </span>
    </header>
}

reportWebVitals();
ReactDOM.render(
  <React.StrictMode>
      <Header/>
  </React.StrictMode>,
  document.getElementById('root')
);


