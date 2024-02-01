// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)

// -------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLPWo3f5jelZNoNrxPM4Bvzo5Nlm5JhUk",
  authDomain: "aircnc-d5493.firebaseapp.com",
  projectId: "aircnc-d5493",
  storageBucket: "aircnc-d5493.appspot.com",
  messagingSenderId: "470350507408",
  appId: "1:470350507408:web:0fefc8602511ecfb221715",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
