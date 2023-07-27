import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjERsUbqnao8OkX0ewX3RI5E9C_P7n7og",
  authDomain: "repo-8eaaf.firebaseapp.com",
  projectId: "repo-8eaaf",
  storageBucket: "repo-8eaaf.appspot.com",
  messagingSenderId: "163425926469",
  appId: "1:163425926469:web:63810a1fcfdf0c46e6522c",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

const githubProvider = new GithubAuthProvider(); // Create a new instance of GitHubAuthProvider

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const signInWithGitHubPopup = () =>
  signInWithPopup(auth, githubProvider); // Add this function to sign in with GitHub using popup
export const signInWithGitHubRedirect = () =>
  signInWithRedirect(auth, githubProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
