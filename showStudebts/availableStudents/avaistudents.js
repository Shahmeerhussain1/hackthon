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




let Showstutable = document.getElementById("Showstutable")

const querySnapshot = await getDocs(collection(db, "Students"));
querySnapshot.forEach((doc) => {
 Showstutable.innerHTML +=`<tr>
<td>${doc.data().Name}</td>
<td>${doc.data().Fathername}</td>
<td>${doc.data().classname}</td>
<td>${doc.data().contact}</td>
<td>${doc.data().cnic}</td>
<td>${doc.data().coursename}</td>
<td>${doc.data().rollno}</td>
<td><button id="delbtn" onclick="deletess('${doc.id}')">Delete</button></td>
<td><button id="delbtn" onclick="upd('${doc.id}')">update</button></td>
</tr>`
});

const deletess = async (ids) => {
    await deleteDoc(doc(db, "Students", ids));
    location.reload();
  };
const upd=(did)=>{
    swal("Under Construction")
}

window.deletess =deletess
window.upd =upd

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
const back=()=>{
  window.location="/showStudebts/show.html"
}
window.back=back