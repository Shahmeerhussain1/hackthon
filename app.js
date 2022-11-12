import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
const firebaseConfig = {
    apiKey: "AIzaSyDLKj-Fn3cXnTZDfRcOPD_0br5LY5lAVfY",
    authDomain: "hackthon-e942f.firebaseapp.com",
    projectId: "hackthon-e942f",
    storageBucket: "hackthon-e942f.appspot.com",
    messagingSenderId: "502664678458",
    appId: "1:502664678458:web:1e5c7a7951cde2723f3903"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let Signemail = document.getElementById("Signemail")
let Signpasswrd = document.getElementById("Signpasswrd")
let Signinbtn = document.getElementById("Signinbtn")

Signinbtn.addEventListener("click", () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, Signemail.value, Signpasswrd.value)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location = "/showStudebts/show.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
})

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;

//   } else {
 
//   }
// });

window.Signinbtn = Signinbtn