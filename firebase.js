import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyABvKDpZy0z4KidRezYlnEUkw08WRGBmvk',
  authDomain: 'whatsapp-home-cooked.firebaseapp.com',
  projectId: 'whatsapp-home-cooked',
  storageBucket: 'whatsapp-home-cooked.appspot.com',
  messagingSenderId: '137434870602',
  appId: '1:137434870602:web:b51061c2e1eddf161e87b3',
};

// For SSR, to prevent reinitialize app
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
