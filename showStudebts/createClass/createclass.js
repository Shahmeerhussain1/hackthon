import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyDTgpzAlC6sszJY9uSrWOqzewgp86K6GLg",
  authDomain: "data-64504.firebaseapp.com",
  projectId: "data-64504",
  storageBucket: "data-64504.appspot.com",
  messagingSenderId: "870525670816",
  appId: "1:870525670816:web:9eba97f0cd3c6601d380c5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let classTiming = document.getElementById("classTiming");
let teacherName = document.getElementById("teacherName");
let scetionName = document.getElementById("scetionName");
let courseName = document.getElementById("courseName");
let batchNumber = document.getElementById("batchNumber");
let main_loader = document.getElementById("main_loader");
let alllllmain = document.getElementById("alllllmain");

let Createclassbtn = document.getElementById("Createclassbtn");
Createclassbtn.addEventListener("click", async () => {
  if (classTiming.value) {
    if (teacherName.value) {
      if (scetionName.value) {
        if (courseName.value) {
          if (batchNumber.value) {
            alllllmain.style.display = "none";
            main_loader.style.display = "block";
            const docRef = await addDoc(collection(db, "Classes"), {
              classTiming: classTiming.value,
              teacherName: teacherName.value,
              scetionName: scetionName.value,
              courseName: courseName.value,
              batchNumber: batchNumber.value,
            });
            classTiming.value = "";
            teacherName.value = "";
            scetionName.value = "";
            courseName.value = "";
            batchNumber.value = "";
            main_loader.style.display = "none";
            alllllmain.style.display = "block";
          } else {
            swal("Invalid inputs");
          }
        } else {
          swal("Invalid inputs");
        }
      } else {
        swal("Invalid inputs");
      }
    } else {
      swal("Invalid inputs");
    }
  } else {
    swal("Invalid inputs");
  }
});
const addstudents = () => {
  window.location = "/showStudebts/addstudents/add.html";
};
const createclass = () => {
  window.location = "/showStudebts/createClass/crClass.html";
};
const availablestudents = () => {
  window.location = "/showStudebts/availableStudents/regesterdstudents.html";
};
const attendence = () => {
  window.location = "/showStudebts/attendence/attendence.html";
};
window.addstudents = addstudents;
window.createclass = createclass;
window.availablestudents = availablestudents;
window.attendence = attendence;