
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: March 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates area of a triangle.
 */
function calculateVolumeOfCylinder() {
  // input
  const heightOfCylinder = parseFloat(document.getElementById('height-of-cylinder').value)
  const radiusOfBase = parseFloat(document.getElementById('radius-of-base').value)

  // process
  const volumeOfCylinder = (Math.PI * radiusOfBase * radiusOfBase * heightOfCylinder) 
  // output
  document.getElementById('answer').innerHTML = 'The volume is: ' + volumeOfCylinder.toFixed(2) + ' cm³'
}
