function ShowTime() {
  const CurrentTime = new Date();
  const time = `${CurrentTime.getHours()}:${CurrentTime.getMinutes()}:${CurrentTime.getSeconds()}`;
  console.log(time);
  document.getElementById("time").innerHTML = time;
}

function ShowCurrentDate() {
  const currentDate = new Date();
  const dateString = currentDate.toDateString();
  document.getElementById("date").innerText = dateString;
}
setInterval(ShowTime, 1000);
ShowCurrentDate();

// student page
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAjI7Az7ahAGINgmVKWHlQKugwB-JN3Gik",
  authDomain: "iemcrp2.firebaseapp.com",
  projectId: "iemcrp2",
  storageBucket: "iemcrp2.appspot.com",
  messagingSenderId: "517382770261",
  appId: "1:517382770261:web:334ab1105ea147ca45cedc",
  measurementId: "G-T3PT0GG9JK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const submit = document.getElementById("user-input");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  const email = document.getElementById("Username").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Creating your account...");
      window.location.href = "student.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});
const option_btn = document.getElementById("option");
