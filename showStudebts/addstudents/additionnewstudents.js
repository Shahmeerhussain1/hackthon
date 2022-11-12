import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
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

let name = document.getElementById("name");
let fathername = document.getElementById("fathername");
let rollno = document.getElementById("rollno");
let contact = document.getElementById("contact");
let cnic = document.getElementById("cnic");
let poto = document.getElementById("poto");
let coursename = document.getElementById("coursename");
let classname = document.getElementById("classname");
let Createnewstudentbtn = document.getElementById("Createnewstudentbtn");
let main_loader = document.getElementById("main_loader");
let Gfather = document.getElementById("Gfather");

main_loader;

let getsurl = (lo, file) => {
  return new Promise(function (reject, resolve) {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${lo}.jpg`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};

Createnewstudentbtn.addEventListener("click", async () => {
  if (name.value) {
    if (fathername.value) {
      if (rollno.value) {
        if (contact.value) {
          if (cnic.value) {
            if (poto.files.length == 1) {
              if (coursename.value) {
                if (classname.value) {
                  main_loader.style.display = "block";
                  Gfather.style.display = "none";
                  // let potourl = await getsurl(rollno.value, poto.files[0]);
                  // console.log(potourl)
                  const docRef = await addDoc(collection(db, "Students"), {
                    Name: name.value,
                    Fathername: fathername.value,
                    rollno: rollno.value,
                    contact: contact.value,
                    cnic: cnic.value,
                    // photo: potourl,
                    coursename: coursename.value,
                    classname: classname.value,
                  });
                  name.value = "";
                  fathername.value = "";
                  rollno.value = "";
                  contact.value = "";
                  cnic.value = "";
                  coursename.value = "";
                  classname.value = "";
                  main_loader.style.display = "none";
                  Gfather.style.display = "block";
                } else {
                  swal("Invalid Inptus");
                }
              } else {
                swal("Invalid Inptus");
              }
            } else {
              swal("Invalid Inptus");
            }
          } else {
            swal("Invalid Inptus");
          }
        } else {
          swal("Invalid Inptus");
        }
      } else {
        swal("Invalid Inptus");
      }
    } else {
      swal("Invalid Inptus");
    }
  } else {
    swal("Invalid Inptus");
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
