import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";
// import images from "../json/images.json";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APPID
}
const app_length = getApps().length > 0;
const app = app_length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
// REFERENCE COLLECTION

const imagesCollection = collection(db, "images");
const q = query(imagesCollection, orderBy('id', 'asc'))

export const getImages = async () => {
    const querySnapshot = await getDocs(q);
    //convert thr query to a json array.
    let result = [];
    querySnapshot.forEach(async (image) => {
        result.push(image.data());
    });
    return result;
}