import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCkDsDYkzqkpjCJWCVdboOlb0uSWnketMo",
  authDomain: "crwn-db-live.firebaseapp.com",
  projectId: "crwn-db-live",
  storageBucket: "crwn-db-live.appspot.com",
  messagingSenderId: "454160482090",
  appId: "1:454160482090:web:4904e281272fe03330a853",
  measurementId: "G-GKM3VC56RX",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
