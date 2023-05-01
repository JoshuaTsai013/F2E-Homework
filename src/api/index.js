import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, orderBy, query } from "firebase/firestore";
import images from "../json/images.json";

const firebaseConfig = {
    apiKey: "AIzaSyB7iAprueEeNtH5de0YYcpQnBer0ouvEjM",
    authDomain: "react-course-wk1.firebaseapp.com",
    projectId: "react-course-wk1",
    storageBucket: "react-course-wk1.appspot.com",
    messagingSenderId: "785075164927",
    appId: "1:785075164927:web:3fbcb1d935ac64cf70deca",
    measurementId: "G-GQ4GLG28NW"
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
        await result.push(image.data());
    });
    return result;
}