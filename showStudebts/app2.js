import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
  getDocs 
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







const addstudents=()=>{
    window.location ="/showStudebts/addstudents/add.html"
}
const createclass=()=>{
    window.location ="/showStudebts/createClass/crClass.html"
}
const availablestudents=()=>{
    window.location ="/showStudebts/availableStudents/regesterdstudents.html"
}
const attendence=()=>{
    window.location ="/showStudebts/attendence/attendence.html"
}




let classesavailabletr = document.getElementById("classesavailabletr")
const querySnapshot = await getDocs(collection(db, "Classes"));
querySnapshot.forEach((doc) => {
    classesavailabletr.innerHTML +=`
    <tr>
    <td>${doc.data().batchNumber}</td>
    <td>${doc.data().classTiming}</td>
    <td>${doc.data().courseName}</td>
    <td>${doc.data().teacherName}</td>
    <td>${doc.data().scetionName}</td>
    <td><button onclick="edits('${event}')">Update</button></td>
</tr>
    `
  console.log(doc.id, " => ", doc.data());
});

const edits=(event)=>{
    console.log(event.target.parentNode )
}

window.edits=edits
window.addstudents=addstudents
window.createclass=createclass
window.availablestudents=availablestudents
window.attendence=attendence
