'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); 
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
////////////////////////////////////////////////////////////////////
const message=document.createElement("div");
message.classList.add("cookie-message","text-focus-in");
const header=document.querySelector(".header");
message.innerHTML='we are using the cokies to provide you with a better experince<button class="btn btn-class-coockie shake-horizontal">Got it !</button>'
//  header.prepend(message);
//  header.insertAdjacentElement("afterbegin",message);
 //header.append(message);
 header.insertAdjacentElement("beforeend",message);
 
 const btnclassCoockie=document.querySelector('.btn-class-coockie');
 //console.log("🚀 ~ file: script.js ~ line 43 ~ btnclassCoockie", btnclassCoockie)
 btnclassCoockie.addEventListener('click',function(){
   // cockies approvale 
   message.classList.add("text-blur-out");
   setTimeout(function(){
    // header.removeChild(message)
    //message.parentElement.removeChild(message);
    message.remove();
   },1000*1.5);
 

 })
message.style.backgroundColor='var(--color-coockie-banner)'
  btnclassCoockie.addEventListener('mouseover',function(){
    btnclassCoockie.classList.remove('shake-horizontal');
// cockies approvale 

 })
// document.documentElement.style.setProperty()
//console.log(document.documentElement.style.setProperty('--color-coockie-banner','orangered'));
// to change the root variables 