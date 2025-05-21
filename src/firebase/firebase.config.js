
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.ITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId
// };


// export const app = initializeApp(firebaseConfig);



// Import the functions you need from the SDKs you need



import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX_Cf8IeBxa5I_fNCDnyFmoljvzK2dc3I",
  authDomain: "miniproject-8beea.firebaseapp.com",
  projectId: "miniproject-8beea",
  storageBucket: "miniproject-8beea.firebasestorage.app",
  messagingSenderId: "649725080083",
  appId: "1:649725080083:web:dc1c30295c3a967cf645e6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);