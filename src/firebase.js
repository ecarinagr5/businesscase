import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
      apiKey: "AIzaSyB8FkCW0mTFwIKadWtzK1SkhX8lPjBJRbw",
      authDomain: "businesscase-c8201.firebaseapp.com",
      projectId: "businesscase-c8201",
      storageBucket: "businesscase-c8201.appspot.com",
      messagingSenderId: "931800214158",
      appId: "1:931800214158:web:4fe27ae0104283a8f0b7df"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore()
  const auth = app.auth()

  export { auth, db }