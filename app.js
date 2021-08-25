//AOS Library
AOS.init({
  duration: 2000,
  once: true,
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
  if (getComputedStyle(ulNavBar).getPropertyValue("display") == "none") {
    ulNavBar.style.display = "initial";
    barButton.style.display = "none"
    crossButton.style.display = "initial"
  }
}
// document.querySelector(".fa-bars").addEventListener("onclick",document.write("paki"))
// crossButton.addEventListener("click", console.log("sd"));

//Counter Effect
let card = document.querySelector(".featureCards")
window.addEventListener("scroll", function () {
  let windowPosition = window.scrollY > 0;
  let cardsPosition = card.scrollY > 0
  // let bottomBtn = document.querySelector(".topBtn");
  // bottomBtn.classList.toggle("animateTopBtn", windowPosition);
  // let navbar = document.querySelector(".head");
  // navbar.classList.toggle("navReal", windowPosition);
  console.log(cardsPosition)
});
!function (a, t) { "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : a.CountUp = t() }(this, function (a, t, n) { var e = function (a, t, n, e, i, r) { for (var o = 0, s = ["webkit", "moz", "ms", "o"], m = 0; m < s.length && !window.requestAnimationFrame; ++m)window.requestAnimationFrame = window[s[m] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s[m] + "CancelAnimationFrame"] || window[s[m] + "CancelRequestAnimationFrame"]; window.requestAnimationFrame || (window.requestAnimationFrame = function (a, t) { var n = (new Date).getTime(), e = Math.max(0, 16 - (n - o)), i = window.setTimeout(function () { a(n + e) }, e); return o = n + e, i }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) { clearTimeout(a) }); var u = this; u.options = { useEasing: !0, useGrouping: !0, separator: ",", decimal: ".", easingFn: null, formattingFn: null }; for (var l in r) r.hasOwnProperty(l) && (u.options[l] = r[l]); "" === u.options.separator && (u.options.useGrouping = !1), u.options.prefix || (u.options.prefix = ""), u.options.suffix || (u.options.suffix = ""), u.d = "string" == typeof a ? document.getElementById(a) : a, u.startVal = Number(t), u.endVal = Number(n), u.countDown = u.startVal > u.endVal, u.frameVal = u.startVal, u.decimals = Math.max(0, e || 0), u.dec = Math.pow(10, u.decimals), u.duration = 1e3 * Number(i) || 2e3, u.formatNumber = function (a) { a = a.toFixed(u.decimals), a += ""; var t, n, e, i; if (t = a.split("."), n = t[0], e = t.length > 1 ? u.options.decimal + t[1] : "", i = /(\d+)(\d{3})/, u.options.useGrouping) for (; i.test(n);)n = n.replace(i, "$1" + u.options.separator + "$2"); return u.options.prefix + n + e + u.options.suffix }, u.easeOutExpo = function (a, t, n, e) { return n * (-Math.pow(2, -10 * a / e) + 1) * 1024 / 1023 + t }, u.easingFn = u.options.easingFn ? u.options.easingFn : u.easeOutExpo, u.formattingFn = u.options.formattingFn ? u.options.formattingFn : u.formatNumber, u.version = function () { return "1.7.1" }, u.printValue = function (a) { var t = u.formattingFn(a); "INPUT" === u.d.tagName ? this.d.value = t : "text" === u.d.tagName || "tspan" === u.d.tagName ? this.d.textContent = t : this.d.innerHTML = t }, u.count = function (a) { u.startTime || (u.startTime = a), u.timestamp = a; var t = a - u.startTime; u.remaining = u.duration - t, u.options.useEasing ? u.countDown ? u.frameVal = u.startVal - u.easingFn(t, 0, u.startVal - u.endVal, u.duration) : u.frameVal = u.easingFn(t, u.startVal, u.endVal - u.startVal, u.duration) : u.countDown ? u.frameVal = u.startVal - (u.startVal - u.endVal) * (t / u.duration) : u.frameVal = u.startVal + (u.endVal - u.startVal) * (t / u.duration), u.countDown ? u.frameVal = u.frameVal < u.endVal ? u.endVal : u.frameVal : u.frameVal = u.frameVal > u.endVal ? u.endVal : u.frameVal, u.frameVal = Math.round(u.frameVal * u.dec) / u.dec, u.printValue(u.frameVal), t < u.duration ? u.rAF = requestAnimationFrame(u.count) : u.callback && u.callback() }, u.start = function (a) { return u.callback = a, u.rAF = requestAnimationFrame(u.count), !1 }, u.pauseResume = function () { u.paused ? (u.paused = !1, delete u.startTime, u.duration = u.remaining, u.startVal = u.frameVal, requestAnimationFrame(u.count)) : (u.paused = !0, cancelAnimationFrame(u.rAF)) }, u.reset = function () { u.paused = !1, delete u.startTime, u.startVal = t, cancelAnimationFrame(u.rAF), u.printValue(u.startVal) }, u.update = function (a) { cancelAnimationFrame(u.rAF), u.paused = !1, delete u.startTime, u.startVal = u.frameVal, u.endVal = Number(a), u.countDown = u.startVal > u.endVal, u.rAF = requestAnimationFrame(u.count) }, u.printValue(u.startVal) }; return e });
{
  let countUp = new CountUp("sixtyFive", 0, 65)
  countUp.start();

};
{
  let countUp = new CountUp("ninetyOne", 0, 91)
  countUp.start();

};
{
  let countUp = new CountUp("twenty", 0, 20)
  countUp.start();

};
{
  let countUp = new CountUp("eightyFive", 0, 85)
  countUp.start();

};
