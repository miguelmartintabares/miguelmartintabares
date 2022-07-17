// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDAYRNdreWsRxAI_jEyVwHl1Ukp1RSYWHE",
    authDomain: "taborinrugby-62012.firebaseapp.com",
    projectId: "taborinrugby-62012",
    storageBucket: "taborinrugby-62012.appspot.com",
    messagingSenderId: "1031025634466",
    appId: "1:1031025634466:web:d1bfb8340ec42a32b93bfb",
    measurementId: "G-D3N6LGQLNK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getfirestore(app)
export const auth=getAuth(app)
const analytics = getAnalytics(app);
