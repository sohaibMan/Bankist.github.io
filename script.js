"use strict";
/////////////////////////////////////

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
////////////////////////////////////////////////////////////////////
const message = document.createElement("div");
message.classList.add("cookie-message", "text-focus-in");
const header = document.querySelector(".header");
message.innerHTML =
  'we are using the cokies to provide you with a better experince<button class="btn btn-class-coockie shake-horizontal">Got it !</button>';
//  header.prepend(message);
//  header.insertAdjacentElement("afterbegin",message);
//header.append(message);
header.insertAdjacentElement("beforeend", message);

const btnclassCoockie = document.querySelector(".btn-class-coockie");
//console.log("🚀 ~ file: script.js ~ line 43 ~ btnclassCoockie", btnclassCoockie)
btnclassCoockie.addEventListener("click", function () {
  // cockies approvale
  message.classList.add("text-blur-out");
  setTimeout(function () {
    // header.removeChild(message)
    //message.parentElement.removeChild(message);
    message.remove();
  }, 1000 * 1.5);
});
message.style.backgroundColor = "var(--color-coockie-banner)";
function stopShakeing() {
  btnclassCoockie.classList.remove("shake-horizontal");
  btnclassCoockie.removeEventListener("mouseover", stopShakeing);
}
btnclassCoockie.addEventListener("mouseover", stopShakeing);
// document.documentElement.style.setProperty()
//console.log(document.documentElement.style.setProperty('--color-coockie-banner','orangered'));
// to change the root variables

//!scroling to the section 1(the old school)


function scrollIntoSection(indicteur,section){

  const btnscrollto = document.querySelector(indicteur);
  function  scrollSmoth() {
    const sec = document.querySelector(section);
    //const Sect1Cor=sec.getBoundingClientRect();
    // getBoundingClientRect kai7sab mn ras dyal l window so khsana nzido 3liha dak masfa li scronlina kamla (current scrolled)
    //window.scrollTo({left:0,top:Sect1Cor.y+window.scrollY,behavior:"smooth"});
    //!scroling to the section 1(the modern school)(modern broswers only)
    
    sec.scrollIntoView({ behavior: "smooth" });

  }
  btnscrollto.addEventListener("click",scrollSmoth);
}

scrollIntoSection(".btn--scroll-to","#section--1");
//!first idiot solution
// scrollIntoSection(".nav__link_1","#section--1");
// scrollIntoSection(".nav__link_2","#section--2");
// scrollIntoSection(".nav__link_3","#section--3");
//!second smart soltuion but with a bad performance
// document.querySelectorAll('.nav__link').forEach(element => {
//   element.addEventListener('click',function(e){
//     e.preventDefault();
//     document.querySelector(element.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
//   });

// });
//!best solution
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();
  //if(e.target!=e.currentTarget === if (e.target.classlist.contains("nav__link))"))
if(e.target!=e.currentTarget){
  document.querySelector(e.target.getAttribute("href")).scrollIntoView({ behavior: "smooth" });

}
});
//tabs

 
const tabs=document.querySelector(".operations");
const tabsChildren=tabs.children;
//console.log("🚀 ~ file: script.js ~ line 111 ~ tabsChildren", tabsChildren)
const tabsContainer=tabs.firstElementChild;
let lastTabActive=tabsContainer.firstElementChild;
 const tabsContent=[...tabsChildren];
 tabsContent.unshift();
//const tabsContent=tabsChildren.querySelectorAll(".operations__content");
//console.log("🚀 ~ file: script.js ~ line 117 ~ tabsChildren", tabsChildren)

//console.log("🚀 ~ file: script.js ~ line 115 ~ tabsContent", tabsContent)
//console.log("🚀 ~ file: script.js ~ line 113 ~ lastTabActive", lastTabActive)
tabsContainer.addEventListener("click",function(e){
  //e.target!=e.currentTarget 
  let target=e.target;
  if(target.tagName==='SPAN')target=target.parentElement;
  

if(target.classList.contains('operations__tab')   && lastTabActive!=target){
  // one of the tabs buttonwas clicked
  // remove the active class from all the tabs
  target.classList.add("operations__tab--active");
  tabsContent[target.dataset.tab].classList.add("operations__content--active");
  lastTabActive.classList.remove("operations__tab--active");
  tabsContent[lastTabActive.dataset.tab].classList.remove("operations__content--active");
  lastTabActive=target;
}

}) 
//console.log("🚀 ~ file: script.js ~ line 110 ~ tabs", tabsContainer.children);


// fade out efffect
const nav=document.querySelector(".nav");
// console.log("🚀 ~ file: script.js ~ line 143 ~ nav", nav)
//do the  in the hover
const hondleover=function(e){

  if(e.target.classList.contains("nav__link")){
    const link=e.target; 
    const siblings=link.closest(".nav").querySelectorAll(".nav__link");
    const logo=link.closest(".nav").querySelector(".nav__logo");
  siblings.forEach(element => {
    if(element!=link)element.style.opacity=this
  });
  logo.style.opacity=this;
  }
  }
  

nav.addEventListener("mouseover",hondleover.bind(0.5));
//undo what we did the the hover
nav.addEventListener("mouseout",hondleover.bind(1));
//! stiky nav
//? the bad way to do it( in every scroling we will check if the nav is in the viewport or not)
/*
window.addEventListener("scroll",function(){
 // console.log(window.scrollY===document.querySelector("#section--1").getBoundingClientRect().height);
  // console.log(document.querySelector("#section--1").getBoundingClientRect());
  // console.log(window.scrollY);
  if(document.querySelector("#section--1").getBoundingClientRect().y<=0)
  nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});
*/
//? implementing the stiky nav with the good way (Intersection Observer API)
//? working with a section1
// const sect1=document.querySelector("#section--1");
// const obsCallback=function(entries){
// entries.forEach(entry=>{
//   console.log(entry,entry.isIntersecting);
// if(entry.isIntersecting || entry.boundingClientRect.y<=0)nav.classList.add("sticky");
// else  nav.classList.remove("sticky");

// })
// };
// const obsOptions={
//   root:null,
//   threshold:0.1
// };  
// const navObserver=new IntersectionObserver(obsCallback,obsOptions);;
// navObserver.observe(sect1)
//?working the hero header (better and best)
const headerObse=new IntersectionObserver(function(entries){
  const [entry]=entries;
if(!entry.isIntersecting)nav.classList.add("sticky")
 else nav.classList.remove("sticky")

},{root:null,threshold:0.1,rootMargin:`-${nav.getBoundingClientRect().height}px`,});
headerObse.observe(header);
//?Revealing Elements on Scroll
const allSections=document.querySelectorAll('section');
//console.log("🚀 ~ file: script.js ~ line 201 ~ allSections", allSections)
const revealSection=function(entries,observer){
  const [entry]=entries;
  //console.log("🚀 ~ file: script.js ~ line 202 ~ revealSection ~ entries", entry)
   //console.log("🚀 ~ file: script.js ~ line 205 ~ revealSection ~ entry", entry.isIntersecting)
  if(entry.isIntersecting)
 {entry.target.classList.remove('section--hidden');
  sectionObserver.unobserve(entry.target);
}
}
const  revalOptions={
  root:null,threshold:0,
}
const sectionObserver=new IntersectionObserver(revealSection,revalOptions );
allSections.forEach(function(section){
  //section.classList.add('section--hidden');
  sectionObserver.observe(section);
  // flag 1
  
})
//lazy image (improve performance)
const LazyImages=document.querySelectorAll("img[data-src]");
const lazyImageLoead =function(entries,observer){
const [entry]=entries;
if(entry.isIntersecting){
entry.target.setAttribute('src',entry.target.dataset.src);

entry.target.addEventListener('load',function(){
  entry.target.classList.remove('lazy-img');

})
observer.unobserve(entry.target);
//console.log("🚀 ~ file: script.js ~ line 228 ~ lazyImageLoead ~ ntry.target.dataset(src)-", entry.target.dataset.src)
}

}
const LazyImageOptions={
root:null,threshold:0,
rootMargin:`${8*16}px`,
}
const lazyImageObsever=new IntersectionObserver(lazyImageLoead,LazyImageOptions);

LazyImages.forEach((img)=>lazyImageObsever.observe(img));


// adding slides
const slides=document.querySelectorAll('.slide'); 
const dots=document.querySelector('.dots'); 
let slidesCor=[];
let numbOfSlides=slides.length;

const intialStat=function(){
  for(let i=0;i<numbOfSlides;i++){
    slidesCor[i]=i*100;
  };
}
intialStat();
//inital state
slides.forEach((s,i)=>
{
  s.style.transform=`translateX(${slidesCor[i]}%)`;
  const dot=document.createElement("div");
  dot.classList.add('dots__dot');
  dot.dataset.slide=i+1;
  dots.append(dot);
 // dots.innerHTML=dot;
}
);   
 // let x=0,y=100,z=200;
  //console.log("🚀 ~ file: script.js ~ line 262 ~ numbOfSlides", numbOfSlides)

dots.children[0].classList.add("dots__dot--active");
//console.log(dots.children[0]);

 const slideBtnLeft=document.querySelector('.slider__btn--left');
 //console.log("🚀 ~ file: script.js ~ line 252 ~ slideBtnLeft", slideBtnLeft)
 const slideBtnRight=document.querySelector('.slider__btn--right');
 //console.log("🚀 ~ file: script.js ~ line 254 ~ slideBtnRight", slideBtnRight)

 const slideChangePostion=function()
 {

  for (let i = 0; i < arguments.length; i++) {
 //console.log(index,arguments[index]);
 //console.log(arguments[i]);
 if(arguments[i]==0){
  dots.children[i].classList.add('dots__dot--active');
  //console.log('the active is i',i+1);
 }
 else dots.children[i].classList.remove('dots__dot--active');
 slides[i].style.transform=`translateX(${arguments[i]}%)`;
 //console.log("🚀 ~ file: script.js ~ line 263 ~ slides[i].style.transform=", slides[i].style.transform)
 //console.log(arguments[i]);
 //slides[i];
  }
  // 
  
//  arguments.forEach(

// function(element,index){
//   console.log(elment,index);
// }

//  )
 }

//  } const slideChangePostion=()=>{
//   console.log(arguments[0]);
//  }
// const changeCor=(indexOfActive)=>{
// //slidesCor is a global array variab
// slidesCor[indexOfActive]=0;
//   for(let i=0;i<indexOfActive;i++){
// slidesCor[i]=slidesCor[i+1]-100;;
//   }
//   for(let i=indexOfActive+1;i<numbOfSlides;i++){
//     slidesCor[i]-=100;
//   }
  
// }
 const slidetoleft=function(){
//console.log('left clicked');

if(slidesCor[0]===0){
// //cannot turn to left

intialStat();
//console.log(slidesCor);
for(let i=0;i<numbOfSlides;i++)slidesCor[i]-=((numbOfSlides-1)*100);
 }
 else {

for(let i=0;i<numbOfSlides;i++){
  slidesCor[i]+=100;
}
 }
slideChangePostion(...slidesCor);
 }
slideBtnLeft.addEventListener('click',slidetoleft);
const slidetoright=function(){

  //console.log('right clicked');
   
// if(z==0){
//   //cannot turn to left
//   x=0;y=100;z=200;
//   }
//   else {
//     x-=100;y-=100;z-=100;
//     }
if(slidesCor[numbOfSlides-1]===0){
  // //cannot turn to left
  //alert('imposi');
  intialStat();
  //console.log(slidesCor);
 
   }
   else {
  
  for(let i=0;i<numbOfSlides;i++){
    slidesCor[i]-=100;
  }
}


    slideChangePostion(...slidesCor);
  
}
 slideBtnRight.addEventListener('click',slidetoright);
 dots.addEventListener('click',function(e){
// if(e.target.dataset.slide){

// }
//console.log(e.target.classList.contains('dots__dot') && e.target.dataset.slide);

if(e.target.classList.contains('dots__dot') && !e.target.classList.contains('dots__dot--active') ){
 // let active=e.target.dataset.slide;
// if(e.target.dataset.slide==1){
//   x=0;y=100;z=200;
// }
// if(e.target.dataset.slide==2){
//   x=-100;y=0;z=100;
// }
// if(e.target.dataset.slide==3){
//   x=-200;y=-100;z=0;
// }
const mid=slidesCor[e.target.dataset.slide-1];
for(let i=0;i<numbOfSlides;i++){
  slidesCor[i]-=mid;
}
slideChangePostion(...slidesCor);
// while(--active){
//   slidetoright();
// }
// while(active--<numbOfSlides-1){
//   slidetoleft();
// }

// !not yet



}
 });

// bind return a function with this keyword set to the argument passed in the function call

//nav.addEventListener("mouseover",function(e){
//   hondleover(e,0.5);
// });
// //undo what we did the the hover
// nav.addEventListener("mouseout",function(e){
//   hondleover(e,1);
// });




//  console.log("🚀 ~ file: script.js ~ line 88 ~ document.querySelectorAll ~ element",element.getAttribute('href'));
  //scrollIntoSection(element,element.getAttribute('href'));
// h1 effect

// const h1 = document.querySelector("h1");
// // mouseenter =hover
// const headerAnimation = function (e) {
//   //  h1.removeEventListener('mouseenter',headerAnimation);
// };

// h1.addEventListener("mouseenter", headerAnimation);

// mouseenter =hover
//===================
// h1.onmouseenter=function(e){
// console.log(e);
// };

//evenet propagattion from the  target to document

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);
// const randomColor = () =>
//   `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// //console.log("🚀 ~ file: script.js ~ line 103 ~ randomclor", randomColor());
// document.querySelector(".nav__link").addEventListener('click',function(e){
// this.style.backgroundColor=randomColor();
// //e.stopPropagation();
// console.log(e.target,e.currentTarget);

// });
//  document.querySelector(".nav__links").addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log(e.target,e.currentTarget);
 
// }); 
// document.querySelector(".nav").addEventListener('click',function(e){
//   this.style.backgroundColor=randomColor();
//   console.log(e.target,e.currentTarget);
// },true); 
//currentTarget howa target dyal db li fih hna ms  taget bo7da howa li lwl tsbab f had currenct taret
//targetcurrentTargt===this
//const h1=document.querySelector('h1');
// console.log("🚀 ~ file: script.js ~ line 150 ~ h1", h1.querySelectorAll('.highlight'))
// console.log("🚀 ~ file: script.js ~ line 150 ~ h1", h1.firstElementChild);
// console.log("🚀 ~ file: script.js ~ line 150 ~ h1", h1.firstChild);
// console.log("🚀 ~ file: script.js ~ line 150 ~ h1", h1.lastChild);
// console.log("🚀 ~ file: script.js ~ line 150 ~ h1", h1.lastElementChild);
// console.log("🚀 ~ file: script.js ~ line 150 ~ h1", h1.parentNode);
// console.log("🚀 ~ file: script.js ~ line 150 ~ h1", h1.parentElement);
// console.log(h1.parentNode);
// console.log(h1.parentElement);
 //h1.closest('.header').style.background='var(--gradient-secondary)';
 //
//closet katl3 n parents
