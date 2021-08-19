//AOS Library
AOS.init({
  duration: 2000,
});
// adding attribute to every Element
// --------ERROR
// let bodyEle = document.body.childNodes;
// let bodyEleArr = [...bodyEle]
// const addingAtt = () => {
//   bodyEleArr.map(function(content){
//     var mine = content.innerHtml;
//     // mine.setAttribute("data-aos","zoom-in")
//     // console.log(content)
//     return mine
//   });
// };
// var check = document.querySelector(".spans")
// check.setAttribute("data-aos","zoom-in")
// console.log(check)
// addingAtt()

//Preloader Starts
let preLoaderScreen = document.querySelector(".bgScreen");
const preLoader = () => {
  preLoaderScreen.style.display = "none";
};
document.addEventListener(onload, preLoader());

//swiper Library
const swiper = new Swiper(".swiper-container", {
  // Responsive breakpoints
  autoplay: {
    delay: 1000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      loop: true,
      slidesPerView: 6,
      spaceBetween: 40,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    768: {
      slidesPerView: 5,
    },
  },
});
//swiper for feedback

//color changing of Navbar
window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 0;
  let bottomBtn = document.querySelector(".topBtn");
  bottomBtn.classList.toggle("animateTopBtn", windowPosition);
  let navbar = document.querySelector(".head");
  navbar.classList.toggle("navReal", windowPosition);
});

//NavBar Responsive
let screenAt768 = matchMedia("(max-width:768px)");
let ulNavBar = document.querySelector(".navBar");
let barButton = document.querySelector(".fa-bars");
let crossButton = document.querySelector(".fa-times");

const respNavBar = () => {
if(getComputedStyle(ulNavBar).getPropertyValue("display") == "none"){
  ulNavBar.style.display = "initial";
  barButton.style.display = "none"
  crossButton.style.display = "initial"
}
}
// document.querySelector(".fa-bars").addEventListener("onclick",document.write("paki"))
// crossButton.addEventListener("click", console.log("sd"));
