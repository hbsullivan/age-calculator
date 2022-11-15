import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './../src/age.js';


function handleSubmission(event) {
  event.preventDefault();
  document.getElementById('error-id').setAttribute("class", "error");
  document.querySelector('#mercury').innerText = null;
  document.querySelector('#venus').innerText = null;
  document.querySelector('#mars').innerText = null;
  document.querySelector('#jupiter').innerText = null;
  let years = document.getElementById("age").value;
  let expectancy = document.getElementById("expectancy").value;
  let age = new Age(years, expectancy);
  if(years > expectancy) {
    document.querySelector('#mercury').innerText =`You are ${age.mercury()} years old on Mercury and you have lived ${age.mercuryEx()} years past your life expectancy.`;

    document.querySelector('#venus').innerText =`You are ${age.venus()} years old on Venus and you have lived ${age.venusEx()} years past your life expectancy.`;

    document.querySelector('#mars').innerText =`You are ${age.mars()} years old on Mars and you have lived ${age.marsEx()} years past your life expectancy.`;

    document.querySelector('#jupiter').innerText =`You are ${age.jupiter()} years old on Jupiter and you have lived ${age.jupiterEx()} years past your life expectancy.`;
  }else if (years < expectancy){
    document.querySelector('#mercury').innerText =`You are ${age.mercury()} years old on Mercury and you have ${age.mercuryEx()} years left to explore.`;

    document.querySelector('#venus').innerText =`You are ${age.venus()} years old on Venus and you have ${age.venusEx()} years left to explore.`;

    document.querySelector('#mars').innerText = `You are ${age.mars()} years old on Mars and you have ${age.marsEx()} years left to explore.`;

    document.querySelector('#jupiter').innerText = `You are ${age.jupiter()} years old on Jupiter and you have ${age.jupiterEx()} years left to explore.`;
  }else{
    document.querySelector('#mercury').innerText = null;
    document.querySelector('#venus').innerText = null;
    document.querySelector('#mars').innerText = null;
    document.querySelector('#jupiter').innerText = null;
    document.getElementById('error-id').removeAttribute("class");
  }
}

window.addEventListener("load", function() {
  document.querySelector("#age-form").addEventListener("submit", handleSubmission);
});