"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author:  Chad Williams
   Date:    4.18.19  


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

window.addEventListener("load", writeSessionValues);

// calls and displays the sessionStorages variables from the other JS document on this page
function writeSessionValues(confName, confGroup, confMail, confPhone, confSession, confBanquet, confPack, confTotal) {
      document.getElementById("regName").textContent = confName;
      console.log
      document.getElementById("regGroup").textContent = confGroup;
      document.getElementById("regEmail").textContent = confMail;
      document.getElementById("regPhone").textContent = confPhone;
      document.getElementById("regSession").textContent = confSession;
      document.getElementById("regBanquet").textContent = confBanquet;
      document.getElementById("regPack").textContent = confPack;
      console.log(confName)

      document.getElementById("regTotal").textContent = "$" + confTotal
}