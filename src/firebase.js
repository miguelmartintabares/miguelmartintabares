// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { v4 } from "uuid"

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
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)

export async function uploadFile(file, name){
    const storageRef = ref(storage,name)
    await uploadBytes(storageRef, file )
    const url = await getDownloadURL(storageRef)
    return url
}
