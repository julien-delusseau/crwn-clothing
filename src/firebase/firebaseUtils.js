import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

firebase.initializeApp({
  apiKey: 'AIzaSyAmLQbUw7-WuLjq9zbb-37esYVf-r1Y8fU',
  authDomain: 'crwn-db-8a306.firebaseapp.com',
  databaseURL: 'https://crwn-db-8a306.firebaseio.com',
  projectId: 'crwn-db-8a306',
  storageBucket: 'crwn-db-8a306.appspot.com',
  messagingSenderId: '36463042616',
  appId: '1:36463042616:web:c740b4d3c9315751ee86cd'
})

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
