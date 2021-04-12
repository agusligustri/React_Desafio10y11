import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA0CRCTVgQ3xLOuEe0iIjQO6-9l1_AEnQM",
  authDomain: "agustinligustri-3deeb.firebaseapp.com",
  projectId: "agustinligustri-3deeb",
  storageBucket: "agustinligustri-3deeb.appspot.com",
  messagingSenderId: "673965353426",
  appId: "1:673965353426:web:5ead19a6106ff918f4c00b"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
