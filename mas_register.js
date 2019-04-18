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
      var input = document.querySelectorAll('#fnBox, #lnBox, #groupBox, #mailBox, #phoneBox, #banquetBox');
      console.log(input);
      input.onblur = calcCart;
})