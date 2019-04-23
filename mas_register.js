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


window.addEventListener('load', function () {
      calcCart();
      var regSubmit = document.getElementById("regSubmit");
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
      sessionStorage.setItem("confName", document.getElementById("fnBox").value + " " + document.getElementById("lnBox").value);
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value);
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value);
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value);
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value);
      sessionStorage.setItem("confBanquetCost", sessionStorage.getItem("confBanquet" * 55));


      if (sessionBox.selectedIndex != -1) {
            var confSession = sessionBox[sessionBox.selectedIndex].text;
            var confSessionCost = sessionBox[sessionBox.selectedIndex].value;
      } else {
            confSession = "";
            confSessionCost = 0;
      }

      sessionStorage.setItem("mediaCB", document.getElementById("mediaCB"));
      if (sessionStorage.getItem("mediaCB").checked) {
            sessionStorage.setItem("confPack", "yes");
            sessionStorage.setItem("confPackCost", 115);
      } else {
            sessionStorage.setItem("confPack", "no");
            sessionStorage.setItem("confPackCost", 0);
      }


      sessionStorage.setItem("confTotal", parseFloat(sessionStorage.getItem("confBanquetCost")) + parseFloat(sessionStorage.getItem("confSessionCost")) + parseFloat(sessionStorage.getItem("confPackCost")));

      writeSessionValues();
}

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