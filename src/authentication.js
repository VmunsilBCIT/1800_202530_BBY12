// src/authentication.js
// ------------------------------------------------------------
// Firebase Auth + Firestore userID creation (COMP1800 project)
// Development-friendly version with write confirmation
// ------------------------------------------------------------

import { auth } from "/src/firebaseConfig.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const db = getFirestore(); // Firestore instance

// --- Generate a random 8-digit numeric code
function generate8DigitCode() {
  return Math.floor(10000000 + Math.random() * 90000000);
}

// --- Ensure code is unique in Firestore
async function generateUniqueUserID() {
  let isUnique = false;
  let newCode;
  while (!isUnique) {
    newCode = generate8DigitCode();
    const q = query(collection(db, "userIDs"), where("userID", "==", newCode));
    const snapshot = await getDocs(q);
    if (snapshot.empty) isUnique = true;
  }
  return newCode;
}

// -------------------------------------------------------------
// loginUser(email, password) with Firestore userID creation
// -------------------------------------------------------------
export async function loginUser(email, password) {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  const userDocRef = doc(db, "userIDs", user.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const newUserID = await generateUniqueUserID();
    await setDoc(userDocRef, {
      userID: newUserID,
      email: user.email,
      createdAt: new Date(),
    });
    console.log(`✅ New userID created for ${user.email}: ${newUserID}`);
  } else {
    console.log(
      `ℹ️ Existing userID for ${user.email}: ${userDocSnap.data().userID}`
    );
  }

  // Wait a short moment to ensure Firestore write completes before redirect
  await getDoc(userDocRef);

  return userCredential;
}

// -------------------------------------------------------------
// signupUser(name, email, password) with Firestore userID creation
// -------------------------------------------------------------
export async function signupUser(name, email, password) {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  await updateProfile(user, { displayName: name });

  const userDocRef = doc(db, "userIDs", user.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const newUserID = await generateUniqueUserID();
    await setDoc(userDocRef, {
      userID: newUserID,
      email: user.email,
      createdAt: new Date(),
    });
    console.log(`✅ New userID created for ${user.email}: ${newUserID}`);
  } else {
    console.log(
      `ℹ️ Existing userID for ${user.email}: ${userDocSnap.data().userID}`
    );
  }

  // Wait a short moment to ensure Firestore write completes before redirect
  await getDoc(userDocRef);

  return user;
}

// -------------------------------------------------------------
// logoutUser()
// -------------------------------------------------------------
export async function logoutUser() {
  await signOut(auth);
  window.location.href = "index.html";
}

// -------------------------------------------------------------
// checkAuthState()
// -------------------------------------------------------------
export function checkAuthState() {
  onAuthStateChanged(auth, (user) => {
    if (window.location.pathname.endsWith("main.html")) {
      if (user) {
        const displayName = user.displayName || user.email;
        $("#welcomeMessage").text(`Hello, ${displayName}!`);
      } else {
        window.location.href = "index.html";
      }
    }
  });
}

// -------------------------------------------------------------
// onAuthReady(callback)
// -------------------------------------------------------------
export function onAuthReady(callback) {
  return onAuthStateChanged(auth, callback);
}

// -------------------------------------------------------------
// authErrorMessage(error)
// -------------------------------------------------------------
export function authErrorMessage(error) {
  const code = (error?.code || "").toLowerCase();
  const map = {
    "auth/invalid-credential": "Wrong email or password.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/user-not-found": "No account found with that email.",
    "auth/wrong-password": "Incorrect password.",
    "auth/too-many-requests": "Too many attempts. Try again later.",
    "auth/email-already-in-use": "Email is already in use.",
    "auth/weak-password": "Password too weak (min 6 characters).",
    "auth/missing-password": "Password cannot be empty.",
    "auth/network-request-failed": "Network error. Try again.",
  };
  return map[code] || "Something went wrong. Please try again.";
}
