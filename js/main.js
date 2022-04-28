"use strict";

import reviews from './reviews.js';
let prevBtn = document.querySelector(".prev-btn"),
nextBtn = document.querySelector(".next-btn"),
randomBtn = document.querySelector(".random-btn"),
imgPerson = document.querySelector(".img-container img"),
author = document.querySelector("#author"),
job = document.querySelector("#job"),
info = document.querySelector("#info"),
currentElement;
currentElement = 0;

function getRandomReviews() {
    return Math.floor(Math.random() *reviews.length)
}
window.addEventListener("DOMContentLoaded",function(){
    windowLoaded()
    
})
function windowLoaded() {
    let item = reviews[currentElement];
    imgPerson.setAttribute("src",item.img);
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
nextBtn.addEventListener(("click"),function(){
    getSlider(1)
})
prevBtn.addEventListener(("click"),function(){
    getSlider(-1)
})
randomBtn.addEventListener(("click"),function(){
    let random = getRandomReviews();
    getSlider(random)
})
function getSlider(i)
{
    currentElement = currentElement + i ;
    if(currentElement > reviews.length - 1)
    {
        currentElement = 0;

    }
    if(currentElement < 0 ){
        currentElement = reviews.length - 1
    }
    windowLoaded()
}