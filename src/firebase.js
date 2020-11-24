import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
        apiKey: "AIzaSyDQ3mQ6A7usjIxmCI7deXVUpNrHzBfr-J0",
        authDomain: "ipcgbm.firebaseapp.com",
        databaseURL: "https://ipcgbm.firebaseio.com",
        projectId: "ipcgbm",
        storageBucket: "ipcgbm.appspot.com",
        messagingSenderId: "717148824102",
        appId: "1:717148824102:web:59773cbe25b790a5e53ce7",
        measurementId: "G-JBC1WQHVYT"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore()
  const auth = app.auth()

  export { auth, db }