// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAes4fnr-6E8wlhLw8vLePeGzBsAkoPtho",
    authDomain: "netflix-7048d.firebaseapp.com",
    projectId: "netflix-7048d",
    storageBucket: "netflix-7048d.appspot.com",
    messagingSenderId: "574617545548",
    appId: "1:574617545548:web:77baa1b3bed036408fbde9"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
// getApps() - A (read-only) array of all initialized apps.
// getApp() - Retrieves a FirebaseApp instance.

const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }