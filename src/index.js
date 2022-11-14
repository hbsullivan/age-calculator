import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './../src/age.js';


function handleSubmission() {
  event.preventDefault();
  document.querySelector('#mercury').innerText = null;
  document.querySelector('#venus').innerText = null;
  document.querySelector('#mars').innerText = null;
  document.querySelector('#jupiter').innerText = null;
  let years = document.getElementById("age").value;
  let expectancy = document.getElementById("expectancy").value;
  let age = new Age(years, expectancy);
}

window.addEventListener("load", function() {
  document.querySelector("#age-form").addEventListener("submit", handleSubmission);
});