import { initializeApp } from "firebase/app";

// AUTH UTILS METHODS
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// FIRESTORE UTILS METHODS
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";

// FIREBASE INSTANCE CONFIG
const firebaseConfig = {
  apiKey: "AIzaSyBPrOq5qVmIfxYS-w_pNMMlyefB5fnyq5k",
  authDomain: "acoa-db.firebaseapp.com",
  projectId: "acoa-db",
  storageBucket: "acoa-db.appspot.com",
  messagingSenderId: "501455669791",
  appId: "1:501455669791:web:eb12cce3c99a0dcb7b632a",
};
// INSTANTIATING THE FIREBASE
const FirebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
export const db = getFirestore();

// export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);
//   objectToAdd.forEach((object) => {
//     const docRef = doc(collectionRef, object.title.toLowerCase());
//     batch.set(docRef, object);
//   });

//   await batch.commit();
//   console.log("done");
// };

export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);

export const createUserDocFromAuth = async (userAuth, name) => {
  const userRef = doc(db, "users", userAuth.uid);
  const userDoc = await getDoc(userRef);
  // create new user if user doesn't exist
  if (!userDoc.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userRef, {
        displayName: displayName ? displayName : name,
        email,
        createAt,
      });
    } catch (error) {
      console.log("there was a problem creating user", error.message);
    }
    return await getDoc(userRef);
  }
  return userDoc;
};

// FUNCTIONS EXPORTS
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const AuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const userSignOut = async () => {
  return await signOut(auth);
};

export const getCategoriesAndDocs = async () => {
  const categoriesRef = collection(db, "categories");
  const q = query(categoriesRef);
  const categoriesSnapShot = await getDocs(q);
  const categoryMap = categoriesSnapShot.docs.reduce((acc, snapShot) => {
    const { items, title } = snapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;
};
export const onAuthChangeListerner = (callback) =>
  onAuthStateChanged(auth, callback);
