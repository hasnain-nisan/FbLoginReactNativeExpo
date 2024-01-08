import { initializeApp } from 'firebase/app';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBFqvmmPHWYIaVBapNNGCtmfmYxh8lDCrs",
    authDomain: "expofblogin-870c9.firebaseapp.com",
    projectId: "expofblogin-870c9",
    storageBucket: "expofblogin-870c9.appspot.com",
    messagingSenderId: "418443399145",
    appId: "1:418443399145:web:1fa16b2dda444167d88578"
};

const app = initializeApp(firebaseConfig);

export default app;
