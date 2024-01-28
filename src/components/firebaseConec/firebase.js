import { getDatabase, ref } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCLd5Mjs8VqshO5fTz_8boJP2GUOOgmif8",
    authDomain: "calidadaire-5847f.firebaseapp.com",
    databaseURL: "https://calidadaire-5847f-default-rtdb.firebaseio.com",
    projectId: "calidadaire-5847f",
    storageBucket: "calidadaire-5847f.appspot.com",
    messagingSenderId: "133282920311",
    appId: "1:133282920311:web:ac165894b504f6b16d1372",
    measurementId: "G-H5GGJW9NNM"
  };
  
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const dataAnalogRead = ref(db, '/alcohol/analog');
  export const dataAlcohol = ref(db, '/alcohol/porcentaje'); 
  // export const dataSensor  = ref(db, '/vibracion/all'); 
  export const dataSensor = ref(db, '/switch/normal'); 
  export const senUltr = ref(db, '/ultrasonido/distanci'); 

  


  
