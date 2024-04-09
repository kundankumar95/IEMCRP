import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword
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

function generateCaptcha() {
  const captchaValue = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
  const operand1 = Math.floor(Math.random() * 9) + 1;
  const operand2 = Math.floor(Math.random() * 9) + 1;
  const operator = Math.random() < 0.5 ? '+' : '-';
  const captchaExpression = `${operand1} ${operator} ${operand2}`;
  const result = operator === '+' ? operand1 + operand2 : operand1 - operand2;
  
  document.getElementById('captcha-expression').textContent = captchaExpression;
  
  return { expression: captchaExpression, value: result };
}

// Function to validate captcha
function validateCaptcha() {
  const userAnswer = document.getElementById('captcha').value;
  const captchaValue = generateCaptcha().value;

  if (parseInt(userAnswer) === captchaValue) {
      console.log('Captcha Matched!');
      return true;
  } else {
      console.log('Captcha Does Not Match!');
      return false;
  }
}

const submit = document.getElementById('user-input');
submit.addEventListener('click', function (event) {
  event.preventDefault();
  const email = document.getElementById('Username').value;
  const password = document.getElementById('password').value;
  const captchaValid = validateCaptcha();

  if (captchaValid) {
      signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              const user = userCredential.user;
              alert('Logging In...');
              window.location.href = 'student.html';
          })
          .catch((error) => {
              const errorMessage = error.message;
              alert(errorMessage);
          });
  } else {
      alert('Captcha verification failed.');
  }
});

// Generate captcha on page load
window.onload = generateCaptcha;
