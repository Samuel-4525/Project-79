import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCBuRqlx0WCvwLV9HBP9GcKGR0K8gziXB8",
    authDomain: "elibrary-42990.firebaseapp.com",
    projectId: "elibrary-42990",
    storageBucket: "elibrary-42990.appspot.com",
    messagingSenderId: "277951820791",
    appId: "1:277951820791:web:5f84853f533f0bff3af4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;



