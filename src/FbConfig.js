
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyBmxeS5hTi5FoWwyPsqn7dTr9FhbMX2Ook",
  authDomain: "reactfbapp-14f2c.firebaseapp.com",
  databaseURL: "https://reactfbapp-14f2c-default-rtdb.firebaseio.com",
  projectId: "reactfbapp-14f2c",
  storageBucket: "reactfbapp-14f2c.appspot.com",
  messagingSenderId: "1017806774833",
  appId: "1:1017806774833:web:bbe3f655c1eada2e1b2b10"
};


const app = initializeApp(firebaseConfig);
export default app;