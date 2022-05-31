import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDRM62lJMYm7iAxItyrjmtszSOkBHw0tMw',
  authDomain: 'blog-app-6d606.firebaseapp.com',
  projectId: 'blog-app-6d606',
  storageBucket: 'blog-app-6d606.appspot.com',
  messagingSenderId: '1036484480735',
  appId: '1:1036484480735:web:c22471785ba0e6264a636a',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
