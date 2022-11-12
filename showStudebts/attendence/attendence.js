import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import {
  doc,
  setDoc,
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
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

let file = document.getElementById("file");
let search = document.getElementById("search");
let rno = document.getElementById("rno");
search.addEventListener("click", async () => {
  const q = query(collection(db, "Students"), where("rollno", "==", rno.value));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id);
    console.log(doc.id, " => ", doc.data());

    if (doc.id) {
      file.innerHTML = `  <hr><hr> <div id="foto">
  <img src="/imgs/pr.jpg" alt="">
</div>
<div class="sameuppertop"> 

<div class="sametop">
<table class="tdflx">
<tr>
    <td>NAME</td>
    <td>${doc.data().Name}</td>
</tr>
<tr>
    <td>FATHER NAME</td>
    <td>${doc.data().Fathername}</td>
</tr>
<tr>
    <td>CNIC</td>
    <td>${doc.data().cnic}</td>
</tr>
<tr>
    <td>CLASS</td>
    <td>${doc.data().classname}</td>
</tr><tr>
<td>COURSE</td>
<td>${doc.data().coursename}</td>
</tr>
<tr>
<td>ROLL NO</td>
<td>${doc.data().rollno}</td>
</tr>
<tr>
<td>Attendence</td>
<td>
<form >
  <input type="checkbox" id="AB" name="AB" value="AB">
  <label for="AB"> AB</label>
  <input type="checkbox" id="PR" name="PR" value="PR">
  <label for="PR">PR</label>
  <input type="checkbox" id="LE" name="LE" value="LE">
  <label for="LE">LE</label>
  <input type="checkbox" id="LA" name="LA" value="LA">
  <label for="LA">LA</label>
</form>
</td></tr>
<tr id="hid"><td><input type="text" placeholder="enter passward" id="spass"></td><td><button onclick="chkpass(${
        doc.data().rollno
      })">Check</button></td></tr>
<tr><th><button class="subbtn" onclick="atten(${
        doc.data().rollno
      })">Submit</button></th></tr>
</table>`;
    } else {
      swal("Not Found");
    }
  });
});
const atten = async (no) => {
  let chk;
  let ab = document.getElementById("AB");
  let PR = document.getElementById("PR");
  let LE = document.getElementById("LE");
  let LA = document.getElementById("LA");
  let hid = document.getElementById("hid");

  if (ab.checked) {
    chk = ab.value;
  }
  if (PR.checked) {
    chk = PR.value;
  }
  if (LE.checked) {
    chk = LE.value;
  }
  if (LA.checked) {
    chk = LA.value;
  }
  console.log(chk);
  if (chk.value !== "LE") {
    await setDoc(doc(db, "Attendence", no), {
      Date: new Date(),
      Remarks: chk.value,
    });
  } else {
    hid.style.display = "block";
  }
};

const chkpass = async (nos) => {
  let spass = document.getElementById("spass");
  if (spass.value == "123456") {
    await setDoc(doc(db, "Attendence", nos), {
      Date: new Date(),
      Remarks: "LE",
    });
    location.reload();
  }
};
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
const back = () => {
  window.location = "/showStudebts/show.html";
};
window.back = back;
window.atten = atten;
window.chkpass = chkpass;
