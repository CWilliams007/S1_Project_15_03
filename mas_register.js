"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author:  Chad Williams
   Date:    4.18.19
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

// on load runs anonymous function
window.addEventListener('load', function () {
      // runs calcCart function
      calcCart();
      var regSubmit = document.getElementById("regSubmit");
      // onblur and onChange for any of these elements it will run calcCart
      regSubmit.addEventListener('onclick', sessionTest());
      // var input = document.querySelectorAll('#fnBox, #lnBox, #groupBox, #mailBox, #phoneBox, #banquetBox');
      document.querySelector('#fnBox').onblur = calcCart;
      document.querySelector('#lnBox').onblur = calcCart;
      document.querySelector('#groupBox').onblur = calcCart;
      document.querySelector('#mailBox').onblur = calcCart;
      document.querySelector('#phoneBox').onblur = calcCart;
      document.querySelector('#banquetBox').onblur = calcCart;
      // console.log(input);
      // input.onblur = calcCart;
      console.log(document.getElementById("sessionBox"))
      document.getElementById("sessionBox").onchange = calcCart;
      document.getElementById("mediaCB").onclick = calcCart;
})

// tests if a option in the session box has been selected, sets custom error message 
function sessionTest() {
      var sessionBox = document.getElementById("sessionBox");
      if (sessionBox.selectedIndex === -1) {
            sessionBox.setCustomValidity("Select a Session Package");
      } else {
            sessionBox.setCustomValidity("");
      }
}


function calcCart() {
      console.log("123");
      // sets sessionStorage items so they can be called on a different js document in the same session
      sessionStorage.setItem("confName", document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value);
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value);
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value);
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value);
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value);
      sessionStorage.setItem("confBanquetCost", sessionStorage.getItem("confBanquet" * 55));

      // sets custom error messages
      if (sessionBox.selectedIndex != -1) {
            var confSession = sessionBox[sessionBox.selectedIndex].text;
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;
      } else {
            confSession = "";
            confSessionCost = 0;
      }

      // sets radio buttons effects if it is checked
      sessionStorage.setItem("mediaCB", document.getElementById("mediaCB"));
      if (sessionStorage.getItem("mediaCB").checked) {
            sessionStorage.setItem("confPack", "yes");
            sessionStorage.setItem("confPackCost", 115);
      } else {
            sessionStorage.setItem("confPack", "no");
            sessionStorage.setItem("confPackCost", 0);
      }

      // runs writeSessionValues function and parses the numbers from the cost variables for the total cost.
      sessionStorage.setItem("confTotal", parseFloat(sessionStorage.getItem("confBanquetCost")) + parseFloat(sessionStorage.getItem("confSessionCost")) + parseFloat(sessionStorage.getItem("confPackCost")));
      writeSessionValues();
}

// displays the values you have entered
function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.getItem('confName');
      document.getElementById("regGroup").textContent = sessionStorage.getItem('confGroup');
      document.getElementById("regEmail").textContent = sessionStorage.getItem('confMail');
      document.getElementById("regPhone").textContent = sessionStorage.getItem('confPhone');
      document.getElementById("regSession").textContent = sessionStorage.getItem('confSession');
      document.getElementById("regBanquet").textContent = sessionStorage.getItem('confBanquet');
      document.getElementById("regPack").textContent = sessionStorage.getItem('confPack');
      document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal");
}