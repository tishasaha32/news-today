import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcClfBUlSW43eAfBW--CRYwU_kSZ46KtU",
  authDomain: "news-22cea.firebaseapp.com",
  projectId: "news-22cea",
  storageBucket: "news-22cea.appspot.com",
  messagingSenderId: "901203519698",
  appId: "1:901203519698:web:804eb69126f5070cb5650b",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;
