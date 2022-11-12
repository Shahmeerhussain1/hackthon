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

let getsurl = (loc , file) => {
  return (new Promise(function (reject, resolve) {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${loc}.jpg`);
    
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        reject(error)
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL)
          console.log('File available at', downloadURL);
        });
      }
    );
      }
    ))}

Createnewstudentbtn.addEventListener("click", async () => {
  if (name) {
    if (fathername.value) {
      if (rollno.value) {
        if (contact.value) {
          if (cnic.value) {
            if (poto.files.length == 1) {
              if (coursename.value) {
                if (classname.value) {
                  console.log( poto.files[0])

                  let potourl = await getsurl(rollno.value, poto.files[0]);
                  console.log(potourl)
                //   await setDoc(doc(db, "Students", rollno.value), {
                //     name: name.value,
                //     fathername: fathername.value,
                //     rollno: rollno.value,
                //     contact: contact.value,
                //     cnic: cnic.value,
                //     photo: potourl,
                //     coursename: coursename.value,
                //     classname: classname.value,
                //   });
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
